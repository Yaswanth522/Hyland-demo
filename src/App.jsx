import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";

  return (
    <>
      <ScrollToTop />
      {!isLogin && <Header />}
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isLogin && <Footer />}
      <ChatWidget />
    </>
  );
}
