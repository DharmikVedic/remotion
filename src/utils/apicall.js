export async function FetchApi(apiname, reqdata) {
  const d = await fetch(`https://json.astrologyapi.com/v1/${apiname}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization:
              "Basic " + "NjIwNDU3OjJiYTdhNTRlNDJmMzlmYTZhMDU2MDJkOTYyZmM5ZWRi",
      },
      body: JSON.stringify(reqdata),
  });
  const res = await d.json();
  return res;
}


