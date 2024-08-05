import React from 'react';
// import calle72 from '../../assets/icons/calle72.svg'
import calle72 from '../../assets/icons/facebook.png'
// import calle85 from '../../assets/icons/calle85.svg'
import calle85 from '../../assets/icons/facebook.png'
import "./headquarters.css";;

const Headquarters = () => {
  return (
    <div className={`mobile_headquarters_container`}>
      <div className={`title`}>
        Nuestras sedes
      </div>
      <div className={`cards_container`}>
        <div id={`left_card`} className={`custom_card normal`}>
          <img className={`background`} src={calle72} alt='' width='535px' height='320px' />
          <div className={`name`}>
            Sede calle 72
          </div>
          <div className={`direction`}>
            Calle 72 #13-34, Bogotá - Colombia
          </div>
        </div>
        <div id={`right_card`} className={`custom_card normal`}>
          <img className={`background`} src={calle85} alt='' width='535px' height='320px' />
          <div className={`name`}>
            Sede Calle 85
          </div>
          <div className={`direction`}>
            Ac. 85 #19b-02, Bogotá - Colombia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headquarters;
