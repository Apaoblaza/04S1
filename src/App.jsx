import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cardpizza from "./components/Cardpizza";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import {Route,Routes} from "react-router-dom"
import Profile from "./pages/Profile";

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/pizza/p001" element={<Pizza/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
