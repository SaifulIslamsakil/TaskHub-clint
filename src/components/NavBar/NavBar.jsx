import { NavLink } from "react-router-dom";


const NavBar = () => {
    const manu = <>
        <li>
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                Home
            </NavLink>
            </li>
            <li>  
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                Task
            </NavLink>
            </li>
            <li>   
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                Project
            </NavLink>
            </li>
            <li>  
            <NavLink
                to="/Dashbord"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                Dashbord
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/signUp"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                SignUp
            </NavLink>
        </li>
    </>
    return (
        <div className=" flex  justify-between items-center p-5">
            <h3 className=" text-4xl  font-semibold">Task<span className=" text-purple-600">Hub</span></h3>
            <ul className=" flex gap-5 text-xl font-semibold text-purple-600">
                {manu}
            </ul>
        </div>
    );
};

export default NavBar;