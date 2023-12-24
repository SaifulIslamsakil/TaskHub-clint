import { FaPlus } from "react-icons/fa6";


const Members = () => {
    return (
        <div className=" p-5">
             <div className=" flex justify-between items-center p-4 border-b border-black ">
                <h2 className=" text-3xl font-bold">Clients</h2>
                <div className=" flex gap-3  ">
                    <button  className=" btn  bg-purple-800  text-white hover:bg-purple-600">Create Project <FaPlus /></button>
                </div>
            </div>
        </div>
    );
};

export default Members;