import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Consultoria() {
  return (
    <div>
    <Header />
    <div className='FirstSection'>
      <img src="https://robertog13.github.io/NEGrafica/image/biro-analysis-of-the-companys-investment-growth-1.png" alt="" />
      <div className="FirstSectionInfo">
        <h1>Consultoria Empresarial</h1>
      </div>
    </div>

    <div className='SecondSection'>
      <h2>Sobre</h2>
      <div className='ContainerInfoWhite'>
        <p className='TextAboutC'>
          A Empresa NE é uma renomada empresa que se dedica exclusivamente à Consultoria Empresarial. Com uma equipe de consultores altamente capacitados e especializados em diversas áreas, estamos comprometidos em oferecer soluções estratégicas e personalizadas para impulsionar o crescimento e o sucesso dos negócios de nossos clientes. Nossos serviços abrangem desde a análise de mercado, planejamento estratégico, otimização de processos, gestão financeira, até a implementação de estratégias de marketing e desenvolvimento de liderança. Com um foco claro na excelência e na obtenção de resultados tangíveis, a Empresa NE é a parceira ideal para empresas que buscam melhorar sua eficiência, aumentar sua competitividade e alcançar um desempenho excepcional em seus setores de atuação.        
        </p>
        <img src="https://robertog13.github.io/NEGrafica/image/biro-searching-for-information-with-magnifying-glass.png" alt="" />
      </div>
      <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5535988563842' className='SkinButtonLarge'>Entre em contato</a>
    </div>

    <Footer />
  </div>
  );
}

export default Consultoria;