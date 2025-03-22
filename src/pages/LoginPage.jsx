import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // <- Importar useNavigate
import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate(); // <- Hook para navegación

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleResult = async () => {
    if (formData.email === "" || formData.password === "") {
      alert("Deben llenarse todos los campos para ingresar.");
    } else if (formData.password.length < 6) {
      alert("El Password debe tener al menos 6 caracteres.");
    } else {
      try {
        await login({ email: formData.email, password: formData.password });
        navigate("/profile"); // <- Redirige a /profile si login es exitoso
      } catch (error) {
        alert("Error al iniciar sesión");
        console.log(error);
      }
    }
  };

  return (
    <div className="LoginPage">
      <h1 className="logh1">Log In</h1>
      <h2 className="logh2">Ingresa tu mail</h2>
      <input
        className="logInput"
        type="text"
        placeholder="Escribe tu correo electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <h2 className="regh2">Ingresa tu Contraseña</h2>
      <input
        className="logInput"
        type="password"
        placeholder="Escribe tu password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button variant="success" onClick={handleResult} className="logButton">
        Ingresar
      </Button>
    </div>
  );
};

export default LoginPage;
