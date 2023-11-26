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


interface furniture {
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

function Furniture() {
    const [FurnitureProduct, setFurnitureProduct] = useState<furniture[]>([])

    useEffect(() => {
        fetchFurnitureProduct()
    }, []);
  
    async function fetchFurnitureProduct() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getFurnitureProduct')
        const data = await response.json()

        setFurnitureProduct(data.Furniture)
    
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
            fetchFurnitureProduct()
          }catch(error){
    console.error('Error deleting product:',error)
          }
          
        };

  return (
    <div>
       
    <div id='wrapper'>
      {FurnitureProduct.map((furniture) => (
        <Card key={furniture.id} className='card'>
          <CardContent>
            <Typography variant="h5" component="div">
              {`Product: ${furniture.name}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`Category: ${furniture.Category}`}
            </Typography>
            {furniture.image && (
              <Image className='cardimage' width="250" height="150" src={furniture.image} alt={`Product Image - ${furniture.name}`} />
            )}
            <Typography variant="subtitle2" color="textSecondary">
              {`Description: ${furniture.description}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Price: ${furniture.price}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Stock: ${furniture.stock}`}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(furniture.id)}>
              <DeleteIcon className='deleteicon' />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    <div >
    <Link href="/admin/adminAllProduct" >
   
               <Button variant="contained" className='buttonArrowBack' >
               <ArrowBackIosIcon className='arrowBackIcon'/>Go Back To Product
               </Button>
             </Link>
    </div>
    </div>
  )
}

export default Furniture
