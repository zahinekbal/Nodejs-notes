const fs=require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "zahin");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("zahin.txt", text);