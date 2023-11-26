'use client'
import React, { useContext, useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import axios from 'axios'
import { DataContext } from "../productCard/ProdactCard";

function Comments() {
    const [comments,setComments]=useState<Comments[]>([])
    const {idProdact}=useContext(DataContext)
  console.log('idProdact',idProdact)
//   if (!el || !el.id) {
//     return null;
//   }
useEffect(()=>{
    axios.get<Comments[]>(`http://127.0.0.1:3000/reviews/${idProdact}`)
    .then((res)=>{setComments(res.data)})
    .catch(err=>console.log(err))
},[comments])
  return (
    <Box>
      <Card
        style={{
          width: "90%",
          backgroundColor: "transparent",
          borderRadius: "10px",
          background: "var(--white-10, rgba(255, 255, 255, 0.10))",
          boxShadow: "0px 0px 20px 0px rgba (0,0,0,0.15)",
          margin: "10px",
          border:'green'
        }}
      >
            {comments.map((el,i:number)=>{
return(
        <CardContent key={i}>
          <Typography gutterBottom variant="h5" color={"white"}>
            {el?.User?.firstName} 
            {el?.User?.lastName}
          </Typography>
          <Typography
            style={{ fontFamily: "Poppins", color: "#FFF", fontSize: "20px" }}
          >
            {el.comment} 
          </Typography>
        </CardContent>)
})}
      </Card>
  
    </Box>
  );
}

export default Comments;
