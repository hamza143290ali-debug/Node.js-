//import http module
//import fs moduel
const http = require("http");
const fs = require("fs");

//create a server and then create a file inside it add the url queryparameters
const server = http.createServer((req, res) => {

    //if req.url ye hain to yaha se res end karo
//   if (req.url === "/favicon.ico") {
//     return res.end();
//   }

  fs.appendFile("testing.txt", req.url + "\n", (err) => {
    if (err) {
      console.log("something wrong!");
    } else {
        //header ke andar host, connection, and other multiple info you can see
        console.log(req.headers.host)
      res.end("Done!");
    }
  });
});

//listen at port 8001
server.listen(8001, () => {
  console.log("Server is running!");
});
