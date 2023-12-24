import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Task from "../Pages/Task/Task";
import ProjectDashboard from "../Pages/ProjectDashboard/ProjectDashboard";
import Projects from "../Pages/Projects/Projects";
import Leaders from "../Pages/Leaders/Leaders";
import TicketsView from "../Pages/TicketsView/TicketsView";
import Clints from "../Pages/Clints/Clints";
import Members from "../Pages/Members/Members";
import Private from "../PrivateRoute/PrivateRoute"

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
        },
       {
        path:"Dashbord",
        element:<Private><Dashbord></Dashbord></Private>,
        children:[
            {
                path:"projectDashboard",
                element:<Private><ProjectDashboard></ProjectDashboard></Private>
            },
            {
                path:"projects",
                element:<Private><Projects></Projects></Private>
            },
            {
                path:"task",
                element:<Private><Task></Task></Private>
            },
            {
                path:"leaders",
                element:<Private><Leaders></Leaders></Private>
            },
            {
                path:"tickets_view",
                element:<Private><TicketsView></TicketsView></Private>
            },
            {
                path:"clints",
                element:<Private><Clints></Clints></Private>
            },
            {
                path:"members",
                element:<Private></Private>
            },
          
        ]
       }
    ]
)
export default Routes