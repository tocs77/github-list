const BASE_URL = 'https://api.github.com';

//Function parses paginations links from github and retruns pagination link and amount of pages
export const paginationParse = (paginationString) => {
  const links = paginationString.split(',');
  const l = links.map((e) => {
    return e.split(';');
  });

  let lastLink = l[1][0];
  lastLink = lastLink.replace(BASE_URL, '');
  lastLink = lastLink.slice(2, lastLink.length - 1);
  const linkParts = lastLink.split('&');

  const pages = linkParts[linkParts.length - 1].split('=');

  const paginationLength = pages[1];
  linkParts[linkParts.length - 1] = pages[0];

  const paginationLink = linkParts.join('&') + '=';

  return { paginationLink: paginationLink, paginationLength: paginationLength };
};
