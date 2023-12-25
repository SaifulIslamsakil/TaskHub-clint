
import { Link } from "react-router-dom";
import bannerImg from "../../assets/home/banner_img.png"
const Banner = () => {
    return (
        <div className=" w-full  " style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" bg-black  pt-10 px-10 bg-opacity-70 p-5 flex justify-center items-center">
                <div className=" text-white lg:flex justify-between  space-y-5 ">
                    
                    <div className=" flex-1 flex items-center ">
                        <div className=" space-y-4">
                        <h2 className=" text-7xl font-bold text-white">The Best App For Making Life More Easier</h2>
                        <p>consectetur adipiscing elit. Nulla de imperdiet nulla duis ac. Id massa scelerisque venenatis, massacredeit gravida donec orci.</p>
                        <Link to="/signin"><button className=" hover:bg-purple-600 btn bg-purple-800 m-5 outline-0 border-0 text-white uppercase">Getting Started</button></Link>
                        </div>
                    </div>
                    <div className=" flex-1 pt-10 flex justify-center items-center">
                        <img className=" w-5/6" src="https://i.ibb.co/k3KzkZK/banner-img8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;