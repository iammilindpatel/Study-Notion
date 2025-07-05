import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='p-4 rounded-lg shadow-xl bg-[#dfdfdf] hover:scale-[1.02] transition-all duration-300'>
      <NavLink to={`/blog/${post.id}`} >
       <span className='text-md text-red-900 font-bold hover:underline transition-all duration-200'>{post.title}</span>
      </NavLink>
      <p className='my-[2px] text-xs'>
        By <span className='italic'>{post.author}</span> on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-bold text-xs'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-xs'> Posted on {post.date} </p>
      <p className='text-justify text-sm my-2 '> {post.content}</p>
      <div className='flex flex-wrap'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-700 font-[600] text-xs underline mr-2'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
