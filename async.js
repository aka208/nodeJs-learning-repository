const fs = require("fs");
const https = require("https");

https.get("https://dummyjson.com/products/1", (data, error) => {
  //   const dataJson = JSON.parse(data);
  console.log("Fetched data successfully!");
});

// readFileSync is sync and will block main thread
fs.readFileSync("./file.txt", "utf8");
// dont use readFileSync

// readFile is async
fs.readFile("./file.txt", "utf8", (error, data) => {
  console.log("file", data);
});
setTimeout(() => {
  console.log("SetTimeout ran");
}, 1000);
