import { NavLink } from "react-router-dom";


const NavBar = () => {
    const manu = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " hover:border-b-2 hover:border-purple-600"
                }
            >
                Home
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
        <div className="  fixed flex  justify-between items-center p-5 w-full bg-white shadow-lg shadow-purple-100">
            <h3 className=" text-4xl  font-semibold">Task<span className=" text-purple-600">Hub</span></h3>
            <ul className=" flex gap-5 text-xl font-semibold text-purple-600">
                {manu}
            </ul>
        </div>
    );
};

export default NavBar;