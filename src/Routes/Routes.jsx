import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import SignUp from "../Pages/SignUp/SignUp";

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
        }
    ]
)
export default Routes