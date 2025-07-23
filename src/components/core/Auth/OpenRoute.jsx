// This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children, isLoggedIn }) {
  const {  } = useSelector((state) => state.auth)

  if (isLoggedIn === false) {
    return children
  } else {
    return <Navigate to="/dashboard/my-profile" />
  }
}

export default OpenRoute