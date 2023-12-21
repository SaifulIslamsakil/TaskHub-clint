import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

const Routes = createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayOut></MainLayOut>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                }
            ]
        },
        {
            path:"signUp",
            element:<SignUp></SignUp>
        },
        {
            path:"signin",
            element:<SignIn></SignIn>
        }
    ]
)
export default Routes