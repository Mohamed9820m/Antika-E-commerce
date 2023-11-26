'use client'
import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Category from './Category';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


interface product {
  id: number
  name: string
  description: string
  price: number
  stock: number
  Category: string
  User: {
    imageProfile: string
    firstName: string

  }
  image: string
}

function Product() {
  const [productsname, setProductsname] = useState<product[]>([])

  useEffect(() => {
    fetchProductsData()
  }, []);

  async function fetchProductsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getAllProduct')
      const data = await response.json()


      setProductsname(data.products)
    } catch (error) {
      console.error('Error', error)
    }
  }

  async function deleteProduct(id: number) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteProduct/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('product deleted successfully')
      } else {
        console.error('Failed to delete product')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id)
      fetchProductsData()
    } catch (error) {
      console.error('Error deleting product:', error)
    }

  };

  return (
    <div>
      <Category/>
    

    <div id='wrapper'>
      {productsname.map((product) => (
        <Card key={product.id} className='product'>
          <CardContent>
            <Typography variant="h5" component="div" className='white'>
              {`Product: ${product.name}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" className='white'>
              {`Category: ${product.Category}`}
            </Typography>
            {product.image && (
              <Image className='cardimage' width="250" height="150" src={product.image} alt={`Product Image - ${product.name}`} />
            )}
            <Typography variant="subtitle2" color="textSecondary" className='white'>
              {`Seller: ${product.User.firstName}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" className='white'>
              {`Description: ${product.description}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" className='white'>
              {`Price: ${product.price}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" className='white'>
              {`Stock: ${product.stock}`}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
              <DeleteIcon className='deleteicon' />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    <div>
           
       <Link href="/admin/adminDashbord" >
        
                  <Button variant="contained"  className='buttonArrowBack'>
                  <ArrowBackIosIcon className='arrowBackIcon'/>go back to dashboard</Button>
                </Link>
      </div>
    </div>

   
  )
}

export default Product
