import express, { response } from 'express';
import fs from 'fs/promises';
import config from "./config/config.js";

const app = express ();

app.get("/", (request,response) =>{
    response.send("Home Page");
});
app.get("/about", (request,response) =>{
    response.send("About Page");
});
app.get("/product", async (request,response) =>{
    const product = await fs.readFile("src/data/product.json","utf-8");
    response.json(JSON.parse(product));
});

app.get("/product/first", async (request, response) => {
  const product = await fs.readFile("src/data/product.json", "utf-8");

  const firstProduct = JSON.parse(product)[7];
  response.json(firstProduct);
});



app.get("/contact",  (request, response) => {
    response.send("Contact Page");
});

app.post("/contact", (request,response) =>{
    response.send("Submission Page");
});


app.listen(config.port, ()=> {
    console.log(`Server Running at port ${config.port}.....`);
});
