import React from "react";
import Button from "react-bootstrap/Button";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <p><strong>Email:</strong></p>
      <Button variant="danger" onClick={() => alert("Cerrar sesión aún no implementado")}>
        Cerrar Sesión
      </Button>
    </div>
  );
};
export default Profile;