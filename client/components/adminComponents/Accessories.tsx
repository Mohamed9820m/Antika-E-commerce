'use client'
import React, { useState, useEffect } from 'react'
import {  IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';




interface accessories {
    id: number
    name: string 
    description: string 
    price: number 
    stock:number
    Category:string
    User:{
      imageProfile:string
      firstName:string
      }
      image:string
  }

function Accessories() {
    const [AccessoriesProduct, setAccessoriesProduct] = useState<accessories[]>([])

    useEffect(() => {
        fetchAccessoriesProduct()
    }, []);
  
    async function fetchAccessoriesProduct() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getAccessoriesProduct')
        const data = await response.json()

        setAccessoriesProduct(data.Accessories)
    
      } catch (error) {
        console.error('Error', error)
      }
    }

    async function deleteProduct(id:number) {
        try {
    
          const response = await fetch(`http://localhost:3000/admin/deleteProduct/${id}`,{
            method:'DELETE',
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
    
    
        const handleDelete = async (id:number) => {
          try{
            await deleteProduct(id)
            fetchAccessoriesProduct()
          }catch(error){
    console.error('Error deleting product:',error)
          }
          
        };

  return (
    <div>
      
    <div id='wrapper'>
      {AccessoriesProduct.map((accessories) => (
        <Card key={accessories.id} className='card'>
          <CardContent>
            <Typography variant="h5" component="div">
              {`Product: ${accessories.name}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`Category: ${accessories.Category}`}
            </Typography>
            {accessories.image && (
              <Image className='cardimage' width="250" height="150" src={accessories.image} alt={`Product Image - ${accessories.name}`} />
            )}
            <Typography variant="subtitle2" color="textSecondary">
              {`Description: ${accessories.description}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Price: ${accessories.price}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Stock: ${accessories.stock}`}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(accessories.id)}>
              <DeleteIcon className='deleteicon' />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    <div >
    <Link href="/admin/adminAllProduct" className='buttonArrowBack'>
    
               <Button variant="contained">
               <ArrowBackIosIcon className='arrowBackIcon'/>Go Back To Product</Button>
             </Link>
    </div>
    </div>
  )
}

export default Accessories
