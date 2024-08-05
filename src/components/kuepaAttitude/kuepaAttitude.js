import React, { useEffect, useState } from 'react';
// import espirituJoven from '../../assets/icons/espirituJovenV2.svg'
import espirituJoven from '../../assets/icons/facebook.png'
// import transparencia from '../../assets/icons/transparenciaV2.svg'
import transparencia from '../../assets/icons/facebook.png'
// import profecionalismo from '../../assets/icons/profecionalismoV2.svg'
import profecionalismo from '../../assets/icons/facebook.png'
// import espírituEmprendedor from '../../assets/icons/espírituEmprendedorV2.svg'
import espírituEmprendedor from '../../assets/icons/facebook.png'
// import ejemplo from '../../assets/icons/ejemploV2.svg'
import ejemplo from '../../assets/icons/facebook.png'
// import eficiencia from '../../assets/icons/eficienciaV2.svg'
import eficiencia from '../../assets/icons/facebook.png'
import "./kuepaAttitude.css";;

const KuepaAttitude = () => {
  const [data, setData] = useState(0)
  let list = [
    {
      icon: espirituJoven,
      title: `Espíritu joven`,
      description: ` "One day you'll leave this world behind
              So live a life you will remember."`,
      name: `-The nights, Avicii`,
    },
    {
      icon: transparencia,
      title: `Transparencia`,
      description: `"Tell me your secrets and ask me your questions ."`,
      name: `-The scientist, Coldplay`,
    },
    {
      icon: profecionalismo,
      title: `Profesionalismo`,
      description: ` “So many times,
              it happens too fast
              You trade your passion for glory
              Don't lose your grip on the dreams of the past
              You must fight just to keep them alive”`,
      name: ` -Eye of the tiger, Survivor`,
    },
    {
      icon: espírituEmprendedor,
      title: `Espíritu Emprendedor`,
      description: `"Tonight is the night, we'll fight
              'til it's over
              So we put our hands up
              Like the ceiling can't hold us"`,
      name: `-Can't Hold Us,
              Macklemore & Ryan Lewis`,
    },
    {
      icon: ejemplo,
      title: `Ejemplo`,
      description: ` “Work it harder
              Make it better
              Do it faster
              Makes us stronger
              More than ever
              Hour after
              Our work is
              Never over”`,
      name: `-Harder, Better, Faster, Stronger,  Daft Punk`,
    },
    {
      icon: eficiencia,
      title: ` Eficiencia en el delivery`,
      description: `“La suerte es amiga de la acción”`,
      name: `-Casi q' me pierdo, Los Cafres`,
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      let custom_carrousel = document.getElementById('custom_carrousel')
      if (custom_carrousel) {
        custom_carrousel.addEventListener('scroll', detectScroll)
      }
    }, 1000);
  }, [])

  const detectScroll = () => {
    let scroll = document.getElementById('custom_carrousel')
    setData(Math.floor(scroll?.scrollLeft / ((scroll.scrollWidth - scroll.offsetWidth) / 5)))
  }

  const handleScroll = (offset) => {
    let scroll = document.getElementById('custom_carrousel')
    if (scroll) {
      scroll.scrollLeft = offset * ((scroll.scrollWidth - scroll.offsetWidth) / 5)
    }
  }

  return (
    <div className={`mobile_kuepa_attitude_container`}>
      <div className={`title`}>
        Actitudes Kuepa
      </div>
      <div className={`description`}>
        Las actitudes que destacan a nuestros estudiantes de Kuepa
      </div>
      <div className={`main_card_container`}>
        <div id={`custom_carrousel`} className={`custom_carrousel`}>
          {list?.map((item, index) =>
            <div id={`custom_card_${index}`} className={`attitude_card`}
              onClick={() => handleScroll(index)}
            >
              <div className={`top`}>
                <div className={`icon`}>
                  <img src={item?.icon} alt='' width='28px' height='28px' />
                </div>
                <div className={`text`}>
                  {item?.title}
                </div>
              </div>
              <div className={`middle`}>
                {item?.description}
              </div>
              <div className={`bottom`}>
                {item?.name}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`attitude_carrousel_navigation`}>
        <div className={`attitude_navigation ${data === 0 ? 'active' : ''}`}
          onClick={() => handleScroll(0)}
        />
        <div className={`attitude_navigation ${data === 1 ? 'active' : ''}`}
          onClick={() => handleScroll(1)}
        />
        <div className={`attitude_navigation ${data === 2 ? 'active' : ''}`}
          onClick={() => handleScroll(2)}
        />
        <div className={`attitude_navigation ${data === 3 ? 'active' : ''}`}
          onClick={() => handleScroll(3)}
        />
        <div className={`attitude_navigation ${data === 4 ? 'active' : ''}`}
          onClick={() => handleScroll(4)}
        />
        <div className={`attitude_navigation ${data === 5 ? 'active' : ''}`}
          onClick={() => handleScroll(5)}
        />
      </div>
    </div>
  );
};

export default KuepaAttitude;
