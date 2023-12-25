
import logo from '../../assets/home/tick-circle (1).svg'
const WhyChoose = () => {
    return (
        <div className=" space-y-3 p-10 text-white bg-gray-900">
            <p className=" text-center  text-4xl font-bold ">Why Choose Togy App </p>
            <p className=" text-center  mx-auto w-[500px]">consectetur adipiscing elit. Nulla imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida donec orci.</p>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10">
                <div className=" space-y-3 text-center">
                    <img className=" mx-auto" src="https://i.ibb.co/S5WPz0j/features4.png" alt="" />
                    <p className=" text-2xl text-purple-400 font-semibold">Top Flexibility</p>
                    <p>consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <p className=" text-purple-400 hover:text-white">Learn More</p>
                </div>
                <div className=" space-y-3 text-center">
                    <img className=" mx-auto" src="https://i.ibb.co/TLLRfWr/features3.png" alt="" />
                    <p className=" text-2xl text-purple-400 font-semibold">Top Time Saving
</p>
                    <p>consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <p className=" text-purple-400 hover:text-white">Learn More</p>
                </div>
                <div className=" space-y-3 text-center">
                    <img className=" mx-auto" src="https://i.ibb.co/jJv0z7B/features1.png" alt="" />
                    <p className=" text-2xl text-purple-400 font-semibold">Top Best Management</p>
                    <p>consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <p className=" text-purple-400 hover:text-white">Learn More</p>
                </div>
                <div className=" space-y-3 text-center">
                    <img className=" mx-auto" src="https://i.ibb.co/dDdPmwP/features2.png" alt="" />
                    <p className=" text-2xl text-purple-400 font-semibold">Top Collaborative</p>
                    <p>consectetur adipiscing elit. Nulla imperdiet nulla duis.</p>
                        <p className=" text-purple-400 hover:text-white">Learn More</p>
                </div>
            </div>
            <div className=" lg:flex justify-between pt-20">
                <div className=" flex items-center ">
                   <div className=" space-y-4">
                   <p className=" text-5xl w-[450px] font-bold">Why We Are <span className=' text-purple-800'> Different </span> From Others</p>
                    <p className=" w-[500px]"> consectetur adipiscing elit. Nulla imperdiet nulla duis ac. Id massa scelerisque venenatis, massa gravida donec orci.</p>
                   </div>
                   <img src={logo} alt="" />

                </div>
                <div>
                    <img src="https://i.ibb.co/9HDW70z/two-screens.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;