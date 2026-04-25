import fs from "fs";

const fetechData = () =>
 new Promise((resolve, reject) => {
  fs.readFile("data/data.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

// fetechData.then((data) => {
//   console.log(data);
// });

async function myfetechData () {
    const data = await fetechData();
    console.log(data);
}

myfetechData();
