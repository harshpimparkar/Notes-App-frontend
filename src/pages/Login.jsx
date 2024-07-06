import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username) {
      setError("Please enter the password");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("");

    //Login API Call
    try {
      const response = await axiosInstance.post("/login", {
        username: username,
        password: password,
      });

      //Handle Successful login response
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      //Handle error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-md text-xl">
        <h2 className="text-xl font-bold text-black py-2 mr-2">
          <div className="flex gap-2 items-center mr-5 font-extrabold">
            <Link to="/">Notes.</Link>
          </div>
        </h2>
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="w-96 border rounded bg-white px-7 py-10 hover:drop-shadow-lg ease-in-out transition-all">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7 text-primary font-medium">Login</h4>
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
            />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center font-medium mt-4">
              Not Registered yet?{" "}
              <Link to="/create-account" className="underline text-blue-600">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
