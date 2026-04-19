import { ifError } from 'assert/strict';
import fs from 'fs';

// synchronous file read
// read file

// const result = fs.readFileSync("data/data.txt", "utf8");

// console.log(result);

// const image = fs.readFileSync("data/image.jpg","base64");
// console.log(image);

// write file
// fs.writeFileSync("data/file.txt", "This is a newly created file.");

// // update file
// fs.appendFileSync("data/file.txt", "\nThis is an updated line.");

// Delete file
// fs.rmSync("data/file.txt");

// 2. Asynchronous method
// read
console.log("Start");
fs.readFile("data/data.txt", "utf8", (error,data) => {
    if (error) {
        console.log(error);
    }
    console.log(data);
});

console.log("End");

// write file

fs.writeFile("data/data.json", JSON.stringify({ name: "Ram", age: 30 }), (error) => {
    if (error) {
        console.log(error);
    }
    console.log("File written successfully.");
});

// update
fs.appendFile("data/data.json",JSON.stringify({ name: "Sita", age: 25 }),(error) => {
    if (error) {
    console.log(error);
    }
    console.log("File written successfully.");
});

// Delete file

fs.rm("data/data.json");