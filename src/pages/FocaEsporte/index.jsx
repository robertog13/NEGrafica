import React from 'react';
import "./style.css"
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function FocaEsporte() {
  return (
    <div>
      <Header />
      <div className='FirstSectionFE'>
        <img src="" alt="Foca Esporte logo" />
        <h1>Foca Esporte</h1>
        <img src="src/assets/LogoNE.svg" alt="" />
      </div>

      <div className='SecondSection'>
        <h2>Sobre</h2>
        <div className='CardSection'></div>
        <p className='TextAboutFe'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit illum quibusdam alias porro aliquid totam? In, libero impedit omnis voluptas aliquam repellendus distinctio perferendis ex, nisi ab optio deleniti.</p>
      <button className='SkinButton'>Entre em contato</button>
      </div>

      <div className='ThirdSection'>
        <h2>Parceiros</h2>
      </div>

      <Footer />
    </div>
  );
}

export default FocaEsporte;