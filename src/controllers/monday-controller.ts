// use this as an action to monday.com trigger
export async function executeAction(req, res) {
  const { shortLivedToken } = req.session;
  const { payload } = req.body;

  try {
    // TODO: Implement this function
    console.log("executeAction", { payload });
    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "internal server error" });
  }
}

const API_KEY = '<YOUR_API_KEY>';
const PROJECTS_BOARD_ID = "1646887641";

async function mondayRequest(query) {
  let result = await fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  }).then((res) => res.json());

  return result;
}

interface ApiResponse {
  data: {
    boards: {
      items_page: {
        cursor?: string | null;
        items: {
          id: string;
          name: string;
          column_values: {
            id: string;
            value: string | null;
            type: string;
            label?: string;
            label_style?: {
              color?: string;
            };
          }[];
          assets: {
            public_url: string;
          }[];
        }[];
      };
    }[];
  };
  account_id: number;
}

export async function getItems(req, res) {
  getCompanyProjects(req.query.company_name).then((result) => {
    res.send(result);
  });
}

export async function getCompanyProjects(company_name) {
  let projects = await getProjects(PROJECTS_BOARD_ID);
  if (!company_name) {
    return projects;
  }
  return projects.filter((project) => project.companies.includes(company_name));
}

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string | null;
  status_color: string | null;
  tags: string | null;
  companies: string[];
  logo: string | null;
}

const projectNameCache = new Map<string, string>();

const getProjects = async (boardId: string): Promise<Project[]> => {
  let projects: Project[] = [];
  let nextPageCursor: string | undefined | null = null;

  do {
    const response = await getBoardItems(boardId, nextPageCursor);

    // Check if the response and required properties exist
    if (!response || !response.data || !response.data.boards || response.data.boards.length === 0) {
      console.error("Error: Unexpected response structure or empty boards data");
      break;
    }

    const board = response.data.boards[0];
    if (!board.items_page || !board.items_page.items) {
      console.error("Error: Missing items_page or items in the board response");
      break;
    }

    for (const item of board.items_page.items) {
      const description = item.column_values.find((col) => col.id === 'text__1')?.value ?? null;
      const tags = item.column_values.find((col) => col.id === 'text2__1')?.value ?? null;
      const boardRelation = item.column_values.find((col) => col.id === 'connect_boards__1')?.value ?? "{}";
      const linkedCompaniesIds = getLinkedCompanyIds(boardRelation);
      const companyNames = await getCompanyNames(linkedCompaniesIds); // Fetch company names

      console.log(JSON.stringify(item));

      projects.push({
        id: item.id,
        name: item.name,
        description,
        tags,
        status: item.column_values.find((col) => col.id === 'status')?.label ?? null,
        status_color: item.column_values.find((col) => col.id === 'status')?.label_style?.color ?? "",
        companies: companyNames,
        logo: item.assets.length > 0 ? item.assets[0].public_url : null,
      });
    }

    nextPageCursor = board.items_page.cursor; // Update cursor to fetch the next page if available
  } while (nextPageCursor);

  return projects;
};

const getBoardItems = async (boardId: string, pageCursor?: string | null): Promise<ApiResponse | null> => {
  const query = `
    query {
      boards(ids: [${boardId}]) {
        items_page (limit: 100, cursor: ${pageCursor ? `"${pageCursor}"` : null}) {
          items {
            id
            name
            column_values {
              id
              value
              type
              ... on StatusValue {
                index
                value
                label
                label_style {
                  color
                }
              }
            }
            assets {
              public_url
            }
          }
          cursor
        }
      }
    }
  `;

  try {
    const response = await mondayRequest(query);

    // Check the response structure
    if (!response || !response.data || !response.data.boards) {
      console.log(response);
      
      throw new Error("Invalid response structure");
    }

    return response as ApiResponse;
  } catch (error) {
    console.error("Error fetching board items:", error);
    return null;
  }
};

const getLinkedCompanyIds = (boardRelation: string): string[] => {
  try {
    const relation = JSON.parse(boardRelation);
    if (relation?.linkedPulseIds && Array.isArray(relation.linkedPulseIds)) {
      return relation.linkedPulseIds.map((pulse: { linkedPulseId: number }) => pulse.linkedPulseId.toString());
    }
  } catch (error) {
    console.error("Error parsing board relation:", error);
  }
  return [];
};

const getCompanyNames = async (companyIds: string[]): Promise<string[]> => {
  if (companyIds.length === 0) return [];

  const uncachedCompanyIds = companyIds.filter((id) => !projectNameCache.has(id));
  if (uncachedCompanyIds.length > 0) {
    const query = `
      query {
        items (ids: [${uncachedCompanyIds.join(",")}]) {
          id
          name
        }
      }
    `;

    try {
      const response = await mondayRequest(query);
      const items = response.data.items;

      // Cache the newly fetched company names
      items.forEach((item: { id: string; name: string }) => {
        projectNameCache.set(item.id, item.name);
      });
    } catch (error) {
      console.error("Error fetching company names:", error);
    }
  }

  // Retrieve all company names from cache
  return companyIds.map((id) => projectNameCache.get(id) || "Unknown Company");
};
