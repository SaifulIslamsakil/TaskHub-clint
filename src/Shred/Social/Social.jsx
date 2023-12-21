
import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/Provider";
const Social = () => {
    const {Google} =useContext(AuthContext)
    const handelGoogle = () =>{
        Google()
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className=" flex justify-evenly items-center mt-5">
           <p onClick={handelGoogle} className=" text-white w-10 h-10 rounded-full text-2xl flex justify-center items-center bg-purple-800 hover:bg-purple-600"><FaGoogle /></p>
           <p className=" text-white w-10 h-10 rounded-full text-2xl flex justify-center items-center bg-purple-800 hover:bg-purple-600"><FaFacebook /></p>
        </div>
    );
};

export default Social;