const parseUrl = function (url) {
  const parser = document.createElement("a");
  parser.href = url;

  const params = {};
  const query = parser.search.slice(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split("=");
    params[decodeURI(pair[0])] = decodeURIComponent(pair[1]);
  }
  return {
    query,
    params,
    origin: parser.origin,
    protocol: parser.protocol,
    host: parser.host,
    path: parser.pathname,
    hash: parser.hash,
  };
};

const url = "https://example.com:8080/path/name?query=123#hash";

console.log(parseUrl(url));
