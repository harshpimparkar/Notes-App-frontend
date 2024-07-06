import { useState } from "react";
import { FaEye , FaEyeSlash } from "react-icons/fa";
const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <div className="flex items-center bg-transparent  px-5 rounded mb-3 input-box">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Password..."}
          type={isShowPassword ? "text" : "password"}
          className="w-full text-sm bg-transparent rounded outline-none"
        />
        {isShowPassword? <FaEye size={22} className="text-primary cursor-pointer" onClick={toggleShowPassword}/>: <FaEyeSlash size={22} className="text-primary cursor-pointer" onClick={toggleShowPassword}/>}
        
      </div>
    </>
  );
};

export default PasswordInput;
