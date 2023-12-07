import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "@/components/Basic/NavigationBar.jsx";
import Footer from "@/components/Basic/Footer.jsx";
import Home from "@/pages/Home/Home.jsx";
import MapViewer from "@/pages/Map/MapViewer.jsx";
import Signup from "@/pages/auth/SignUpPage.jsx";
import Login from "@/pages/auth/LoginPage.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/map" element={<MapViewer />} />
        <Route path="/dict" element={<div>Dict</div>} />
        <Route path="/mypage" element={<div>MyPage</div>} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path={"*"} element={"404 NOT FOUND"} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
