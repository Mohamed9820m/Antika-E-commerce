'use client'
import React, { useContext, useEffect, useState } from 'react'
import {Box,Button,CardMedia,Card,CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Comments from '../Comments/Comments';
import AddComment from '../AddComment/AddComment';
import {DataContext} from '../productCard/ProdactCard'

import axios from 'axios'
function ProdactDetails() {
  const {love}=useContext(DataContext)
  const {idProdact}=useContext(DataContext)
  console.log('idProdactDetalis',idProdact )
  const [show, setShow] = useState(false)
  const [onProdact,setOnProdact]=useState< Prodact>()
  const [idProdac,setIdProdact]=useState<number>(idProdact)
  useEffect(()=>{
    axios.get<Prodact>(`http://127.0.0.1:3000/products/${idProdac}`)
    .then((res)=>setOnProdact(res.data))
    .catch(err=>console.log(err))
  },[idProdac])

  const openClick = () => {
    setShow(true);
  };
  const closeClick = () => {
    setShow(false);
  }; 
  console.log('iiii',idProdac)
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
    <Box sx={{position:'fixed', background: "var(--white-10, rgba(255, 255, 255, 0.10))"  ,paddingBottom:'20%',margin:'10px 10px -1000px 0px',borderRadius:'8px',gridColumn: "1/2" }}>
    <Card sx={{ maxWidth: 470 }} style={{margin:"20px" }}>
      <CardMedia
        component="img"
        alt="image of prodact"
        height="290"
        image={onProdact?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {onProdact?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {onProdact?.description}<br/> 
          Price: {onProdact?.price} Dinar<br/>
          Stock: {onProdact?.stock}
        </Typography>
      </CardContent>
    </Card>
  <Box >
    <Button
      variant="contained"
      size="medium"
      onClick={openClick}
      style={{ marginLeft: "25px", width:"90%" }}
      >
      Add new Comment
    </Button>
  </Box>
      </Box>
        <Box> <AddComment closeClick={closeClick} show={show} idProdact={idProdact} /> </Box>
  <Box sx={{  gridColumn: "3/6 " ,marginLeft:'-10px'}}>
    <Comments/>
  </Box>
</Box>
  )
  
}

export default ProdactDetails
