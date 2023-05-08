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
      <img src="src/assets/LogoNE.svg"  alt="Logo" />
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
            <img src="src/assets/meeting-4156018_1280.jpg" alt="Job" />
            <h3>Consultoria Empresarial</h3>
            <p>Plano de negócio, consultoria em marketing, consultoria financeira, consultoria de recursos humanos ...</p>
            <Link className="SkinButton">Ver Projetos</Link>
          </div>

          <div className="Card">
            <img src="src/assets/printer-933098_1280.jpg" alt="Job" />
            <h3>Gráfica Rápida</h3>
            <p>Cartão de visitas, TAGs, Imã de Geladeira, Banners, Faixas, Receituários, Blocos de pedidos, cardápios,Placas de sinalização PVC e muito mais.</p>
            <Link className="SkinButton">Ver Projetos</Link>
          </div>

          <div className="Card">
            <img src="src/assets/WhatsApp Image 2023-05-06 at 10.23.38.jpeg" alt="Job" />
            <h3>Projeto Foca Esporte</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a reiciendis accusantium corporis amet assumenda. Debitis voluptate maiores ut ad voluptatibus, modi vero sit earum quod est atque neque. Aut?</p>
            <Link className="SkinButton">Ver Projetos</Link>
          </div>
        </div>
      </div>

      
        <div className="ThirdSection">
          <h2>Sobre</h2>
          <div className="ThirdInfoSection">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius veniam natus minus reprehenderit pariatur, ipsa consequatur optio asperiores recusandae saepe laborum possimus maiores ipsam iusto non inventore et deserunt!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fuga accusantium culpa eveniet dolores eaque necessitatibus! Beatae impedit amet odio. Autem ducimus earum, debitis dignissimos consequuntur voluptatum repudiandae reprehenderit natus?
            </p>
            <div className="teste"></div>
          </div>
        </div>


      <Footer />
    </div>
  );
}

export default Home;