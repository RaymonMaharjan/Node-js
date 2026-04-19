import { strictEqual } from "assert/strict";
import http from "http";
import { stringify } from "querystring";
import fs from "fs";

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.writeHead(200, { "content-type": "text/html" });

  //     response.end("Hello World!");
  // });
  // response.writeHead(200, { "content-type": "application/json" });
  // response.end(JSON.stringify({status: "OK"}));

  const htmlContent = fs.readFileSync("data/index.html", "utf8");
  response.end(htmlContent);
});
server.listen(8000, () => {
  console.log("Server is running on port 8000.....");
});
