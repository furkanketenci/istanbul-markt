import Product from '../models/product.js';
import {
  applyFilter,
  applyPagination,
  applySearch,
} from '../utils/productFilter.js';

const getAllProducts = async (req, res) => {
  try {
    const resultPerPage = 10;

    let query = Product.find();

    query = applySearch(query, req.query);

    query = applyFilter(query, req.query);

    query = applyPagination(query, req.query, resultPerPage);

    const allProduct = await query;

    res.status(200).json({ allProduct });
  } catch (err) {
    console.error('getAllProducts verisi çekilemedi!', err);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const getAProduct = await Product.findById(req.params.id);

    res.status(200).json({
      getAProduct,
    });
  } catch (err) {
    console.error('getOneProduct verisi çekilemedi!', err);
  }
};

const createProduct = async (req, res) => {
  try {
    const createAproduct = await Product.create(req.body);
    res.status(201).json({
      message: 'Ürün başarıyla oluşturuldu',
      createAproduct,
    });
  } catch (err) {
    console.error('Ürün oluştururken hata!', err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findById(req.params.id);
    await deleteProduct.remove();

    res.status(200).json({
      message: 'Ürün başarıyla silindi',
      deleteProduct,
    });
  } catch (err) {
    console.error('Ürün silerken hata!', err);
  }
};

const updateProduct = async (req, res) => {
  let updateProduct = await Product.findById(req.params.id);

  updateProduct = awaitProduct.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  // { new: true }: Güncellenmiş halini döndürür (aksi halde eski halini döner).
  // { runValidators: true }: Modeldeki kurallar (örneğin boş olamaz, sayı olmalı vs.) kontrol edilir.

  res.status(200).json({
    message: 'Ürün başarıyla güncellendi!',
    updateProduct,
  });
};

export {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
