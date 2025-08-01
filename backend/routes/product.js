import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from '../controllers/product.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/detail/:id', getOneProduct);
router.post('/product/new', createProduct);
router.post('/product/:id', deleteProduct);
router.post('/product/:id', updateProduct);

export default router;
