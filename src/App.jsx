import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/Registerpage";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage/> */}
      <LoginPage/>
      <Footer />
    </>
  );
}

export default App;
