const API_URL = 'http://localhost:8080/graphql';

function generateApiRequestHeaders() {
  const headers = new Headers();
  headers.append('Content-type', 'application/json');

  return headers;
}

/* eslint-disable no-console */
async function GraphQLFetcher(formatedGraphQLQuery, entityName, queryParams) {
  const reqOptions = {
    method: 'POST',
    headers: generateApiRequestHeaders(),
    mode: 'cors',
    body: JSON.stringify({
      query: formatedGraphQLQuery,
      variables: queryParams,
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
