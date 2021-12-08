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
    } else if (
      req.url.match(/\/getData\/([a-z0-9]+)/) &&
      req.method === "GET"
    ) {
      const id = req.url.split(`/`).reverse()[0];
      const findData = data.find((item) => item.id == id);
      res.writeHead(200, headers);
      res.end(JSON.stringify({ data: findData }));
    }
  })
  .listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 3000");
  });

// const express = require("express");
// const data = require("./data.json");

// const app = express();
// app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");

//   res.header(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
//   );

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//     return res.status(200).json({});
//   }

//   next();
// });
// app.get("/", (req, res) => {
//   res.json({ data });
// });

// app.listen(3000);
