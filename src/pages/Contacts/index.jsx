import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { RiWhatsappLine, RiInstagramLine, RiContactsBook2Line } from "react-icons/ri";

function Contacts() {
  return (
    <div>
    <Header />
    <div className='FirstSection'>
      <img src="src/assets/biro-analysis-of-the-companys-investment-growth-1.png" alt="" />
      <div className="FirstSectionInfo">
        <h1>Entre em Contado</h1>
      </div>
    </div>

    <div className='SecondSection'>
      <div className='ContainerInfoWhite'>
        <p className='TextAboutC'>WhatsApp <br />
      (35) 98856-3842</p>
        <a className='SkinButtonLarge'>
          <RiWhatsappLine size={30}/>
        </a>
      </div>
    </div>
    <div className='SecondSection'>
      <div className='ContainerInfoWhite'>
      <p className='TextAboutC'>Intagram <br/> @nesolucoesgraficas</p>
        <a className='SkinButtonLarge'>
              <RiInstagramLine size={30}/>
        </a>
      </div>
    </div>
    <div className='SecondSection'>
      <div className='ContainerInfoWhite'>
      <p className='TextAboutC'>Email<br/> robertog.adm@gmail.com</p>
        <a className='SkinButtonLarge'>
          <RiContactsBook2Line size={30}/>         </a>
      </div>
    </div>

    <Footer />
  </div>
  );
}

export default Contacts;