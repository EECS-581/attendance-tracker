import fetch from 'node-fetch';


const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/hudsonhrh/attedancetest';

async function querySubgraph(query) {
    const response = await fetch(SUBGRAPH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query
        }),
    });

    const data = await response.json();

    if (data.errors) {
        console.error('Error fetching data:', data.errors);
        return null;
    }

    return data.data;
}


const MY_QUERY = `
{
  mintEvents {
    id
    to
    amount
    time
  }
}
`;

querySubgraph(MY_QUERY).then(data => {
    if (data) {
        console.log('Mint Events:', data.mintEvents);
    }
});
