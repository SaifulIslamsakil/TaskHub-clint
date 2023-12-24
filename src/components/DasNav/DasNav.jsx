
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { TbUserSquareRounded } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";
const DasNav = () => {
    const [profile, setProfile] = useState(false)
    const [notification, setNotification] = useState(false)
    const handleProfile = () => {
        setProfile(!profile)
    }
    const handelNotification = () => {
        setNotification(!notification)
    }
    return (
        <div className=" w-full lg:flex justify-between space-y-8 lg:space-y-0 border boderee items-center bg-white shadow-2xl  p-5 relative " >
            <div className="input input-bordered w-full max-w-xs flex items-center space-y-3">
                <input type="search" className=" w-full" placeholder="Search" name="" id="" />
                <span className=" text-2xl"> <IoSearch /></span>
            </div>
            <div className=" flex items-center gap-5">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-8">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <span onClick={handelNotification} className=" text-2xl"><FaRegBell /></span>
                </div>
                <div className="avatar flex items-center  gap-4">
                    <p className=" text-2xl">Name</p>
                    <div onClick={handleProfile} className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>

                </div>
                <div className={` bg-white rounded-lg p-5  right-10 absolute top-20 space-y-4 border border-black ${profile ? "block" : "hidden"}`}>
                    <div className=" flex gap-2 4 items-center border-b border-black pb-4">
                        <img className=" w-10 h-10 rounded-full" src="https://i.ibb.co/YXnP9pd/avatar4.jpg" alt="" />
                        <div>
                            <p className=" font-semibold">Dylan Hunter</p>
                            <p>Dylan.hunter@gmail.com</p>
                        </div>
                    </div>
                    <ul className=" text-xl space-y-2 border-b border-black pb-4">
                       <Link to="/Dashbord/task"> <li className=" flex gap-4 items-center "> <FaTasks />My Tesk</li></Link>
                        <li className=" flex gap-4 items-center"> <FaUsers />Members</li>
                        <li className=" flex gap-4 items-center"> <LuLogOut />Logout</li>
                    </ul>
                    <p className=" flex items-center gap-4 text-xl"><TbUserSquareRounded /> Add Personal Accout</p>

                </div>
                <div className={` bg-white rounded-lg   right-60 absolute top-20 space-y-4 ${notification ? "block duration-300" : "-top-96 hidden"}`}>
                    <div className=" p-5 text-white text-xl bg-purple-800 ">
                        <p>Notification</p>
                    </div>
                    <div className=" p-5 flex gap-3 border-b ">
                        <img className=" h-10 w-10 rounded-full" src="https://i.ibb.co/YXnP9pd/avatar4.jpg" alt="" />
                        <div>
                            <p className=" font-semibold">Saiful Islam</p>
                            <p>Quality Assurance Task Completed</p>
                        </div>
                        <p>2 min</p>
                    </div>
                </div>

                <div>
                    <span> <BsThreeDotsVertical /></span>
                </div>

            </div>
        </div>
    );
};

export default DasNav;