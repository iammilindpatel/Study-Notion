import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup({setIsLoggedIn}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Signup