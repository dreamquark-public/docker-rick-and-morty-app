function convertObjectToQueryString(queryStringAsObject) {
  return Object.keys(queryStringAsObject).reduce((queryString, objectKey, index) => {
    let updatedQueryString = '';

    if (index === 0) {
      updatedQueryString = '?';
    } else {
      updatedQueryString = `${queryString}&`;
    }

    updatedQueryString += `${objectKey}=${queryStringAsObject[objectKey]}`;

    return updatedQueryString;
  }, '');
}

export function updateQueryString(history, queryStringAsObject) {
  history.replace({
    pathname: history.location.pathname,
    search: convertObjectToQueryString(queryStringAsObject),
  });
}

export default {
  updateQueryString,
};
