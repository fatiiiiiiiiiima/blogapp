import{Link} from "react-router-dom"

export default function Header(){
    return(
        <header>
      <Link to="/ " className="logo"My Blog></Link>
      <nav>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/register">Register</Link>
      </nav>
    </header>

    );
}