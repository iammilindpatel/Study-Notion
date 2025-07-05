import { useSelector } from "react-redux"

import { Outlet } from "react-router-dom"
import Sidebar from "../components/core/Dashboard/Sidebar"

function Dashboard({setIsLoggedIn}) {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  if (profileLoading || authLoading) {
        return (
          <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }

 return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar setIsLoggedIn = {setIsLoggedIn} />
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto text-white w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

//   import React from 'react'
  // return (
  //   <div className='flex justify-center items-center text-white text-3xl h-full'>
  //     Welcome to Dashboard!!
  //   </div>
  // )

