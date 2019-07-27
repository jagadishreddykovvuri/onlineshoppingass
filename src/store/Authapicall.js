export default function onFetchapiCall(server, details) {
  const options = {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(server, options)
    .then(res => res.json())
    .then(res => {
      return res;
    });
}
