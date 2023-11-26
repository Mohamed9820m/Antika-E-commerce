const User = require ('../model/User')
const Product = require ('../model/Product')
const SellerController = {
   
  async createUser(req, res) {
    try {
      const user = await user.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create the user.' });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await user.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch users.' });
    }
  },

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
      const products = await Product.findAll( {
        where: {
          UserId: userId,
        },
      });
      const userDataWithProducts = {
        user,
        products,
      };

      return res.status(200).json(userDataWithProducts);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch the user and products.' });
    }
  },

  async updateUser(req, res) {
    try {
      const [updatedRowsCount, updatedUsers] = await user.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: 'User not found.' });
      }
      return res.status(200).json(updatedUsers[0]);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update the user.' });
    }
  },

  async deleteUser(req, res) {
    try {
      const deletedRowCount = await user.destroy({ where: { id: req.params.id } });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: 'User not found.' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete the user.' });
    }
  },
};

module.exports = SellerController;
