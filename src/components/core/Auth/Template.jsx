// import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


function Template({ title, description1, description2, image, formType, setIsLoggedIn }) {
    // console.log(formType)

  
  return (
    <div className="grid min-h-[calc(100vh-8rem)] place-items-center">
        <div className="mx-auto flex w-5/6 max-w-maxContent flex-col-reverse justify-between gap-y-4 py-10 md:flex-row md:gap-y-0 md:gap-x-6">
          <div className="mx-auto w-11/12 max-w-[410px] md:mx-12">
            <h1 className="text-[1.475rem] font-semibold leading-[2rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-1 text-[1rem] leading-[1.3rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? 
            <SignupForm setIsLoggedIn={setIsLoggedIn} /> : 
            <LoginForm setIsLoggedIn={setIsLoggedIn} />}

            
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0 mt-2">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
    </div>
  )
}

export default Template