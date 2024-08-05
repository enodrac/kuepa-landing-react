import React, { useEffect, useRef, useState } from 'react';
import ketKuepaEduTechLogoV2 from '../../assets/icons/ketKuepaEduTechLogoV2.png'
import "./whoWeAre.css";;

const WhoWeAre = () => {
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
    <div ref={ref} className={`mobile_who_we_are_container ${animate ? 'fadeFromBottom' : ''}`}>
      <div className={`container ${animate ? 'fadeFromBottom' : ''}`}>
        <div className={`logo`}>
          <img src={ketKuepaEduTechLogoV2} alt='' width='312px' height='53px' />
        </div>
        <div className={`top_text`}>
          ¿Quiénes somos?
        </div>
        <div className={`bottom_text`}>
          <span className={'heavy'}>Kuepa</span> es una institución educativa, parte de <span className={'heavy'}>Kuepa Edutech</span>, una <span className={'heavy'}>EdTech</span> colombiana entre las más influyentes de la región, prueba de ello es la selección hecha por la revista <span className={'special'}>Time</span> como una de las <span className={'heavy'}>250 EdTech más importantes en el mundo en 2.023 en la posición 68</span>. Además, la única colombiana en el listado.
          <div>
            Si quieres saber más
          </div>
        </div>
        <div className={`custom_button`}>
          <div className={`inner_text`}>
            Visita Kuepa Edutech
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
