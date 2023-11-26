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


interface vintage {
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

function Vintage() {
    const [VintageProduct, setVintageProduct] = useState<vintage[]>([])

    useEffect(() => {
        fetchVintageProduct()
    }, []);
  
    async function fetchVintageProduct() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getVintageProduct')
        const data = await response.json()

        setVintageProduct(data.Vintage)
    
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
            fetchVintageProduct()
          }catch(error){
    console.error('Error deleting product:',error)
          }
          
        };

  return (
    <div>
        
    <div id='wrapper'>
      {VintageProduct.map((vintage) => (
        <Card key={vintage.id} className='card'>
          <CardContent>
            <Typography variant="h5" component="div">
              {`Product: ${vintage.name}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`Category: ${vintage.Category}`}
            </Typography>
            {vintage.image && (
              <Image width="250" height="150" src={vintage.image} alt={`Product Image - ${vintage.name}`} />
            )}
            <Typography variant="subtitle2" color="textSecondary">
              {`Description: ${vintage.description}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Price: ${vintage.price}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Stock: ${vintage.stock}`}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(vintage.id)}>
              <DeleteIcon className='deleteicon' />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    <div >
    <Link href="/admin/adminAllProduct" >
    
               <Button variant="contained" className='buttonArrowBack' >
               <ArrowBackIosIcon className='arrowBackIcon'/>Go Back To Product</Button>
             </Link>
    </div>
    </div>
  )
}

export default Vintage
