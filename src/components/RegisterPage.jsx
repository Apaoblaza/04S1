import { useState } from "react";
import "./RegisterPage.css";
import Button from "react-bootstrap/Button";

const RegisterPage = () => {
    const [users,setUsers]=useState({
        mail:'',
        pass:'',
        pass2:''
    })
    const handleChange=(e)=>{        
        setUsers({...users,[e.target.name]:e.target.value})
       }
    const handleResult=()=>{
        if (users.mail===""||users.pass===""||users.pass2==="") {
            alert("deben llenarse todos los campos para registrarse")
        } else if (users.pass!==users.pass2) {
            alert("Los passwords deben ser iguales")            
        } else if(users.pass.length<6){
            alert("El Password debe tener al menos 6 caracteres")
        }else{
            console.log("Los datos son", users)

        }}
        
  return (
    <>
    <div className="RegisterPage">
    <h1 className="regh1">Register</h1>
    <h2 className="regh2">Ingresa tu mail</h2>
    <input 
    className="regInput"
    type='text' 
    placeholder='Escribe tu correo electrónico' 
    name='mail'
    value={users.mail}
    onChange={handleChange}
    />
    <h2 className="regh2">Ingresa y Repite tu contraseña</h2>
    <input 
    className="regInput"
    type='text' 
    placeholder='Escribe tu password' 
    name='pass'
    value={users.pass}
    onChange={handleChange}
    />
    <input 
    className="regInput"
    type='text' 
    placeholder='Confirma tu password' 
    name='pass2'
    value={users.pass2}
    onChange={handleChange}
    />
     <Button variant="success" onClick={handleResult} className="regButton">Registrarse</Button>
    </div>
    </>
  )
}

export default RegisterPage