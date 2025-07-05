import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../../common/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row items-center'>

        <div className='drop-shadow-[-20px_-20px_0px]'>
            <img width={"60%"}
                src={Instructor}
                alt=""
                className='shadow-white'
            />
        </div>

        <div className='w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semobold w-[50%]'>
                Become an
                <HighlightText text={"Instructor"} mycolor={"defined"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
