import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import Home from "./components/Home";
import Media from "./components/Media";
import { useState } from "react";

// Buat component baru, namanya Login.jsx
// Jika dia belum login, maka akan dilempar ke halaman login
// Jika sudah login, maka akan dilempar ke halaman dashboard

function App() {
  const [isLogin, setIsLogin] = useState(false); // redirect ke halaman login, jika true redirect ke halaman dashboard

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const loginProps = { isLogin, handleLogin, handleLogout };

  return (
    <Router>
      <Header {...loginProps} />
      <Routes>
        {/* Conditional rendering, ngecek sudah login apa belum */}
        {/* Kalau belum login dia hanya bisa akses halamon login */}
        {/* Belum bisa login */}
        {isLogin ? (
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/media" element={<Media />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </>
        ) : (
          <>
            <Route
              path="*"
              element={
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
              }
            ></Route>
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
