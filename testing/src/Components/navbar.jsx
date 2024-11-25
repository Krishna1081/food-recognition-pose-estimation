import "../App.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="/" className="logo">
            <img src={logo} className="img-size" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
