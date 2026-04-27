import fs from "fs/promises";

const getAllProducts = async () => {
  const products = await fs.readFile("src/data/product.json", "utf-8");
  return JSON.parse(products);
};

const getFirstProduct = async () => {
  const product = await fs.readFile("src/data/product.json", "utf-8");
  const firstProduct = JSON.parse(product)[0];
  return firstProduct;
};

const getProductById = async (id) => {
  const product = await fs.readFile("src/data/product.json", "utf-8");
  const list = JSON.parse(product);
  return list.find((product) => product.id == id);
};

export default { getAllProducts, getFirstProduct, getProductById };
