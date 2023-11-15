import { Router } from "express";
import { adminRequired } from "../middlewares/validateToken.js";
import { addProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../controllers/products.controller.js";

const router = Router();

router.post('/product', adminRequired, addProduct);
router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.delete('/delete-product/:id', adminRequired, deleteProduct);
router.put('/update-product/:id', adminRequired, updateProduct);

export default router;