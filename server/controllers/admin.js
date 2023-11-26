const user = require ('../model/User.js')
const Products= require('../model/Product.js')
const order = require('../model/Order.js')
const reviews = require('../model/Review.js')


const AdminControler ={

    async getAllseller(req,res){
        try{
            const sellers= await user.findAll({
                where:{
                    role:"Seller"
                }
            })
            res.status(200).json({message:'sellers retrieved successfully',sellers})
        } catch (error){
            console.log('error retrieving sellers:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getAllclient(req,res){
        try{
            const clients= await user.findAll({
                where:{
                    role:"Client"
                }
            })
            res.status(200).json({message:'clients retrieved successfully',clients})
        } catch (error){
            console.log('error retrieving clients:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async deleteSeller(req,res){
        const sellerId = req.params.id
        try{
            const seller= await user.findOne({
                where:{
                    id:sellerId,
                    role:'Seller'
                }
            })
            if (!seller) {
                return res.status(404).json({ error: 'seller not found' });
              }
              await seller.destroy()
            res.status(200).json({message:'seller deleted successfully'})
        } catch (error){
            console.log('Error deleting seller:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async deleteClient(req,res){
        const clientId = req.params.id
        try{
            const client= await user.findOne({
                where:{
                    id:clientId,
                    role:'Client'
                }
            })
            if (!client) {
                return res.status(404).json({ error: 'client not found' });
              }
              await client.destroy()
            res.status(200).json({message:'client deleted successfully'})
        } catch (error){
            console.log('Error deleting client:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getAllProducts(req, res) {
        try {
          const products = await Products.findAll({
            include: [
              { model: user, attributes: ['firstName','lastName','imageProfile'], as: 'User' },
            ]
          });
          res.status(200).json({ message: 'Products retrieved successfully',products });
        } catch (error) {
          console.error('Error retrieving products:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },

      async deleteProduct(req, res) {
        const productId = req.params.id;
    
        try {
          const product = await Products.findByPk(productId);
          if (!product) {
            return res.status(404).json({ error: 'Product not found' });
          }
          await product.destroy();
          res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
          console.error('Error deleting product:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },

      async SelectclientCount (req,res){
        try{
            const clientCount = await user.findAndCountAll({
                where:{
                    role:'Client'
                }
            })
            res.status(200).json({ message:'client count retrieved successfully',clientCount})
        } catch(error){
            console.log('error retrieving client count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },

      async SelectsellerCount (req,res){
        try{
            const sellerCount = await user.findAndCountAll({
                where:{
                    role:'Seller'
                }
            })
            res.status(200).json({ message:'seller count retrieved successfully',sellerCount})
        } catch(error){
            console.log('error retrieving seller count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },

      async SelectproductCount (req,res){
        try{
            const productCount = await Products.count()
            res.status(200).json({ message:'product count retrieved successfully',productCount})
        } catch(error){
            console.log('error retrieving product count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },
    
      async getCategoryProduct(req,res){
        try{
            const Category= await Products.getAttributes().Category

            res.status(200).json({message:'Category retrieved successfully',Category})
        } catch (error){
            console.log('error retrieving Category:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

      async getFurnitureProduct(req,res){
        try{
            const Furniture= await Products.findAll({
                where:{
                    Category:"Furniture"
                }
            })
            res.status(200).json({message:'Furniture retrieved successfully',Furniture})
        } catch (error){
            console.log('error retrieving Furniture:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getDecorProduct(req,res){
        try{
            const Decor= await Products.findAll({
                where:{
                    Category:"Decor"
                }
            })
            res.status(200).json({message:'Decor retrieved successfully',Decor})
        } catch (error){
            console.log('error retrieving Decor:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getAccessoriesProduct(req,res){
        try{
            const Accessories= await Products.findAll({
                where:{
                    Category:"Accessories"
                }
            })
            res.status(200).json({message:'Accessories retrieved successfully',Accessories})
        } catch (error){
            console.log('error retrieving Accessories:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getVintageProduct(req,res){
        try{
            const Vintage= await Products.findAll({
                where:{
                    Category:"Vintage"
                }
            })
            res.status(200).json({message:'Vintage retrieved successfully',Vintage})
        } catch (error){
            console.log('error retrieving Vintage:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getToolsProduct(req,res){
        try{
            const Tools= await Products.findAll({
                where:{
                    Category:"Tools"
                }
            })
            res.status(200).json({message:'Tools retrieved successfully',Tools})
        } catch (error){
            console.log('error retrieving Tools:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async sellerOrders(req,res){
        try{
            const orders = await order.count({
                where:{
                    UserId:req.params.id
                }
            })
            
            res.status(200).json({message:'orders retrieved successfully',orders})
           
        } catch (error){
            console.log('error retrieving orders:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async sellerproducts(req,res){
        try{
            const products = await Products.count({
                where:{
                    UserId:req.params.id
                }
            })
            
            res.status(200).json({message:' products retrieved successfully',products})
           
        } catch (error){
            console.log('error retrieving  products:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },
   
    async sellerReviews(req,res){
        try{
            const review = await reviews.count({
                where:{
                    UserId:req.params.id
                }
            })
            
            res.status(200).json({message:' reviews retrieved successfully',review})
           
        } catch (error){
            console.log('error retrieving  reviews:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

}

module.exports = AdminControler;