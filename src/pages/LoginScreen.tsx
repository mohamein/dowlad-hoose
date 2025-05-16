import React from "react";
import LoginForm from "./Dashboard/components/LoginForm";

const LoginScreen: React.FC = () => {
  return (
    <div className="bg-white h-[380px] w-[360px] mx-auto p-6 rounded-md shadow-md mt-20 border border-green-200">
      <div className="flex justify-center items-center">
        <img
          src="DHH.png"
          alt="DHH Logo"
          width={54}
          height={54}
          className="object-contain text-center"
        />
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Form Footer */}
      <div className="flex justify-end items-end mt-10">
        <p className="text-[12px] font-medium text-red-400">
          Empowered by Target Tech
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
