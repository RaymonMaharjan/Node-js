import fs from "fs/promises";

// async function readData(){
//     try {
//         const data = await fs.readFile("data/data.txt","utf-8");
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// readData();

const readMultipleData = async () => {
  try {
    const data1 = await fs.readFile("data/file1.txt", "utf-8");
    const data2 = await fs.readFile("data/file2.txt", "utf-8");
    const data3 = await fs.readFile("data/file3.txt", "utf-8");
    console.log(data1);
    console.log(data2);
    console.log(data3);
  } catch (err) {
    console.log(err);
  }
};

readMultipleData();
