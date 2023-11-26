'use client'
import React, { useEffect, useState } from 'react'
import ProdactCard from '../productCard/ProdactCard'
import {Box,Button} from '@mui/material'
import axios from 'axios'
type Props = {
  data:Prodact[]
}
function AllProdacts(props:Props) {
  
  const [catigorie,setCatigorie]=useState("AllProdacts")
  const [filtredData,setFiltredData]=useState<Prodact[]>([])
  useEffect(()=>{
    filtered()
   
  },[catigorie,props.data])

  const filtered = () => { 
    if(catigorie!=='AllProdacts'){
    console.log('fatrs')
      const  fil=props.data.filter((e:any) => {return e.Category===catigorie})
      console.log("hi",fil)
      setFiltredData(fil)
      
    }else{
      setFiltredData(props.data)
      console.log("data is heare",props.data)
    }
 
   
  } 
  // console.log('res',filtredData)
// console.log('object',filtredData)
  return (

 <Box sx={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
     <Box sx={{ gridColumn: "2/6 ",width: '1198', height: '40', justifyContent: 'center', alignItems: 'center', gap: '20', display: 'inline-flex',marginRight:'100px'}}>
        <Button onClick={()=>setCatigorie('AllProdacts')} style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>All collections </Button>
        <Button onClick={()=>setCatigorie('Furniture')} style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Furniture </Button>
        <Button onClick={()=>setCatigorie('Decor')} style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Decor </Button>
        <Button onClick={()=>setCatigorie('Accessories')} style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Accessories </Button>
        <Button onClick={()=>setCatigorie('Vintage')} style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Vintage </Button>
        <Button onClick={()=>setCatigorie('Tools')} style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Tools </Button>
     </Box>
     <Box sx={{display: "grid",gridColumn: "2/6",gridTemplateColumns: "repeat(3, 1fr)"}}>
     {filtredData.map(element=>(
      <ProdactCard ele={element} />
     ))}
      </Box>
 </Box>
    
  )
}

export default AllProdacts
