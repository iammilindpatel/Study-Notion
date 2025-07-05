import { DiVim } from "react-icons/di"

const HighlightText = ({mycolor,text}) => {

  return (
    <div className="inline">
      { mycolor &&
        <span className={'font-bold bg-gradient-to-b from-[#5433FF] via-[#20BDFF] to-[#A5FECB] text-transparent bg-clip-text'}>
              {" "} 
              {text}
          </span>
      }
      { mycolor === undefined &&
        <span className='font-bold text-richblue-200'>
              {" "} 
              {text}
        </span>
      }
    </div>
       
  )
}

export default HighlightText
