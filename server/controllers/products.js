const Product = require ('../model/Product'); 

const ProductController = {
  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body); 
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create the product.' });
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll(); 
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch products.' });
    }
  },

  async getProductById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id); 
      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch the product.' });
    }
  },

  async updateProduct(req, res) {
    try {
      const [updatedRowsCount, updatedProducts] = await Product.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      }); 
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'Product not found.' });
      }
      return res.status(200).json(updatedProducts[0]);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update the product.' });
    }
  },

  async deleteProduct(req, res) {
    try {
      const deletedRowCount = await Product.destroy({ where: { id: req.params.id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: 'Product not found.' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete the product.' });
    }
  },
};

module.exports = ProductController;
