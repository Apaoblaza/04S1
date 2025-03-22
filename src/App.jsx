import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { Route, Routes, Navigate } from "react-router-dom";
import CartProvider,{CartContext} from "./context/CartContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const {login}=useContext(UserContext);
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<ProtectedProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button onClick={()=>{login({email:"test@test.com",password:"123123"})}}>LOGIN</button>
      <Footer />
    </CartProvider>
  );
}

const ProtectedProfile = () => {
  const { token } = useContext(CartContext);
  return token ? <Profile /> : <Navigate to="/login" />;
};

export default App;