import { RiHome5Line, RiChatQuoteLine, RiBriefcase5Line} from "react-icons/ri";
import "./style.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <div className="Header">
      <img src="src/assets/LogoNE.svg" alt="" />
      <div className="IconSection">
        <Link to="/NEGrafica">
          <RiHome5Line className="Icon" size={28} color=" #FAFBFC" />
        </Link>
      <RiChatQuoteLine className="Icon" size={28} color=" #FAFBFC"/>
      <RiBriefcase5Line  className="Icon" size={28} color=" #FAFBFC"/>
      </div>
    </div>
  );
}

export default Header;