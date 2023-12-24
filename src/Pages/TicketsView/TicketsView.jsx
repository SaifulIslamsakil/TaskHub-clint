import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import TaskInfo from "../../components/TaskInfo/TaskInfo";

const TicketsView = () => {
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
        <div className=" p-5">
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
                <h2 className=" text-3xl font-bold">Tickets</h2>
                <div className=" flex gap-3  ">
                    <button onClick={handelCreateForm} className=" btn  bg-purple-800  text-white hover:bg-purple-600">Add ticket <FaPlus /></button>
                </div>
            </div>
            <div>
                <TaskInfo></TaskInfo>
            </div>
        </div>
    );
};

export default TicketsView;