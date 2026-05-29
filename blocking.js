const crypto = require("crypto");

var a = 12;
var b = 13;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (key) => {
  console.log("Key is generated!!", key);
});

function multiply(a, b) {
  const result = a * b;
  console.log(result);
}
multiply(a, b);
