// use this as an action to monday.com trigger
export async function executeAction(req, res) {
  const { shortLivedToken } = req.session;
  const { payload } = req.body;

  try {
    // TODO: Implement this function
    console.log('executeAction', { payload });
    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'internal server error' });
  }
}

const API_KEY = '<YOUR_API_KEY>';
const PROJECTS_BOARD_ID = 1646813786;

export async function getItems(req, res) {
  let query = `query { boards (ids: ${PROJECTS_BOARD_ID}) { name state permissions items_page { items { id name }}}}`;

  let result = await fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
     },
     body: JSON.stringify({
       query : query
     })
    }).then(res => res.json());

  console.log(result);

  return res.json(result);
}
