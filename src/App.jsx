import "./App.css";
import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import { useEffect, useState } from "react";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Error from "./pages/Error"
import { useDispatch, useSelector } from "react-redux";
import MyProfile from "./components/core/Dashboard/MyProfile";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import BlogsHome from "./components/core/catalog/BlogsHome";
import BlogPage from "./components/core/catalog/BlogPage";
import TagPage from "./components/core/catalog/TagPage";
import CategoryPage from "./components/core/catalog/CategoryPage";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import AddCourse from "./components/core/Dashboard/AddCourse";
import  MyCourses  from "./components/core/Dashboard/MyCourses";
// import { account_Type } from "./utils/constants";

function App() {

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {accountType} = useSelector((state) => state.profile)

//  it is for blogs
    const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  

  return (
<div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  <Routes>
    <Route path="/" element={<Home isLoggedIn={isLoggedIn} /> }/>
    <Route path="/catalog/blogs" element={<BlogsHome/>} > </Route>
    <Route path="/blog/:blogId" element = {<BlogPage/>}   />
    <Route path="/tags/:tag" element = {<TagPage/>}   />
    <Route path="/categories/:category" element = {<CategoryPage/>}   />

    <Route  path="signup"  element={  <Signup setIsLoggedIn={setIsLoggedIn} />  } />
    <Route  path="login" element={   <Login setIsLoggedIn={setIsLoggedIn} /> }  />
    <Route path="about"  element={ <OpenRoute isLoggedIn={isLoggedIn}>  <About />  </OpenRoute> } />
    <Route path="/contact" element={<Contact />} />

    <Route path="/dashboard/my-profile" element={ <Dashboard setIsLoggedIn={setIsLoggedIn} />} >
          <Route path="/dashboard/my-profile" element={<MyProfile/>} />
          <Route path="/dashboard/my-profile/enrolled-courses" element={<EnrolledCourses />} />
        { accountType === "student" &&  ( 
          <Route path="/dashboard/my-profile/cart" element={<Cart />} />
        )}
        {  accountType === "instructor" && (
          <>
            <Route path="/dashboard/my-profile/add-course" element={<AddCourse />} />
            <Route path="/dashboard/my-profile/my-courses" element={<MyCourses/>} />
          </>
          )
        } 
    </Route>

  
    <Route path="*" element={<Error />} />


  </Routes>

</div>
  );
}

export default App;
