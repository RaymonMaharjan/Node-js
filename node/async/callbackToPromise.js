import fs from "fs";

const fetechData = romise((resolve, reject) => {
  fs.readFile("data/data.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

fetechData.then((data) => {
  console.log(data);
});
