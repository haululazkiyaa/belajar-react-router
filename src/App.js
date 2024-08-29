import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Media from "./pages/Media";
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
            <Route path="*" element={<Login {...loginProps} />}></Route>
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
