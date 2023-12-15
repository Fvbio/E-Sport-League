import React, { useState } from 'react';
// import * as ReactRouterDom from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptConditions, setAcceptConditions] = useState(false);
//   const history = ReactRouterDom.useHistory();
const navigate = useNavigate(); // Utilisez useNavigate au lieu de useHistory



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConditionsChange = (e) => {
    setAcceptConditions(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // objet représentant les données du formulaire
    const formData = {
      email,
      password,
      acceptConditions,
    };

    try {
      // requête POST vers le serveur JSON
      const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

      // Vérifier si la requête a réussi 
      if (response.status === 201) {
        console.log('Inscription réussie !');
        navigate('/tournoi');
      } else {
        console.error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST', error);
    }
  };

  return (
    <>
      <form className="box" onSubmit={handleSubmit}>
        <svg width="30" height="30" viewBox="0 0 24 24">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
        </svg>
        <h1>Créer un compte</h1>
        <input
          type="text"
          name="email"
          placeholder="Votre Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Votre Mot De Passe"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="checkbox"
          id="conditions"
          name="conditions"
          checked={acceptConditions}
          onChange={handleConditionsChange}
        />
        <label htmlFor="conditions" className="conditions-label">Accepter les conditions d'utilisation</label>
        <input type="submit" name="submit" value="Créer le compte" />
      </form>
    </>
  );
};

export default Register;
