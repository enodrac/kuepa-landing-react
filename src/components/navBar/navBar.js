import React, { useState } from 'react';

import "./navBar.css";
import arrowDown from '../../assets/icons/arrowDown.svg'
import kuepaWhiteLogo from '../../assets/icons/kuepaWhiteLogo.svg'
import burgerIcon from '../../assets/icons/burgerIcon.svg'

const NavBar = () => {

  const [data, setData] = useState({})

  const handleClickOutside = (action) => {
    updateData(action)
    window.addEventListener('click', handleClick)
  }

  const handleClick = (event) => {
    if (!event?.classList[0]?.includes('clickable')) {
      updateData({ ourPrograms: false })
      window.removeEventListener('click', handleClick)
    }
  }

  const updateData = (params) => {
    setData((prev) => ({ ...prev, ...params }))
  }

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
    <div className={`mobile_nav_bar_container`}>
      <div className={`logo`}>
        <img src={kuepaWhiteLogo} alt='' width={'116px'} height={'32px'} />
      </div>
      <div className={`burger_icon`}
        onClick={() => updateData({ burger: data?.burger ? false : true })}
      >
        <img src={burgerIcon} alt='' width={'24px'} height={'24px'} />
      </div>
      {data?.burger ?
        <div className={`burger_container`}>
          <div className={`items_container`}>
            <div className={`clickable animated_text_with_bar bottom`}
              onClick={() => handleClickOutside({ ourPrograms: data?.ourPrograms ? false : true })}
            >
              Nuevos programas
              <img src={arrowDown} alt="" width={"25px"} height={"24px"} />
            </div>
            {data?.ourPrograms ?
              <div className={`clickable our_programs`}>
                <div className={`animated_text_with_bar right`}
                  onClick={() => handleScroll({ id: 'our_programs', offset: -160 })}
                >
                  Técnicos laborales
                </div>
                <div className={`animated_text_with_bar right`}
                  onClick={() => handleScroll({ id: 'our_programs', offset: -160 })}
                >
                  Bachillerato acelerado
                </div>
              </div>
              : null}
            <div className={`animated_text_with_bar right`}
              onClick={() => handleScroll({ id: 'already_student', offset: 70 })}
            >
              Soy estudiante
            </div>
            <div className={`animated_text_with_bar right`}
              onClick={() => handleScroll({ id: 'blogs', offset: -50 })}
            >
              Blog
            </div>
            <div className={`animated_text_with_bar right`}
              onClick={() => handleScroll({ id: 'platform', offset: 90 })}
            >
              Plataforma educativa
            </div>
          </div>
          <div className={`custom_button`}>
            <div className={`inner_text`}>
              Estudia en Kuepa
            </div>
          </div>
        </div>
        : null}
    </div>
  );
};

export default NavBar;
