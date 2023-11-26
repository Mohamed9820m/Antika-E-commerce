const Review = require("../model/Review");
const Product = require("../model/Product");
const User= require("../model/User")
const { where } = require("sequelize");
module.exports = {
  getAll(req, res) {
    const id = req.params.id;
    Review.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName', 'address', 'phoneNumber'],
        },
        {
          model: Product,
          where: { id: id },
        },
      ],
    })
    
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  },

  addReview(req, res) {
    const { rating, comment } = req.body;
    const UserId = req.params.ClientId;
    const ProductId = req.params.ProductId;
    Review.create({ rating, comment, UserId, ProductId })
      .then((reslmt) => {
        res.status(201).send(reslmt);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  update(req, res) {
    const id = req.params.id;
    const comment = req.body.comment;
    Review.update(
      { comment: comment },
      {
        where: {
          id: id,
        },
      }
    )
      .then((result) => {
        res.status(204).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
