import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";
import "./Profile.css";

const Profile = () => {
  const { user, logout, getProfile, token } = useContext(UserContext);

  useEffect(() => {
    if (!user && token) {
      getProfile(); // recupera el perfil si hay token pero no usuario cargado aún
    }
  }, [user, token, getProfile]);

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <Button variant="danger" onClick={logout}>
            Cerrar Sesión
          </Button>
        </>
      ) : (
        <p>Debes logearte</p>
      )}
    </div>
  );
};

export default Profile;
