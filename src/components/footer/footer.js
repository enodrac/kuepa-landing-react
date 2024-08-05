import React from 'react';
import kuepaLogo from '../../assets/icons/kuepaLogo.svg'
import footerLogos from '../../assets/icons/footerLogos.svg'
import instagramLogo from '../../assets/icons/instagramLogo.svg'
import facebookLogo from '../../assets/icons/facebookLogo.svg'
import tiktokLogo from '../../assets/icons/tiktokLogo.svg'
import linkedInLogo from '../../assets/icons/linkedInLogo.svg'
import "./footer.css";;

const Footer = () => {
  const handleScroll = (params) => {
    let element = document.getElementById(params?.id);
    if (element) {
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - params?.offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }
  return (
    <div className={`mobile_footer_container`}>
      <div className={`main_component`}>
        <div className={`top_icon`}>
          <img src={kuepaLogo} alt='' width={'200px'} height={'57px'} />
        </div>
        <div className={`text_container`}>
          <div className={`custom_text_bold`}
            onClick={() => handleScroll({ id: 'our_programs', offset: -160 })}
          >
            Nuestros programas
          </div>
          <div className={`custom_text`}>
            Técnico Laboral en Auxiliar Administrativo
          </div>
          <div className={`custom_text`}>
            Técnico Laboral en Mercadeo y Ventas
          </div>
          <div className={`custom_text`}>
            Bachillerato semipresencial
          </div>
          <div className={`custom_text`}>
            Bachillerato presencial
          </div>
        </div>
        <div className={`text_container`}>
          <div className={`custom_text_bold`}
            onClick={() => handleScroll({ id: 'methodology', offset: 70 })}
          >
            Metodología
          </div>
          <div className={`custom_text_bold`}
            onClick={() => handleScroll({ id: 'blogs', offset: -50 })}
          >
            Blog Kueparlantes
          </div>
          <div className={`custom_text_bold`}>
            <a href="/legal" target="_blank" rel="noreferrer" aria-label='legal'>
              Políticas de privacidad
            </a>
          </div>
          <div className={`custom_text_bold`}>
            <a href='https://docs.google.com/forms/d/1HWLQ7HezUhg8-UjBi4JSG-iPxfhRKUfBHcPFapuXgbQ/prefill' aria-label='docs'>
              PQRS
            </a>
          </div>
        </div>
        <div className={`custom_text_bold`} style={{ fontWeight: '500' }}>
          Síguenos en:
        </div>
        <div className={`network_container`}>
          <a href={`https://www.instagram.com/kuepaedutech/`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='isntagram'>
            <div className={`icon_container`}>
              <img src={instagramLogo} alt='' width={'24px'} height={'24px'} />
            </div>
          </a>
          <a href={`https://www.facebook.com/kuepaedutech`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='facebook'>
            <div className={`icon_container`}>
              <img src={facebookLogo} alt='' width={'24px'} height={'24px'} />
            </div>
          </a>
          <a href={`https://www.tiktok.com/@kuepaedutech?`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='tiktok'>
            <div className={`icon_container`}>
              <img src={tiktokLogo} alt='' width={'24px'} height={'24px'} />
            </div>
          </a>
          <a href={`https://www.linkedin.com/company/kuepa-edutech/mycompany/`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='linkedin'>
            <div className={`icon_container`}>
              <img src={linkedInLogo} alt='' width={'24px'} height={'24px'} />
            </div>
          </a>
        </div>
        <div className={`bottom_icon`}>
          <img src={footerLogos} alt='' width={'121px'} height={'74px'} />
        </div>
      </div>
      <div className={`bottom_container`}>
        Copyright 2024. Todos los derechos reservados.
      </div>
    </div>
  );
};

export default Footer;
