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


  interface Clients {
    id: number;
    firstName: string;   
    lastName: string;  
    address:string
    imageProfile:string;

    
  }

function Client() {

    const [clientsname, setClientssname] = useState<Clients[]>([])

  useEffect(() => {
    fetchClientsData()
  }, []);

  async function fetchClientsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/clients');
      const data = await response.json();


      setClientssname(data.clients);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async function deleteClient(id: number) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteClient/${id}`,{
        method:'DELETE',
      });

      if (response.ok) {
        console.log('seller deleted successfully')
      } else {
        console.error('Failed to delete seller')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


    const handleDelete = async (id: number) => {
      try{
        await deleteClient(id)
        fetchClientsData()
      }catch(error){
console.error('Error deleting seller:',error);
      }
    }


  return (
    <div>
   

   <div id='wrapper'>
      {clientsname.map((client) => (
        <Card key={client.id} className='card'>
          <CardContent>
            <Typography variant="h5" component="div" className='white'>
              {`FirstName: ${client.firstName}`}
            </Typography>
            <Typography variant="subtitle1" className='white'>
              {`LastName: ${client.lastName}`}
            </Typography>
            {client.imageProfile && (
              <Image className='cardimage' width="250" height="150" src={client.imageProfile} alt={`Product Image - ${client.imageProfile}`} />
            )}
            <Typography variant="subtitle2" className='white'>
              {`Address: ${client.address}`}
            </Typography>
            
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(client.id)}>
              <DeleteIcon className='deleteicon' />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    <div >
   <Link href="/admin/adminDashbord" >
   
              <Button variant="contained" className='buttonArrowBack'>
              <ArrowBackIosIcon className='arrowBackIcon'/>go back to dashboard</Button>
            </Link>
   </div>
    </div>
  )
}

export default Client
