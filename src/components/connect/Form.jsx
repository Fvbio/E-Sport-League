const Form = () => {
  return (
    <>
      <form class="box">
        <svg width="30" height="30" viewBox="0 0 24 24">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
        </svg>
        <h1>Connexion</h1>
        <input type="text" name="" placeholder="Votre Nom d'utilisateur" />
        <input type="password" name="" placeholder="Votre Mot De Passe" />
        <div class="buttons-container">
          <input type="submit" formaction="Game.jsx" value="Connexion" />
          <input type="submit" formaction="creation.html" value="Créer un compte"/>
        </div>
      </form>
    </>
  );
};

export default Form;
