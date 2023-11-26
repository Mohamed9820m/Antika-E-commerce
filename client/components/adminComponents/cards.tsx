'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Link from 'next/link'


{/* <Box
component="span"
sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
</Box>  */}

function Cards() {

    const [clientCount, setclientCount] = useState([])
    const [sellerCount, setsellerCount] = useState([])
    const [productCount, setproductCount] = useState([])
  
    useEffect(() => {
      fetchClientCount();
      fetchsellerCount();
      fetchproductCount();
    }, []);
  
    async function fetchClientCount() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/selectClientCount')
        const data = await response.json()
  
  
        setclientCount(data.clientCount.count)
    
      } catch (error) {
        console.error('Error', error)
      }
    }
  
    async function fetchsellerCount() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/selectSellerCount')
        const data = await response.json()
  
  
        setsellerCount(data.sellerCount.count)
    
      } catch (error) {
        console.error('Error', error)
      }
    }
  
    async function fetchproductCount() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/selectProductCount')
        const data = await response.json()
  
  
        setproductCount(data.productCount)
    
      } catch (error) {
        console.error('Error', error)
      }
    }
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} sm={4}>
      <Card sx={{ minWidth: 275 , backgroundColor: '#b9a29b1f' }}>
        <CardContent>
          <Typography sx={{ mb: 1.2 }} color="text.secondary">
            client
          </Typography>
          <Typography variant="body2">
          {clientCount}
          </Typography>
        </CardContent>
        <CardActions>
        <Link href="/admin/adminAllClient">
              <Button>See All</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>



    <Grid item xs={12} sm={4}>
      <Card sx={{ minWidth: 275 ,backgroundColor: '#b9a29b1f' }}>
      <CardContent>
          <Typography sx={{ mb: 1.2 }} color="text.secondary">
           seller
          </Typography>
          <Typography variant="body2">
           {sellerCount}
          </Typography>
        </CardContent>
        <CardActions>
        <Link href="/admin/adminAllSeller">
              <Button>See All</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>



    <Grid item xs={12} sm={4}>
      <Card sx={{ minWidth: 275 , backgroundColor: '#b9a29b1f' }}>
      <CardContent>
          <Typography sx={{ mb: 1.2 }} color="text.secondary">
           product
          </Typography>
          <Typography variant="body2">
           {productCount}
          </Typography>
        </CardContent>
        <CardActions>
        <Link href="/admin/adminAllProduct">
              <Button>See All</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
  )
}

export default Cards
