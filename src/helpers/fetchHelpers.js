const API_URL = 'http://localhost:8080/graphql';

function generateApiRequestHeaders() {
  const headers = new Headers();
  headers.append('Content-type', 'application/json');

  return headers;
}

const constructGraphQLQuery = (type, entityName, fieldToRetrieve) => `${type} {
  ${entityName} {
    ${fieldToRetrieve}
  }
}`;

/* eslint-disable no-console */
async function GraphQLFetcher(type, entityName, fieldToRetrieve) {
  const reqOptions = {
    method: 'POST',
    headers: generateApiRequestHeaders(),
    mode: 'cors',
    body: JSON.stringify({
      query: constructGraphQLQuery(type, entityName, fieldToRetrieve),
    }),
  };

  const rawFetchResponse = await fetch(API_URL, reqOptions);

  if (rawFetchResponse.ok) {
    const parsedResponse = await rawFetchResponse.json();

    if (parsedResponse.errors) console.error(JSON.stringify(parsedResponse.errors, null, 4));

    return parsedResponse.data[entityName];
  }
  // manage error
  const parsedResponse = await rawFetchResponse.json();
  throw new Error(JSON.stringify(parsedResponse.errors, null, 4));
}

export default GraphQLFetcher;
