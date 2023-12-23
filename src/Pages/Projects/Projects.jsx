import { FaPlus } from "react-icons/fa6";
import { BsSendPlus } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Projects = () => {
    const [createform, setCreateForm] = useState(false)
    const {
        register,
        handleSubmit,
    } = useForm()

    const handelCreateForm = () => {
        setCreateForm(true)
    }
    const handelClouseForm = () => {
        setCreateForm(false)
    }
    const handelFromSumit = (data) => {
        console.log(data)
    }
    return (
        <div className=" p-5  ">
            <div className={` w-full h-screen top-0 left-0 bg-black bg-opacity-30 z-50 absolute flex justify-center items-center ${createform ? "top-0 duration-300" : "-top-[1500px]"}`}>
                <div className=" bg-white w-[500px] p-5 rounded-lg h-[550px] space-y-4 overflow-y-scroll  ">
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-semibold">Create Project </h2>
                        <p onClick={handelClouseForm}><ImCross /></p>
                    </div>
                    <form onSubmit={handleSubmit(handelFromSumit)} className=" space-y-1 relative">
                        <div>
                            <label className=" w-full ">
                                <div className="label">
                                    <span >Project Name</span>
                                </div>
                                <input type="text" {...register("project_name", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Project Category</span>
                                </div>
                                <select {...register("category", { required: true })} className="select select-bordered">
                                    <option disabled selected>Select categories</option>
                                    <option value="Apps Development">Apps Development</option>
                                    <option value="WEB Development">WEB Development</option>
                                    <option value="UI & UX Design">UI & UX Design</option>
                                    <option value="Marketiong">Marketiong</option>
                                    <option value="SEO">SEO</option>
                                </select>
                            </label>
                        </div>

                        {/* <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Pick a file</span>
                                </div>
                                <input {...register("file", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                            </label>
                        </div> */}

                        <div>
                            <div className=" flex gap-4">
                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Project Start Date</span>
                                    </div>
                                    <input type="date" {...register("start_date", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>

                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Project End Date</span>
                                    </div>
                                    <input type="date" {...register("end_date", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className=" flex gap-4">
                                <label className=" w-full ">
                                    <div className="label">
                                        <span >Budget</span>
                                    </div>
                                    <input type="number" {...register("budget", { required: true })} placeholder="Project Name" className="input input-bordered w-full  " />
                                </label>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Priority</span>
                                    </div>
                                    <select {...register("priority", { required: true })} className="select select-bordered">
                                        <option disabled selected>Select Priority </option>
                                        <option value="Highest">Highest</option>
                                        <option value="Ledium">Ledium</option>
                                        <option value="Low">Low</option>
                                       
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Description (optional)</span>
                                </div>
                                <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Add any extra details aboute requies"></textarea>

                            </label>
                        </div>

                        <div className=" flex justify-end pt-3 gap-3  ">

                            
                            <button type="btn" className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create  <FaPlus /></button>
                        </div>
                    </form>
                </div>
            </div>

            <div className=" flex justify-between items-center p-4 border-b border-black ">
                <h2 className=" text-3xl font-bold">Projects</h2>
                <div className=" flex gap-3  ">
                    <button onClick={handelCreateForm} className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create Project <FaPlus /></button>
                    <ul className=" flex items-center gap-4 border border-black    font-semibold">
                        <li className=" bg-purple-800 text-white p-3">All</li>
                        <li>Started</li>
                        <li>Approval</li>
                        <li>Completed</li>
                    </ul>
                </div>

            </div>
            <div className=" grid grid-cols-3 gap-5 mt-14">
                <div className=" bg-white p-5 rounded-lg relative space-y-3 shadow-lg">
                    <p className=" rounded-lg absolute -top-8 left-32 bg-purple-800 text-white flex items-center justify-center text-2xl p-5"><BsSendPlus className="text-center" /></p>
                    <p className=" text-center  ">Social Geek Made</p>
                    <div className=" flex justify-between items-center">
                        <h2 className=" text-xl font-bold">UI/UX Design</h2>
                        <div className=" flex items-center text-xl">
                            <span className=" border p-3 rounded-lg hover:bg-purple-800 hover:text-white"><FaEdit /></span>
                            <span className=" border p-3 rounded-lg hover:bg-purple-800 hover:text-white"><MdDelete /></span>
                        </div>
                    </div>
                    <div className="avatar flex justify-center">
                        <div className="w-14 rounded-full ">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    <div className=" flex gap-5 mt-3">
                        <div>
                            <p className=" flex items-center gap-2  "> <BiSolidCloudUpload /> 5 Month </p>
                            <p className=" flex items-center gap-2 "> <FaLink /> 10 Attanch </p>

                        </div>
                        <div>
                            <p className=" flex items-center gap-2 "> <FaUsers /> 50 Members </p>
                            <p className=" flex items-center gap-2 "> <MdMessage /> 50 </p>

                        </div>

                    </div>
                    <hr />
                    <div >
                        <div className=" flex justify-between items-center ">
                            <p className=" text-xl font-semibold">Progress</p>
                            <p className=" flex items-center gap-2 bg-purple-800 text-white p-1 rounded-lg"> <AiFillClockCircle /> 35 Days Left</p>
                        </div>
                        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;