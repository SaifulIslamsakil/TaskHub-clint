import { NavLink, Outlet } from "react-router-dom";
import DasNav from "../../components/DasNav/DasNav";
import { BiTask } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { FaBandAid } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
// import { useState } from "react";

const Dashbord = () => {
    // const [dashboard, setDashboard] = useState(false)
    const manu = <>
        <li>
            <NavLink
                to="/Dashbord/projectDashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl"> <FaHome /> <span  className="hidden lg:block">  DashBoard</span></p>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Dashbord/projects"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "t" : ""
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl "> <BsFillBagCheckFill /> <span className="hidden lg:block">  Projects</span></p>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Dashbord/task"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl"> <MdOutlineTaskAlt /> <span className="hidden lg:block">  Tasks</span></p>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Dashbord/leaders"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl"> <MdLeaderboard /> <span className="hidden lg:block" >  Leaders</span></p>
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/Dashbord/tickets_view"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl"> <FaBandAid /> <span  className="hidden lg:block">  Tickets View</span></p>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Dashbord/clints"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl"> <FaHome /> <span  className="hidden lg:block">  Clints</span></p>
            </NavLink>
        </li>


        <li>
            <NavLink
                to="/Dashbord/members"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                <p className=" flex   items-center gap-4 hover:bg-green-500 p-2  text-white text-2xl"> <FaUsers /> <span  className="hidden lg:block">  Members</span></p>
            </NavLink>
        </li>
    </>
    return (
        <div className=" flex">
           
            <div className="  lg:static z-50 lg:w-80  bg-purple-800  py-10 lg:block lg:p-5">
                <div className=" hidden lg:flex gap-2 items-center">
                    <span className=" w-14 h-14 rounded-full bg-white flex items-center justify-center text-3xl"><BiTask /></span>
                    <h3 className=" text-2xl font-semibold text-white">My Task</h3>
                </div>
                <ul className=" mt-7 space-y-4 ">
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