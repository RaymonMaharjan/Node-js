import productService from "../services/product.service.js";

const getAllProducts = async (request, response) => {
    const products = await productService.getAllProducts();
    response.json(products);
};

const getFirstProduct = async (request, response) => {
    const product = await productService.getFirstProduct();
    response.json(product);
};

const getProductById = async (request, response) => {
    const id = request.params.id;
    const product = await productService.getProductById(id);

    if (!product) return response.status(404).json  ( {message: "Product not found"});

    response.json(product);
};




export default { getAllProducts, getFirstProduct, getProductById};