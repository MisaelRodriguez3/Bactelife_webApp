import { Router } from "express";
import { addProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../controllers/products.controller.js";

const router = Router();

router.post('/product', addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.delete('/delete-product/:id', deleteProduct);
router.put('/update-product/:id', updateProduct);

export default router;