const Register = () => {
    return <>
<form class="box" action="#" method="post">
        <svg width="30" height="30" viewBox="0 0 24 24">
            <path
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z">
            </path>
        </svg>
        <h1>Créer un compte</h1>
        <input type="text" name="email" placeholder="Votre Email"/>
        <input type="password" name="password" placeholder="Votre Mot De Passe"/>
        <input type="checkbox" id="conditions" name="conditions"/>
        <label for="conditions" class="conditions-label">Accepter les conditions d'utilisation</label>
        <input type="submit" name="submit" value="Créer le compte"/>
    </form>    </>
}

export default Register;