import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Effectuer une requête POST pour la connexion
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Si la réponse du serveur est OK, gérer la connexion réussie ici
        console.log("Connexion réussie");
        navigate("/tournoi");
      } else {
        // Si la réponse du serveur n'est pas OK, gérer l'échec de la connexion ici
        console.log("Échec de la connexion");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };

  const onClickInscription = () => {
    // Redirection vers la page d'inscription
    navigate("/inscription");
  };

  const onClickConnexion = () => {
    // Redirection vers la page d'inscription
    navigate("/tournoi");
  };

  return (
    <>
      <form className="box" onSubmit={handleSubmit}>
        <svg width="30" height="30" viewBox="0 0 24 24">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
        </svg>
        <h1>Connexion</h1>
        <input
          type="text"
          name="username"
          placeholder="Votre Nom d'utilisateur"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Votre Mot De Passe"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="buttons-container">
          <input type="submit" value="Connexion" />

          <input
            type="submit"
            value="Créer un compte"
            onClick={onClickInscription}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
