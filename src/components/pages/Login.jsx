import React, { useContext } from "react";
import logo from "../../assets/logos/Group 1329.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const loginGoogle = () => {
   
    googleLogin()
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="md:ml-[375px]  ml-28  my-10">
        <Link to="/">
          <img className="w-48 h-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="md:w-[500px] h-[400px] bg-[#faf5f5] text-center mx-auto border-4 border-sky-500">
        <div className="py-36 px-14 ">
          <h1 className="text-2xl font-semibold my-7">Login With</h1>
          <button onClick={loginGoogle} className="btn gap-2">
            Continue with Google
            <img
              className="w-[30px] h-[30px] rounded-3xl"
              src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
              alt=""
            />
          </button>
          <h2 className="mt-8">
            Don’t have an account?
            <span className="text-[#3F90FC] text-xl "> Create an account</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
