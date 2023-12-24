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
        element:<Dashbord></Dashbord>,
        children:[
            {
                path:"projectDashboard",
                element:<ProjectDashboard></ProjectDashboard>
            },
            {
                path:"projects",
                element:<Projects></Projects>
            },
            {
                path:"task",
                element:<Task></Task>
            },
            {
                path:"leaders",
                element:<Leaders></Leaders>
            },
            {
                path:"tickets_view",
                element:<TicketsView></TicketsView>
            },
            {
                path:"clints",
                element:<Clints></Clints>
            },
            {
                path:"members",
                element:<Members></Members>
            },
          
        ]
       }
    ]
)
export default Routes