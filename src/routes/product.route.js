import express from 'express';
import productController from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/first", productController.getFirstProduct);

// Dynamic Route 

router.get("/:id", productController.getProductById);


export default router;  