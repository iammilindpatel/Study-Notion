import React, { useEffect, useState } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath, Outlet } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import {AiOutlineShoppingCart} from "react-icons/ai"
// import ProfileDropDown from '../core/Auth/ProfileDropDown'
// import { apiConnector } from '../../services/apiconnector'
// import { categories } from '../../services/apis'
import {IoIosArrowDropdownCircle} from "react-icons/io"
import { toast } from 'react-hot-toast'
import userprofile from "../../assets/Images/profile dropdown/user.png"
// import Dashboard from '../../pages/Dashboard'
import { VscDashboard } from "react-icons/vsc"
import { BiLogOutCircle } from "react-icons/bi";
import { setUser } from '../../slices/profileSlice'
// import  accountType  from '../../slices/profileSlice'
import { GiHamburgerMenu } from "react-icons/gi";


const subLinks = [
    {
        title: "Blogs",
        link:"/catalog/blogs"
    },
    {
        title: "All Courses",
        link:"/"
    },

];


const Navbar = (props) => {
    // console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    // const {token} = useSelector( (state) => state.auth );
    // const {user} = useSelector( (state) => state.profile );
    const location = useLocation();
    const {} = useSelector( (state) => state.auth );
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    setUser(true);

    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    const [showMenu, setShowMenu] = useState(false);
    // useEffect(() => {
    //     console.log(showMenu);
    //     setShowMenu(showMenu);
    // },[showMenu]);

    const handleButtonToggle = () => {
        setShowMenu((prev) => !prev);
        console.log("Button clicked, showMenu is now: ", showMenu);
    };


  return (
<div className='flex bg-avocado-100 h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
    <div className='flex w-11/12 max-w-maxContent items-center justify-between relative '>
        {/* Image */}
      <Link to="/">
        <img src={logo} width={160} height={42} loading='lazy'/>
      </Link>

      {/* Nav Links */}
      <nav className= {`${showMenu ? "flex absolute z-1000 rounded-xl p-4 flex-col gap-4 bg-black opacity-80 w-[290px] top-[100%] right-[-2%]" : "hidden lg:inline-block"}`}>
        <ul className=' flex gap-x-6 text-richblack-25 flex-col lg:flex-row top-0'>
        {
            NavbarLinks.map( (link, index) => (
                 <li key={index}>
                    {
                        link.title === "Catalog" ? (
                            <div className='relative flex items-center gap-2 group  lg:flex'>
                                <p>{link.title}</p>
                                <IoIosArrowDropdownCircle/>

                                <div className='invisible absolute left-[12%] lg:left-[45%]
                                    translate-x-[-36%] translate-y-[32%] lg:translate-y-[45%] top-0 
                                flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                transition-all duration-200 group-hover:visible opacity-0
                                group-hover:opacity-100 lg:w-[250px] z-2 '>

                                    <div className='absolute left-[50%] top-0
                                    translate-x-[50%]
                                    translate-y-[-50%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                    </div>

                                    {
                                        subLinks.length ? (
                                                subLinks.map( (subLink, index) => (
                                                    <Link to={`${subLink.link}`} key={index}>
                                                        <p className='hover:bg-richblack-700 font-bold hover:text-richblack-25 px-4 py-2 rounded-md'>{subLink.title}</p>
                                                    </Link> 
                                                ) )
                                        ) 
                                        : (<div>catalog not found</div>)
                                    }

                                </div>


                            </div>

                        ) : (
                            <Link to={link?.path}>
                                <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                    {link.title}
                                </p>
                                
                            </Link>
                        )
                    }
                </li>
             ) )
        }

        </ul>
      </nav>
             

        {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>


            
            {
                !isLoggedIn && 
                (
                    <Link to="/login">
                        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md cursor-pointer'>
                            Log in
                        </button>
                    </Link>
                )
            }
            {
                !isLoggedIn && 
                (
                    <Link to="/signup">
                        <button  className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md cursor-pointer'>
                            Sign Up
                        </button>
                    </Link>
                )
            }


            {  isLoggedIn &&
           
                <Link to="/dashboard/my-profile" className='group' >
                    <div className='flex items-center gap-x-1 text-richblack-100 py-[8px] px-[12px]'>
                        <img src={userprofile} className="w-[38px]" ></img>
                    </div>
                    <div className='relative opacity-0 group-hover:opacity-[100%] duration-300 ease-in '>
                        <Link className='absolute rounded-xl p-4 flex-col gap-4 bg-stone-100 opacity-80 z-100 w-[290px] top-[100%] right-[-15%]'>
                            <div className='flex gap-4 '>
                                <img src={userprofile} className="w-[32px]" ></img>
                                <h2 className='text-amber-400 font-semibold'>james karlton</h2>
                            </div>
                            <div className='w-full mt-4 bg-[#ccc] h-0.5'></div>
                            <Link  to="/dashboard/my-profile"
                            className='flex group w-full mt-1 rounded-md my-1 items-center gap-x-2 py-2 px-4 text-md text-richblack-700 hover:bg-richblack-700 hover:text-richblack-25 transition-smooth duration-300 ease-in'
                            onClick={() => {setIsLoggedIn(true)}} >
                                <VscDashboard/>
                                Dashboard
                            </Link>

                            <Link to="/">
                                <button onClick={() => {
                                    setIsLoggedIn(false);
                                    toast.error("Logged Out");
                                                }}
                                    className='flex w-full rounded-md my-2 items-center gap-x-2 py-2 px-4 text-md text-richblack-700 hover:bg-richblack-700 hover:text-richblack-25 transition-smooth duration-300 ease-in'>
                                    <BiLogOutCircle />
                                    Log Out
                                </button>
                            </Link>
                        </Link>
                    </div>
                </Link>
                
            }
        
            
        </div>
        <div className="lg:hidden inline-block">
            <button className='bg-white text-amber-500 pt-2 pb-2  rounded-lg cursor-pointer' onClick={handleButtonToggle}>
              <GiHamburgerMenu className='w-[35px] h-[20px]' />
            </button>
        </div>
    </div>
</div>
  )
}

export default Navbar
