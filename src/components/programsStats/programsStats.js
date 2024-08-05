import React, { useEffect, useRef, useState } from 'react';

import "./programsStats.css";;

const ProgramsStats = () => {
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
    <div className={`mobile_programs_stats_container`}>
      <div className={`top_text_container`}>
        <div className={`top_text`}>
          Nuestros programas te enseñan todo lo que necesitas para ingresar al mundo laboral,
        </div>
        <div className={`bottom_text`}>
          a la vez que te permiten empezar tu tránsito a tu carrera profesional en convenio con la universidad más avanzada en la virtualidad en Colombia.
        </div>
      </div>
      <div ref={ref} className={`stats_container`}>
        <div className={`stat_item`}>
          <div className={`numbers`}>
            <div className={`${animate ? 'scroll_up_1' : ''}`} >
              <div>0</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div className={`text`}>de</div>
            <div className={`${animate ? 'scroll_up_2' : ''}`}>
              <div>0</div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
            </div>
          </div>
          <div className={`description`}>
            de nuestros practicantes son contratados por su empresa patrocinadora una vez terminan su fase productiva.
          </div>
        </div>
        <div className={`stat_item`}>
          <div className={`numbers`}>
            <div>+</div>
            <div className={`${animate ? 'scroll_up_1' : ''}`}>
              <div>0</div>
              <div>200</div>
              <div>500</div>
              <div>1.000</div>
              <div>1.200</div>
              <div>1.500</div>
              <div>2.000</div>
            </div>
          </div>
          <div className={`description`}>
            personas han tenido una práctica laboral patrocinada y certificada en los últimos 18 meses.
          </div>
        </div>
        <div className={`stat_item`}>
          <div className={`numbers`}>
            <div className={`${animate ? 'scroll_up_3' : ''}`}>
              <div>0</div>
              <div>5</div>
              <div>15</div>
              <div>25</div>
              <div>35</div>
              <div>45</div>
              <div>55</div>
              <div>65</div>
              <div>75</div>
            </div>
            <div>%</div>
          </div>
          <div className={`description`}>
            de nuestros egresados están trabajando o estudiando en solo 3 meses después de haber terminado sus estudios con nosotros.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsStats;
