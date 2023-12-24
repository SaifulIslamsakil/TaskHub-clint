import { FaTasks } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const TaskInfo = () => {
    return (
        <div className="space-y-10">
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className=" bg-purple-800 shadow-2xl p-3 flex justify-between items-center rounded-lg text-white">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-white  p-2 rounded-lg text-xl text-black"><FaTasks /></p>
                        <div className=" text-xl font-semibold">
                            <p >Tootal Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-2xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
                <div className=" bg-purple-800 shadow-2xl p-3 flex justify-between items-center rounded-lg text-white">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-white  p-2 rounded-lg text-xl text-black"><FaTasks /></p>
                        <div className=" text-xl font-semibold">
                            <p >Tootal Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-2xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
                <div className=" bg-purple-800 shadow-2xl p-3 flex justify-between items-center rounded-lg text-white">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-white  p-2 rounded-lg text-xl text-black"><FaTasks /></p>
                        <div className=" text-xl font-semibold">
                            <p >Tootal Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-2xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
                <div className=" bg-purple-800 shadow-2xl p-3 flex justify-between items-center rounded-lg text-white">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-white  p-2 rounded-lg text-xl text-black"><FaTasks /></p>
                        <div className=" text-xl font-semibold">
                            <p >Tootal Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-2xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            </div>
            <div className=" bg-white border-2 border-gray-200 p-5 space-y-4">
                <h2 className=" text-xl font-semibold">Project Information</h2>
                <div className=" lg:flex justify-between items-center">
                    <div className=" space-x-2">
                        <span className=" text-xl font-semibold">Show</span>
                        <select className="select select-bordered select-sm ">
                            <option disabled selected>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>40</option>
                            <option>80</option>
                            <option>100</option>
                        </select>
                        <span className=" text-xl font-semibold">entries</span>
                    </div>
                    <div>
                        <label htmlFor="">Search : <input type="search" className=" bg-slate-200 p-2" name="" id="" /></label>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        <thead>
                            <tr className=" t font-bold text-black uppercase">
                                <th>##</th>
                                <th>TITLE</th>
                                <th>DAte start</th>
                                <th>Deadline</th>
                                <th>leader</th>
                                <th>completion</th>
                                <th>stage</th>
                            </tr>
                        </thead>
                        <tbody className=" text-sm">
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td><progress className="progress progress-primary " value="40" max="100"></progress></td>
                                <td>Blue</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskInfo;