
import fs from 'fs/promises';

fs.readFile("./data/data.txt","utf-8")
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

.finally (() => {
    console.log("hello");
});

fs.readFile("./data/data/file1.txt","utf-8")
.then ((data1) => {
    console.log(data1);
    return fs.readFile("./data/data/file2.txt", "utf-8");
})
.then ((data2) => {
    console.log(data2);
    return fs.readFile("./data/data/file3.txt", "utf-8");
})
.then ((data3) => {
    console.log(data3);
})

.catch((error) => {
    console.log(error);
});
