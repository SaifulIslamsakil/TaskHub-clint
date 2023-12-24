import TaskInfo from "../../components/TaskInfo/TaskInfo";


const Leaders = () => {
    return (
        <div className=" mt-5 p-5 space-y-10">
            <div className=" flex justify-between items-center p-4 border-b border-black ">
                <h2 className=" text-3xl font-bold">Team Leaders</h2>
            </div>
            <div>
                <TaskInfo></TaskInfo>
            </div>
        </div>
    );
};

export default Leaders;