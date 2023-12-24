
import { IoLinkSharp } from 'react-icons/io5';
import { RiMessage2Line } from 'react-icons/ri';

const TaskData = ({data}) => {
    return (
        <div  className=" bg-white p-4 rounded-lg space-y-3 border-b-8 border-purple-500 ">
        <div className=" flex justify-between items-center ">
            <h2 className=" p-2 rounded-full bg-sky-200">UI/UX Design</h2>
            <div className=" text-center">
                <img className=" w-10 h-10 rounded-full mx-auto" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                <p className=" bg-purple-200 rounded-lg mt-2 p-1">Medium</p>
            </div>
        </div>
        <p className=" text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint reprehenderit itaque libero dolorum vitae natus,</p>
        <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-1">
                <p className=" flex items-center gap-1"><RiMessage2Line /> 54</p>
                <p className=" flex items-center gap-1"><IoLinkSharp /> 43</p>
            </div>
            <p className=" bg-green-200 p-1 rounded-lg">Social Geek Made</p>
        </div>
    </div>
    );
};

export default TaskData;