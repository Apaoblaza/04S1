import "./App.css";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cardpizza from "./components/Cardpizza";
import Pizza from "./components/Pizza";

function App() {
 

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer />
    </>
  );
}

export default App;
