import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {lodding, user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(lodding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>
   
};

export default PrivateRoute;