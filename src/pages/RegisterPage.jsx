import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; // Ajusta el path según tu estructura
import "./RegisterPage.css";
import Button from "react-bootstrap/Button";

const RegisterPage = () => {
    const { register } = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleResult = async () => {
        const { email, password, password2 } = formData;

        if (!email || !password || !password2) {
            alert("Deben llenarse todos los campos para registrarse");
        } else if (password !== password2) {
            alert("Las contraseñas deben ser iguales");
        } else if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
        } else {
            try {
                await register({ email, password });
                // Puedes redirigir a login o a otra página después del registro si lo deseas
            } catch (error) {
                alert("Error al registrar usuario");
                console.log(error);
            }
        }
    };

    return (
        <div className="RegisterPage">
            <h1 className="regh1">Register</h1>
            <h2 className="regh2">Ingresa tu mail</h2>
            <input
                className="regInput"
                type="text"
                placeholder="Escribe tu correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <h2 className="regh2">Ingresa y repite tu contraseña</h2>
            <input
                className="regInput"
                type="password"
                placeholder="Escribe tu contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <input
                className="regInput"
                type="password"
                placeholder="Confirma tu contraseña"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
            />
            <Button variant="success" onClick={handleResult} className="regButton">
                Registrarse
            </Button>
        </div>
    );
};

export default RegisterPage;
