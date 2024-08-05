import React, { useEffect, useRef, useState } from 'react';
import bachilleratosMobile from '../../assets/icons/bachilleratosMobile.png'
import tecnicosLaboralesMobile from '../../assets/icons/tecnicosLaboralesMobile.png'
import "./ourPrograms.css";;

const OurPrograms = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const [animate, setAnimate] = useState(false);

  function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }

  useEffect(() => {
    if (isVisible) {
      setAnimate(true)
    }
  }, [isVisible])

  return (
    <div ref={ref} id={`our_programs_container`} className={`mobile_our_programs_container ${animate ? 'fadeFromBottom' : ''}`}>
      <div className={`main_text`}>
        Kuepa es una institución educativa certificada que implementa programas educativos diseñados para mejorar rápidamente la empleabilidad de los jóvenes de América Latina.
      </div>
      <div className={`test`}>
        ENODRAC -
      </div>
      <div className={`text_container`}>
        Nuestros programas
      </div>
      <div className={`programs_container`}>
        <div className={`program`}>
          <div className={`background_container`}>
            <img src={bachilleratosMobile} alt="" style={{ marginTop: '-35px' }} />
          </div>
          <div className={`name_description_container`}>
            <div className={`name_container`}>
              Bachillerato acelerado
            </div>
            <div className={`description_container`}>
              <div className={`text`}>
                El mejor programa de bachillerato por ciclos del país por 3 motivos:
              </div>
              <div className={`text`}>
                1. Somos expertos en modalidad virtual
              </div>
              <div className={`text`}>
                2. Excelentes resultados Saber 11 en los últimos 5 años
              </div>
              <div className={`text`}>
                3. Formación en habilidades para el trabajo y la vida.
              </div>
            </div>
            <div className={`custom_button`}>
              <div className={`inner_text`}>
                Conoce más
              </div>
            </div>
          </div>
        </div>
        <div className={`program`}>
          <div className={`background_container`}>
            <img src={tecnicosLaboralesMobile} alt="" style={{ marginTop: '-15px' }} />
          </div>
          <div className={`name_description_container`}>
            <div className={`name_container`}>
              Técnicos laborales
            </div>
            <div className={`description_container`}>
              <div className={`text`}>
                Programas flexibles en las áreas de tecnología, administración, mercadeo y turismo con práctica remunerada en más de 400 empresas en todo el país. Con certificaciones adicionales de industria y academia.
              </div>
            </div>
            <div className={`custom_button`}>
              <div className={`inner_text`}>
                Conoce más
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
