import CTAButton from "../../common/Button"
import HighlightText from './HighlightText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'
import { GrRadial } from 'react-icons/gr'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor
}) => {
  return (
<div className={`flex ${position} my-14 justify-between  flex-col gap-8`}>
      
    {/*Section 1*/}
    <div className='w-[90%] lg:w-[50%] flex flex-col gap-6'>
        {heading}
        <div className='text-richblack-300 text-base font-bold w-[82%] mt-[-3] '>
            {subheading}
        </div>

        <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>


    </div>

     {/*Section 2*/}
     <div className=' h-fit code-border flex flex-row text-[14px] w-[100%] py-4 lg:w-[500px] relative'> 
        <div className={`${backgroundGradient} absolute w-[350px] h-[250px] opacity-[20%] rounded-full blur-3xl p-[8px]`}></div>

        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>

        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono  pr-2 ${codeColor}  `}>
           <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

    </div>
</div>
  )
}

export default CodeBlocks
