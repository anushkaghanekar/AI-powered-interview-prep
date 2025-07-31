import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return <div>
      <label className="text-[13px] text-slate-900">{label}</label>

      <div className="input-box">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="w-full bg-white outline-none border border-gray-900 focus:border-orange-900 focus:ring-1 focus:ring-orange-900 rounded-md px-3 py-2 transition-all duration-400"
          value={value}
          onChange={(e) => onChange(e)}
          />

          {type === "password" && (
            <>
              {showPassword ? (
                <FaRegEye
                  size={22}
                  className="text-primary cursor pointer"
                  onClick={() => toggleShowPassword()}
                />
              ) : (
                <FaRegEyeSlash
                  size={22}
                  className="text-slate-400 cursor-pointer"
                  onClick={() => toggleShowPassword()}
                />  
              )}
            </>
          )} 
      </div>
  </div>
};

export default Input;