
import { DashboardTable ,Cards } from '@/components'

import React from 'react'
import '../../../components/adminComponents/style.css'

const page = () => {
    
  
  return (

    <div className='alll'>
      
    <div className='cards'>
    
    <Cards/>
    
    </div>
    <h1 className='titl'>Top Market Statistics</h1>
    <h2 className='underTitle'>The NFTs on_____ ,ranked by Product Count,review count and other statistics</h2>
    <div>
     
      <DashboardTable />
    </div>
    </div>
  )
}

export default page
