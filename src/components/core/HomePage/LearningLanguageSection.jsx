import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../../common/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>

            <div className='text-3xl font-semibold text-center'>
                Your Swiss Knife for
                <HighlightText text={" learning any language"} mycolor={"defined"}  />
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[60%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className=' flex lg:flex-row items-center flex-col justify-center mt-2'>
                <img 
                    src = {know_your_progress}
                    alt = "KNowYourProgressImage"
                    className='object-contain lg:-mr-20 w-[90%] lg:w-[30%] '
                />
                <img 
                    src = {compare_with_others}
                    alt = "KNowYourProgressImage"
                    className='object-contain w-[90%] lg:w-[30%]'
                />
                <img 
                    src = {plan_your_lesson}
                    alt = "KNowYourProgressImage"
                    className='object-contain w-[90%] lg:-ml-24 lg:w-[30%]'
                />
            </div>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                </CTAButton>
            </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection
