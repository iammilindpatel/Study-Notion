import { useEffect, useState } from "react"


export default function EnrolledCourses() {

  const [enrolledCourses, setEnrolledCourses] = useState(null)
  const getEnrolledCourses = async () => {
    try {
      const res = notfound

      setEnrolledCourses(res);
    } 
    catch (error) {
      console.log("Could not fetch enrolled courses.")
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  }, [])

  return (
    <div>
      <div className="text-3xl text-richblack-50 ">Enrolled Courses</div>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="text-amber-500">You have not enrolled in any course yet.</div>
        </div>
      ) :( !enrolledCourses.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any course yet.
          {/* TODO: Modify this Empty State */}
        </p>) : (
              <div className="text-white">welcome to enrolled courses</div>
          ))
      }
      
    </div>
  )
}