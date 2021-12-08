const data = require("./data.json");
require("http")
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, headers);
      // res.write('Hello World');
      res.end(JSON.stringify({ data }));
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
