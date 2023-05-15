import { RiHome5Line, RiChatQuoteLine, RiBriefcase5Line} from "react-icons/ri";
import "./style.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <div className="Header">
      <img src="https://robertog13.github.io/NEGrafica/image/LogoNE.svg" alt="" />
      <div className="IconSection">
        <Link to="/NEGrafica">
          <RiHome5Line className="Icon" size={40} color=" #FAFBFC" />
        </Link>
        <Link to="/NEGrafica/contacts">
          <RiChatQuoteLine className="Icon" size={40} color=" #FAFBFC"/>
        </Link>
      </div>
    </div>
  );
}

export default Header;