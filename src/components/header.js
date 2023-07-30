import logo from "../assets/Vector.png";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  let links = ["Home", "About", "Service", "Knowledge", "Contact US"];
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="headerLinks">
      {links.map((link, i) => (
        // <Link key={i} to={"/"}>{link}</Link>
        <p key={i}>{link}</p>
      ))}
      <button className="getstarted">Get Started</button>
      </div>      
    </div>
  );
};

export default Header;
