import React, { useEffect, useState } from 'react';
// import methodologyM1 from '../../assets/icons/methodologyM1.svg'
import methodologyM1 from '../../assets/icons/facebook.png'
// import methodologyM2 from '../../assets/icons/methodologyM2.svg'
import methodologyM2 from '../../assets/icons/facebook.png'
// import methodologyM3 from '../../assets/icons/methodologyM3.svg'
import methodologyM3 from '../../assets/icons/facebook.png'
// import methodologyM4 from '../../assets/icons/methodologyM4.svg'
import methodologyM4 from '../../assets/icons/facebook.png'

import "./methodology.css";;

const Methodology = () => {
  let [data, setData] = useState(0)
  let list = [methodologyM4, methodologyM1, methodologyM2, methodologyM3, methodologyM4, methodologyM1]

  useEffect(() => {
    setTimeout(() => {
      let methodoly_custom_carrousel = document.getElementById('methodoly_custom_carrousel')
      if (methodoly_custom_carrousel) {
        methodoly_custom_carrousel.addEventListener('scroll', detectScroll)
      }
    }, 1000);
  }, [])

  const detectScroll = () => {
    let scroll = document.getElementById('methodoly_custom_carrousel')
    setData(Math.floor(scroll?.scrollLeft / ((scroll.scrollWidth - scroll.offsetWidth) / 3.5)))
  }

  const handleScroll = (offset) => {
    let scroll = document.getElementById('methodoly_custom_carrousel')
    if (scroll) {
      scroll.scrollLeft = offset * ((scroll.scrollWidth - scroll.offsetWidth) / 3)
    }
  }


  return (
    <div className={`mobile_methodology_container`}>
      <div className={`title`}>
        Metodología
      </div>
      <div className={`subtitle`}>
        <div className={`top`}>
          La metodología Kuepa combina tecnología de punta, modelos pedagógicos contemporáneos y análisis de datos para lograr la combinación de calidad y asequibilidad que necesitas en tu formación.
        </div>
        <div className={`bottom`}>
          Aquí te contamos las 4 claves de nuestro modelo académico:
        </div>
      </div>
      <div id={`methodoly_custom_carrousel`} className={`methodoly_custom_carrousel`}>
        {list?.map((item, index, self) =>
          <div className={`${index === 0 || index === self?.length - 1 ? 'ignored' : 'methodology_card'} ${data === index - 1 ? 'active' : ''}`}
            onClick={() => handleScroll(index === 0 ? self?.length - 1  : index === self?.length - 1 ? 0 : index - 1)}
          >
            <img className={`background_img`} src={item} alt='' />
          </div>
        )}
      </div>
      <div className={`carrousel_navigation`}>
        <div className={`methodology_navigation ${data === 0 ? 'active' : ''}`}
          onClick={() => {
            handleScroll(0)
          }}
        />
        <div className={`methodology_navigation ${data === 1 ? 'active' : ''}`}
          onClick={() => {
            handleScroll(1)
          }}
        />
        <div className={`methodology_navigation ${data === 2 ? 'active' : ''}`}
          onClick={() => {
            handleScroll(2)
          }}
        />
        <div className={`methodology_navigation ${data === 3 ? 'active' : ''}`}
          onClick={() => {
            handleScroll(3)
          }}
        />
      </div>
    </div>
  );
};

export default Methodology;
