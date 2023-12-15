// const Form = () => {
//   return (
//     <>
//       <form class="box">
//         <svg width="30" height="30" viewBox="0 0 24 24">
//           <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
//         </svg>
//         <h1>Connexion</h1>
//         <input type="text" name="" placeholder="Votre Nom d'utilisateur" />
//         <input type="password" name="" placeholder="Votre Mot De Passe" />
//         <div class="buttons-container">
//           <input type="submit" formaction="Game.jsx" value="Connexion" />
//           <input type="submit" formaction="Register.jsx" value="Créer un compte"/>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Form;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utilisez useNavigate au lieu de useHistory


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour gérer la soumission du formulaire
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
  };

  const handleCreerCompteClick = () => {
    // Redirection vers la page d'inscription
    navigate('/inscription'); // Assurez-vous que la route '/inscription' est correctement configurée dans votre routeur
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
          {/* Notez que formaction n'est pas utilisé ici. Utilisez onSubmit pour gérer la soumission du formulaire. */}
          <input type="submit" value="Créer un compte" onClick={handleCreerCompteClick} />
        </div>
      </form>
    </>
  );
};

export default Form;

