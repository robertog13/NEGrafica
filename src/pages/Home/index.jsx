import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RiWhatsappLine } from "react-icons/ri";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Home() {
  return (
    <div>
      <Header />
      <div className="FirstSection">
      <img src="https://robertog13.github.io/NEGrafica/image/LogoNE.svg"  alt="Logo" />
        <div className="FirstSectionInfo">
          <p>Consultoria Empresarial,<br/> Sistemas & Gráfica Rápida</p>
          <span>
            Centro Comercial Michel Haidar, Loja 27<br/>
            Av.D.Pedro II nº135, São Lourenço - MG<br/>
            <RiWhatsappLine  />  (35) 98856-3842
          </span>
        </div>
      </div>

      <div className="SecondSection">
        <h2>Nossos Serviços</h2>
        <div className="CardSection">
          <div className="Card">
            <img src="https://robertog13.github.io/NEGrafica/image/meeting-4156018_1280.jpg" alt="testei e n deu" />
            <h3>Consultoria Empresarial</h3>
            <p>Plano de negócio, consultoria em marketing, consultoria financeira, consultoria de recursos humanos ...</p>
            <Link to="/NEGrafica/consultoria"className="SkinButton">Ver Mais</Link>
          </div>

          <div className="Card">
            <img src="https://robertog13.github.io/NEGrafica/image/printer-933098_1280.jpg" alt="aaaaa" />
            <h3>Gráfica Rápida</h3>
            <p>Cartão de visitas, TAGs, Imã de Geladeira, Banners, Faixas, Receituários, Blocos de pedidos, cardápios,Placas de sinalização PVC e muito mais.</p>
            <Link to="/NEGrafica/grafica" className="SkinButton">Ver Mais</Link>
          </div>

          <div className="Card">
            <img src="https://robertog13.github.io/NEGrafica/image/coding-g01917004a_1280.jpg" alt="Job" />
            <h3>Web Desing</h3>
            <p>Confecção de site para divulgação do seu negócio e aumento do público através do meu digital com um site próprio</p>
            <Link to="/NEGrafica/webdesign" className="SkinButton">Ver Mais</Link>
          </div>
        </div>
      </div>

      
        <div className="ThirdSection">
          <h2>Sobre</h2>
          <div className="ThirdInfoSection">
            <p>
              A NE é uma empresa multifacetada que oferece serviços abrangentes de design, gráfica rápida, web design e consultoria. Com uma equipe altamente capacitada e experiente, estamos comprometidos em fornecer soluções criativas e personalizadas para atender às necessidades específicas de nossos clientes. Desde o desenvolvimento de identidade visual e materiais de marketing até impressões em pequena escala, design de websites responsivos e estratégias de negócios, nossa empresa se destaca por sua qualidade excepcional, atendimento ao cliente de primeira linha e resultados impactantes. Esteja você procurando por designs únicos e atraentes, impressões rápidas e de alta qualidade, presença digital impressionante ou insights estratégicos para impulsionar seus negócios, a empresa XYZ é sua parceira confiável para todas as suas necessidades criativas e consultivas.
            </p>
            <img className="IconAbout" src="https://robertog13.github.io/NEGrafica/image/biro-blue-computer-with-different-elements-for-web-design-1.png" alt="teste" />
          </div>
        </div>


      <Footer />
    </div>
  );
}

export default Home;
