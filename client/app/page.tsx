'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { AllProdacts } from '@/components'

import { useEffect, useState } from 'react'
import axios from 'axios'

import TopBar from '@/components/TopBar/TopBar'
import HeroSection from '@/components/HeroSection.tsx/Hero'
import AboutUs from '@/components/Aboutus/AboutUs'
import MoreInfo from '@/components/moreInfo/Moreinfo'
import Collection from '@/components/Collection/Colleection'
import Faq from '@/components/faq/Faq'
import Quality from '@/components/Quality/Quality'



export default function Home() {
  const [data,setData]=useState<Prodact[]>([])
useEffect(()=>{
  fetchData()
},[])
const fetchData=()=>{
  axios.get('http://127.0.0.1:3000/products/')
  .then((res)=>setData(res.data))
  .catch(err=>console.log(err))
}
console.log('home ',data)
  return (
    <div>



      <HeroSection/>
      <AboutUs/>
      <MoreInfo/>
      <Collection/>
      
      <AllProdacts data ={data}/>
      <Faq/>
      <Quality/>
      

    </div>

    
  )
}
