import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { toast } from 'react-hot-toast';
import { useSelector } from "react-redux";


function LoginForm({setIsLoggedIn}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

    // const {user} = useSelector( (state) => state.profile );


  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const {accountType,setAccountType} = useSelector((state) => state.profile);
  const handleOnSubmit = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        navigate("/dashboard/my-profile");
        setAccountType(toString(accountType));
        
        
    // event.preventDefault()
    // dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-4 flex w-full flex-col gap-y-3"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.8rem] leading-[1.3rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[10px] pl-4 text-richblack-5"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.8rem] leading-[1.3rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[10px] pl-4 pr-12 text-richblack-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={22} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-4 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
      <div className='flex w-full items-center gap-x-1'>
      <div className='w-full h-[1px] bg-richblack-700'></div>
      <p className='text-richblack-700 font-medium leading[1rem]'>
          OR
      </p>
      <div className='w-full h-[1px] bg-richblack-700'></div>
    </div>
    <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
      border border-richblack-700 px-[14px] py-[8px] gap-x-1 mt-1 '>
      <FcGoogle/>
      <p className="text-[1rem] leading-[1.2rem]">sign in with Google </p>
    </button>
    </form>
  )
}

export default LoginForm