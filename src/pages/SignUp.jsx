import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    if (!fullname) {
      setError("Please enter name");
      return;
    }
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter valid email.");
      return;
    }
    if (!username) {
      setError("Please enter username");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    //Sign Up API Call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullname: fullname,
        email: email,
        username: username,
        password: password,
      });
      //Handle successful login response
      if(response.data && response.data.error){
        setError(response.data.message)
        return
      }


      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }

    } catch (e) {
      //Handle login error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      return;
    }
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-10">
        <div className="w-96 border rounded bg-white px-7 py-10 hover:drop-shadow-lg ease-in-out transition-all">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7 text-primary font-medium">
              Create Account
            </h4>
            <input
              type="text"
              placeholder="Full name..."
              className="input-box"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email..."
              className="input-box"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Username..."
              className="input-box"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Password..."}
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-sm text-center font-medium mt-4">
              Already Registered?{" "}
              <Link to="/login" className="underline text-blue-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
