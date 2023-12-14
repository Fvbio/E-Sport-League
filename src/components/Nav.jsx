import { Link } from "react-router-dom";

const Nav = () => {
    return <nav>
        <Link to={"/tournoi"}> TOURNOI </Link>
        <Link to={"/jeux"}> JEUX </Link>


    </nav>;
}

export default Nav;