import { RiWhatsappLine } from "react-icons/ri";
import "./style.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Contacts">
        <p>
          Centro Comercial Michel Haidar, Loja 27<br/>
          Av.D.Pedro II nº135, São Lourenço - MG
        </p>
        <p><RiWhatsappLine  />  (35) 98856-3842</p>
        <p>Email:</p>
      </div>
      <div className="Referencia">
        <p>Imagens Usadas feitas por:</p>
        <p><a href="https://pixabay.com/pt/users/sarahblocks-8094083/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4156018">sarah blocksidge</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4156018">Pixabay</a></p>
        <p>
        <a href="https://pixabay.com/pt/users/tookapic-1386459/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=933098">tookapic</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=933098">Pixabay</a>
        </p>
        <p>
        <a href="https://icons8.com/illustrations/author/wsla8vwyVKgS">OlFi</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
        </p>
      </div>

    </div>
  );
}

export default Footer;