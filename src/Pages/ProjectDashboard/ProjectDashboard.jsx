import { FaTasks } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { GoTasklist } from "react-icons/go";
import { VscTasklist } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import { Chart } from "react-google-charts";
import TaskInfo from "../../components/TaskInfo/TaskInfo";
const ProjectDashboard = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const handelFromSubmit = (data) => {
        console.log(data)
    }
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];
    const options = {
        title: "My Daily Activities",
    };

    return (
        <div className=" p-5 mt-5 space-y-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                <div className=" bg-white shadow-2xl p-5 flex justify-between items-center rounded-lg">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-purple-800 text-white p-4 rounded-lg text-3xl"><FaTasks /></p>
                        <div className=" text-xl font-semibold">
                            <p >Tootal Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-3xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
                <div className=" bg-white shadow-2xl p-5 flex justify-between items-center rounded-lg">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-purple-800 text-white p-4 rounded-lg text-3xl"><GoTasklist /></p>
                        <div className=" text-xl font-semibold">
                            <p >Completed Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-3xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
                <div className=" bg-white shadow-2xl p-5 flex justify-between items-center rounded-lg">
                    <div className=" flex items-center gap-3">
                        <p className=" bg-purple-800 text-white p-4 rounded-lg text-3xl"><VscTasklist /></p>
                        <div className=" text-xl font-semibold">
                            <p >Progress Task</p>
                            <p>123</p>
                        </div>
                    </div>
                    <div className=" text-3xl">
                        <MdOutlineArrowForwardIos />
                    </div>
                </div>
            </div>

            <div className=" grid lg:grid-cols-5 gap-5">
                <div className=" lg:col-span-3 space-y-5 lg:flex justify-between items-center  bg-white shadow-lg  rounded-lg p-5 gap-3">
                    <div className=" flex-1 space-y-2">
                        <h3 className=" text-2xl font-semibold">Dylan Hunter</h3>
                        <p>Welcome back Dylan Hunter.Integer molestie, arcu non porta sollicitudin, arcu felis aliquam urna, placerat maximus lorem urna commodo sem. Pellentesque venenatis leo quam, sed mattis sapien lobortis ut.placerat maximus lorem urna commodo sem</p>
                        <button className=" btn bg-purple-800 text-white hover:bg-purple-600">Free Inquire</button>
                    </div>
                    <div className=" flex-1">
                        <img src="http://pixelwibes.com/template/my-task/html/dist/assets/images/task-view.svg" alt="" />
                    </div>
                </div>
                <div className=" lg:col-span-2 p-3 bg-white rounded-lg shadow-lg">
                    <h4 className=" text-xl font-semibold">Create Project Credentials</h4>
                    <p>Create a Project credentials now and never miss</p>
                    <form action="" onSubmit={handleSubmit(handelFromSubmit)}>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="text-xl font-semibold">Email</span>
                                </div>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div><div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="text-xl font-semibold">Email</span>
                                </div>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div><div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="text-xl font-semibold">Email</span>
                                </div>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div><button className=" btn bg-purple-800 mt-5 text-white hover:bg-purple-600">Create Credentials</button></div>
                    </form>
                </div>
            </div>

            <div>
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
            <div>
                <TaskInfo></TaskInfo>
            </div>
        </div>
    );
};

export default ProjectDashboard;