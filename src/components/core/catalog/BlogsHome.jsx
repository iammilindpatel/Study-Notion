import React from 'react'
import Blogs from '../blogs/Blogs'
import Header from '../blogs/Header'
import Pagination from '../blogs/Pagination'
// import { Outlet } from 'react-router-dom'


const BlogsHome = () => {
  return ( 
  <div className='bg-white'>
    {/* <Outlet/> */}
    <Header/>
    <div className='py-8 mx-auto max-w-[720px] px-[25px] '>
        <Blogs/>
    </div>
    <Pagination/>
  </div>
  )
}

export default BlogsHome;
