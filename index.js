
const readline = require("readline-sync");

const input = readline.question("Welcome to UrlEncodeNdDecode.\n\nEnter Your String and Press Enter\n");

const choice = readline.question("\nEnter 1 to base64Encode\nEnter 2 to base64Decode\n");

const encode = (input) => Buffer.from(input).toString('base64');

const decode = (input) => Buffer.from(input, 'base64').toString('ascii');

if(choice==1)
console.log("Encoded to base64-\n"+encode(input));

else if(choice==2)
console.log("Decoded to ASCII-\n"+decode(input));

else
console.log("Enter a Valid Option!"); 