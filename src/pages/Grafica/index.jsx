import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "./style.css";

function Grafica() {
  return (
    <div>
    <Header />
    <div className='FirstSection'>
      <img src="https://robertog13.github.io/NEGrafica/image/grafica.png" alt="" />
      <div className="FirstSectionInfo">
        <h1>Gráfica Rápida</h1>
      </div>
    </div>

    <div className='SecondSection'>
      <h2>Sobre</h2>
      <div className='ContainerInfoWhite'>
      <p className='TextAboutC'>
      A Empresa NE é reconhecida por sua eficiência e compromisso em fornecer serviços de gráfica com entregas rápidas e prazos curtos. Com equipamentos de última geração e uma equipe especializada, garantimos impressões de alta qualidade em um tempo reduzido, atendendo às demandas urgentes de nossos clientes. Seja para produção de cartazes, flyers, banners ou materiais promocionais, nossa empresa está preparada para atender às necessidades de impressão com agilidade, sem comprometer a qualidade do resultado final. Nosso foco é oferecer soluções rápidas e eficientes, para que nossos clientes possam obter seus materiais gráficos no menor tempo possível, mantendo sua vantagem competitiva e alcançando seus objetivos comerciais.
      </p>
      <img src="https://robertog13.github.io/NEGrafica/image/grafica2.png" alt="" />
      </div>
      <a href='https://api.whatsapp.com/send?phone=5535988563842' className='SkinButtonLarge' target="_blank" rel="noopener noreferrer">Entre em contato</a>
    </div>


    <div className='ThirdSection'>
     <h2>Tipos de Impressão</h2>
      <ul className='ListaDeGraficas'>
        <li>Banner</li>
        <li>Adesivos</li>
        <li>Cartões</li>
        <li>Flyers</li>
        <li>Logos</li>
        <li>Tags</li>
        <li>Cartão Duplo</li>
      </ul>

    </div>
    <Footer/>
  </div>
  );
}

export default Grafica;