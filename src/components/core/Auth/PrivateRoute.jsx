import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children,isLoggedIn}) => {

    if (isLoggedIn) {
        return children;        
    }
    else {
        return <Navigate to="/login" />
    }
    // const {token} = useSelector((state) => state.auth);

    // if(token !== null)
    //     return children
    // else
    //     return <Navigate to="/login" />

}

export default PrivateRoute
