import { useState } from "react";

import { useNavigate, NavLink } from "react-router-dom";

import InputComponent from "../components/InputComponent";
import SubmitComponent from "../components/SubmitComponent";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-3xl flex justify-center items-center z-50 px-4">
      <div className="w-full max-w-lg bg-white/85 p-6 backdrop-blur-3xl rounded-lg shadow-2xl flex flex-col gap-4 border border-black/10">
        <form
          action=""
          method="get"
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-10">
            Login
          </h2>

          <InputComponent
            type="text"
            placeholder="Enter Your Email"
            classname="text-black text-base w-full border-2 px-4 py-2 rounded-xl text-center"
          />
          <InputComponent
            type="password"
            placeholder="Enter Your Password"
            classname="text-black text-base w-full border-2 px-4 py-2 rounded-xl text-center"
          />
          <SubmitComponent
            text="Login"
            onClick={handleLogin}
            classname="cursor-pointer bg-white hover:bg-gray-200 px-8 py-2 mt-6 rounded-xl border-2 border-black"
          />

          <NavLink className="pt-4 text-blue-500 hover:text-blue-700 text-sm sm:text-base">
            Forget Password?
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
