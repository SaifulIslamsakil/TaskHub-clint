import { NavLink, Outlet } from "react-router-dom";
import DasNav from "../../components/DasNav/DasNav";
import { BiTask } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";

const Dashbord = () => {
    const manu = <>
             <li>   
            <NavLink
                to="/Dashbord/projectDashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <FaHome /> <span>  DashBoard</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/Dashbord/projects"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <BsFillBagCheckFill /> <span>  Projects</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <MdOutlineTaskAlt /> <span>  Tasks</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <MdLeaderboard /> <span>  Leaders</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <FaHome /> <span>  Clints</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <FaHome /> <span>  Tickets</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <FaHome /> <span>  Clint Profile</span></p>
            </NavLink>
            </li>
             <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
               <p className=" flex   items-center gap-4 text-white text-2xl"> <FaHome /> <span>  Clint</span></p>
            </NavLink>
            </li>
    </>
    return (
        <div className=" bg-purple-100 flex">
            <div className=" w-80 h-screen bg-purple-800 px-7 py-10">
                <div className=" flex gap-2 items-center">
                    <span className=" w-14 h-14 rounded-full bg-white flex items-center justify-center text-3xl"><BiTask /></span>
                    <h3 className=" text-2xl font-semibold text-white">My Task</h3>
                </div>
                <ul className=" mt-7 space-y-4">
                {
                    manu
                }
                </ul>
            </div>
            <div className=" w-full">
                <DasNav></DasNav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;