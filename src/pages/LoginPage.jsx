import { useState } from "react";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
    const [users,setUsers]=useState({
        mail:'',
        pass:'',
    })
    const handleChange=(e)=>{        
        setUsers({...users,[e.target.name]:e.target.value})
       }
    const handleResult=()=>{
        if (users.mail===""||users.pass==="") {
            alert("deben llenarse todos los campos para registrarse")         
        } else if(users.pass.length<6){
            alert("El Password debe tener al menos 6 caracteres")
            
        }else{
            console.log("Los datos son", users)

        }}
        
  return (
    <>
    <div className="LoginPage">
    <h1 className="logh1">Log In</h1>
    <h2 className="logh2">Ingresa tu mail</h2>
    <input 
    className="logInput"
    type='text' 
    placeholder='Escribe tu correo electrónico' 
    name='mail'
    value={users.mail}
    onChange={handleChange}
    />
    <h2 className="regh2">Ingresa tu Contraseña</h2>
    <input 
    className="logInput"
    type='text' 
    placeholder='Escribe tu password' 
    name='pass'
    value={users.pass}
    onChange={handleChange}
    />
    
     <Button variant="success" onClick={handleResult} className="logButton">Ingresar</Button>
    </div>
    </>
  )
}

export default LoginPage