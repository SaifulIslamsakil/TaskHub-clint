
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
const DasNav = () => {
    return (
        <div className=" w-full flex justify-between items-center bg-white shadow-2xl h-10 p-10" >
            <div className="input input-bordered w-full max-w-xs flex items-center">
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
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div>
                    <span className=" text-2xl"><FaRegBell /></span>
                </div>
                <div className="avatar flex items-center  gap-4">
                 
                        <p className=" text-2xl">Name</p>     
                    
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />

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