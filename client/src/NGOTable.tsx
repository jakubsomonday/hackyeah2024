import React from 'react';

const NGOTable = () => {
  // Sample data for NGOs
  const ngos = [
    { name: 'Save the Children', location: 'Global', focus: 'Child Education, Health, Rights', website: 'https://www.savethechildren.org' },
    { name: 'UNICEF', location: 'Global', focus: 'Child Survival, Education, Nutrition', website: 'https://www.unicef.org' },
    { name: 'SOS Children\'s Villages', location: 'Global', focus: 'Orphaned Children, Community Strengthening', website: 'https://www.sos-childrensvillages.org' },
    { name: 'Plan International', location: 'Global', focus: 'Children\'s Rights, Gender Equality', website: 'https://www.plan-international.org' },
    { name: 'World Vision', location: 'Global', focus: 'Child Protection, Education, Disaster Relief', website: 'https://www.worldvision.org' },
    { name: 'ChildFund', location: 'Global', focus: 'Child Development, Poverty, Education', website: 'https://www.childfund.org' },
    { name: 'Terre des Hommes', location: 'Global', focus: 'Children in Crisis, Education, Protection', website: 'https://www.tdh.ch/en' }
  ];

  return (
    <div className="container">
      <h2 className="title is-3">NGOs Helping Children</h2>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Focus Areas</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map((ngo, index) => (
            <tr key={index}>
              <td>{ngo.name}</td>
              <td>{ngo.location}</td>
              <td>{ngo.focus}</td>
              <td><a href={ngo.website} target="_blank" rel="noopener noreferrer">{ngo.website}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NGOTable;
