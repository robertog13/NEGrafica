import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function WebDesign() {

  const whtasApp = () => {
    window.open('http://pt.stackoverflow.com');
  }
  return (
    <div>
    <Header />
    <div className='FirstSection'>
      <img src="src/assets/web2.png" alt="" />
      <div className="FirstSectionInfo">
        <h1>Web Design</h1>
      </div>
    </div>

    <div className='SecondSection'>
      <h2>Sobre</h2>
      <div className='ContainerInfoWhite'>
      <p className='TextAboutC'>
        A Empresa NE é especializada em serviços de web design, oferecendo soluções criativas e funcionais para a presença online de nossos clientes. Nossa equipe de designers e desenvolvedores experientes trabalha em estreita colaboração com cada cliente para criar sites atrativos, responsivos e de fácil navegação. Utilizando as últimas tendências e tecnologias em web design, garantimos uma experiência de usuário excepcional, adaptada para desktops, tablets e smartphones. Além do design visualmente atraente, também nos concentramos na arquitetura de informação e na usabilidade, garantindo que os visitantes do site possam encontrar facilmente as informações e recursos que procuram. Seja um site institucional, uma loja online ou uma plataforma interativa, a Empresa NE está pronta para criar uma presença online impactante que reflita a personalidade e objetivos de cada cliente.
      </p>
      <img src="src/assets/web-design.png" alt="" />
      </div>
    <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5535988563842' className='SkinButtonLarge'>Entre em contato</a>
    </div>

    <Footer />
  </div>
  );
}

export default WebDesign;