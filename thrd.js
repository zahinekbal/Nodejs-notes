//synchronous or blocking
//- line by line execution


//asynchronous or nonblocking
//- line by line execution not guaranteed
//- callback will fire
const fs=require("fs");
 fs.readFile("dele.txt", "utf-8", (err, data)=>
{
   console.log( data);
});
console.log("This is a message");
