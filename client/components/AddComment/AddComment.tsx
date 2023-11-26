'use client'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize } from '@mui/material'
import React, { useState,useContext,useEffect } from 'react'
import axios from 'axios'
import {DataContext} from '../productCard/ProdactCard'
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
interface close {
  closeClick():void
  show:boolean
  idProdact:number
}
function AddComment(props:close) {
  const {love,setLove}=useContext(DataContext)
  const {idProdact}=useContext(DataContext)
  
  console.log('idProdact',idProdact)
  const [comment,setComment]=useState<string>('')
  const [idClient,setIdClient]=useState<number>(8)
  useEffect(()=>{
    clientId()
  },[])
  const addComment = () => {
        axios
          .post(`http://localhost:3000/reviews/${idClient}/${idProdact}`, {
            comment: comment,
            rating: love,
          })
          .then(() => alert("done"))
          .catch((err) => console.log(err));
      };
      function clientId(){
        const token = Cookies.get("token");
        if (token){
          const decodedToken = jwtDecode<MyToken>(token);
          setIdClient(decodedToken.id)
        }
        
      }
      return (
        <Box>
          <Dialog
          open={props.show}
          onClose={props.closeClick}
          style={{ background: "var(--white-10, rgba(255, 255, 255, 0.10))" }}
        >
          <DialogTitle style={{ background: "transparent" }}>
            Add your comment
          </DialogTitle>
          <DialogContent style={{ background: "transparent" }}>
            <DialogContentText style={{ background: "transparent" }}>
              Here you can add your comment about this product
            </DialogContentText>
            <TextareaAutosize autoFocus
          style={{ height: "200px", width: "500px",background: "transparent ", }}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          />
          </DialogContent>
          <DialogActions style={{ background: "transparent" }}>
            <Button onClick={props.closeClick}>Cancel</Button>
            <Button onClick={()=>addComment()}>Send comment</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}

export default AddComment
//   setLove((prev:number)=>{
// console.log('prev',prev);
// })
