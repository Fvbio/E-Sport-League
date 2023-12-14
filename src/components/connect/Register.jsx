// const Register = () => {
//     return <>
// <form class="box" action="#" method="post">
//         <svg width="30" height="30" viewBox="0 0 24 24">
//             <path
//                 d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z">
//             </path>
//         </svg>
//         <h1>Créer un compte</h1>
//         <input type="text" name="email" placeholder="Votre Email"/>
//         <input type="password" name="password" placeholder="Votre Mot De Passe"/>
//         <input type="checkbox" id="conditions" name="conditions"/>
//         <label for="conditions" class="conditions-label">Accepter les conditions d'utilisation</label>
//         <input type="submit" name="submit" value="Créer le compte"/>
//     </form>    </>
// }

// export default Register;

import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptConditions, setAcceptConditions] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConditionsChange = (e) => {
    setAcceptConditions(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour gérer la soumission du formulaire
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Conditions acceptées:', acceptConditions);
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
