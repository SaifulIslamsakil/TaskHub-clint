import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import { useForm } from "react-hook-form";
import Social from "../../Shred/Social/Social";
import { FaEyeSlash } from "react-icons/fa";
import img from "../../assets/home/banner_img.png"
import { Link } from "react-router-dom";

const SignIn = () => {
    const [hiddenPass, setHiddenPass] = useState(false)
    const { SingIn } = useContext(AuthContext)
    const handelChangeInputType = () => {
        setHiddenPass(!hiddenPass)
    }

    const {
        register,
        handleSubmit,
    } = useForm()

    const handelFromSubmit = (data) => {
        SingIn(data.email, data.password)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="  w-full h-auto p-5 lg:h-screen flex justify-center items-center" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" w-96 rounded-lg shadow-2xl bg-white p-7 ">
                <form onSubmit={handleSubmit(handelFromSubmit)}>
                    <h1 className=" text-2xl font-bold text-center text-purple-800 ">SignIn</h1>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="text-xl font-semibold">Email</span>
                            </div>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </div>
                            <div className="input input-bordered w-full max-w-xs flex items-center">
                                <input type={hiddenPass ? "password" : "text"} {...register("password", { required: true })} placeholder="password" className=" w-full" />

                                <span onClick={handelChangeInputType} className=" text-2xl"><FaEyeSlash /></span>
                            </div>
                        </label>
                    </div>
                    <Link to="/signUp"> 
                        <p className="  mt-3">your need an accout <span className=" text-purple-600 hover:underline">please Sign Up</span></p>
                    </Link>
                    <div className=" mt-5">
                        <button className="btn w-full bg-purple-800 hover:bg-purple-600 text-white text-xl ">SignIn</button>
                    </div>
                </form>
                <Social></Social>
            </div>
        </div>
    );
};

export default SignIn;