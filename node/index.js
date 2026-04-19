console.log("start");

// const { sum } = require("./utils.js");

import { sum as mysum, square } from './utils.js';
import greet from "./utils.js";


// const fs = require("fs");

import fs from 'fs';

const name ="Ram";
console.log(name);

fs.readFile("data.txt", "utf-8", (error,data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});

const result = mysum (4,10);

// const squareresult = square (9); 

const greeting = greet ();
console.log(result);

console.log(square(9));

console.log(greeting);

console.log("End");