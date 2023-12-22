
import { Link } from "react-router-dom";
import bannerImg from "../../assets/home/banner_img.png"
const Banner = () => {
    return (
        <div className=" w-full h-[90vh]" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" bg-black  bg-opacity-70 h-full p-5 flex justify-center items-center">
                <div className=" text-white  space-y-5 text-center">
                    <h3 className=" w-[800px] text-center text-5xl font-semibold">The Project Management Tool That Adapts to Your Workflow</h3>
                    <p className=" text-center text-xl">Simple by Default. Powerful on demand.</p>
                    <Link to="signin">
                        <button className=" text-white text-xl btn mt-5 bg-purple-800  rounded-lg hover:bg-purple-500 border-none">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;