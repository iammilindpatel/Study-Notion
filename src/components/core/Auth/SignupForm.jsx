import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

// import { sendOtp } from "../../../services/operations/authAPI"
// import { setSignupData } from "../../../slices/authSlice"
// import { accountType } from "../../../utils/constants"
// import Tab from "../../common/Tab"
import { setAccountTypeRedux } from "../../../slices/profileSlice";


import { FcGoogle } from "react-icons/fc"
import { useDispatch} from "react-redux"

function SignupForm({setIsLoggedIn}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData
// console.log("Printing the formData ", formData)
  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }


  // data to pass to Tab component
      let tabData = [
    {
      id: 1,
      type: "student",
      tabName: "student",
    },
    {
      id: 2,
      type: "instructor",
      tabName: "Instructor",
    },
  ];

  // const {setAccountTypeRedux} = useSelector( (state) => state.profile );
  // student or instructor
  const [accountType, setAccountType] = useState(tabData[0].type);
    // dispatch(setAccountType(accountType)) // Assuming you want to save the account type in the Redux store;
    console.log("Account Type is ", accountType);


  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()



    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");

    const signupData = {
      ...formData,
      accountType,
    }
    // localStorage.setItem("accountType", accountType)
    setAccountType(accountType);
    dispatch(setAccountTypeRedux(accountType.toLowerCase()));

    // setAccountTypeRedux(accountType);

    console.log("Printing the signupData ", signupData)
    navigate("/dashboard/my-profile");


    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })


    console.log("Account new Type is ", accountType);
  }




  return (
    <div>
      {/* Tab */} 
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="flex bg-richblack-800 p-1 gap-x-1 my-4 rounded-full max-w-max"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setAccountType(tab.type); // updates local state for UI
              dispatch(setAccountTypeRedux(tab.type.toLowerCase())); // updates Redux (and localStorage)
                            // setAccountType(tab.type);   //// local state 
                            // dispatch(setAccountType(tab.type));   //// update Redux!
                            // localStorage.setItem("accountType", accountType);
                            }    
                      }    
             className={`${
              accountType === tab.type
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"
            } py-2 px-5 text-sm rounded-full transition-all duration-200`}
           
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.75rem] leading-[1.1rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] pl-4 text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.75rem] leading-[1.1rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem]  bg-richblack-800 p-[6px] pl-4 text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.75rem] leading-[1.1rem] text-richblack-5">
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
            className="w-full lg:w-[80%] rounded-[0.5rem] bg-richblack-800 p-[6px] pl-4 text-richblack-5"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.75rem] leading-[1.1rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
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
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] pl-4 pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[32px]  cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.75rem] leading-[1.1rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[6px] pl-4 pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[32px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 rounded-[8px] bg-yellow-50 py-[6px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>

        <div className='flex w-full items-center ap-x-1'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading-[1rem]'>
              OR
          </p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
          border border-richblack-700 px-[14px] py-[8px] gap-x-1 mt-1 '>
          <FcGoogle/>
          <p className="text-[1rem] leading-[1.2rem]">Sign Up with Google</p>
        </button>

      </form>
      
    </div>
  )
}

export default SignupForm