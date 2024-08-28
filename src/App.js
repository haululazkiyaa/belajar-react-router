import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Media from "./components/Media";

// Buat component baru, namanya Login.jsx
// Jika dia belum login, maka akan dilempar ke halaman login
// Jika sudah login, maka akan dilempar ke halaman dashboard

function App() {
  const isLogin = false; // redirect ke halaman login, jika true redirect ke halaman dashboard

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-cyan-300">
        <Header />
        <Routes>
          {/* Conditional rendering, ngecek sudah login apa belum */}
          {/* Kalau belum login dia hanya bisa akses halamon login */}
          {/* Belum bisa login */}
          {isLogin ? (
            <>
              <Route path="*" element={<h1>Selamat datang kembali</h1>}></Route>
            </>
          ) : (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/media" element={<Media />}></Route>
              <Route
                path="/login"
                element={<h1>Silahkan login terlebih dahulu</h1>}
              ></Route>
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
