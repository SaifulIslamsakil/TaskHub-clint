import { FaPlus } from "react-icons/fa6";
import { BsSendPlus } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
const Projects = () => {
    return (
        <div className=" p-5 space-y-20">
            <div className=" flex justify-between items-center p-4 border-b border-black ">
                <h2 className=" text-3xl font-bold">Projects</h2>
                <div className=" flex gap-3  ">
                    <button className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create Project <FaPlus /></button>
                    <ul className=" flex items-center gap-4 border border-black    font-semibold">
                        <li className=" bg-purple-800 text-white p-3">All</li>
                        <li>Started</li>
                        <li>Approval</li>
                        <li>Completed</li>
                    </ul>
                </div>

            </div>
            <div className=" grid grid-cols-3 gap-5">
                <div className=" bg-white p-5 rounded-lg relative space-y-3 shadow-lg">
                    <p className=" rounded-lg absolute -top-8 left-32 bg-purple-800 text-white flex items-center justify-center text-2xl p-5"><BsSendPlus className="text-center" /></p>
                    <p className=" text-center text-lg ">Social Geek Made</p>
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-bold">UI/UX Design</h2>
                        <div className=" flex items-center text-xl">
                            <span className=" border p-3 rounded-lg hover:bg-purple-800 hover:text-white"><FaEdit /></span>
                            <span className=" border p-3 rounded-lg hover:bg-purple-800 hover:text-white"><MdDelete /></span>
                        </div>
                    </div>
                    <div className="avatar flex justify-center">
                        <div className="w-20 rounded-full ">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className=" flex gap-10 mt-3">
                        <div>
                            <p className=" flex items-center gap-2 text-lg "> <BiSolidCloudUpload /> 5 Month </p>
                            <p className=" flex items-center gap-2 text-lg"> <FaLink /> 10 Attanch </p>
                            
                        </div>
                        <div>
                            <p className=" flex items-center gap-2 text-lg"> <FaUsers /> 50 Members </p>
                            <p className=" flex items-center gap-2 text-lg"> <FaLink /> 50 </p>
                            
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;