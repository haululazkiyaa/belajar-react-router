import React from "react";

const Login = ({ handleLogin }) => {
  return (
    <main class="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40 text-[#444B55] text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-12">
        Silahkan login terlebih dahulu
      </h1>
      <button
        class="w-fit py-1 px-2 rounded border mt-2 border-[#009EA9] text-[#009EA9] hover:text-white hover:bg-[#009EA9]"
        onClick={handleLogin}
      >
        Login Sekarang!
      </button>
    </main>
  );
};

export default Login;
