import React, { useState } from 'react';
// import close from '../../assets/icons/close.svg'
import close from '../../assets/icons/facebook.png'
// import katrinAvatar from '../../assets/icons/katrinAvatar.svg'
import katrinAvatar from '../../assets/icons/facebook.png'
// import samuelAvatar from '../../assets/icons/samuelAvatar.svg'
import samuelAvatar from '../../assets/icons/facebook.png'
// import alisonAvatar from '../../assets/icons/alisonAvatar.svg'
import alisonAvatar from '../../assets/icons/facebook.png'
// import niniAvatar from '../../assets/icons/niniAvatar.svg'
import niniAvatar from '../../assets/icons/facebook.png'
// import jonathanAvatar from '../../assets/icons/jonathanAvatar.svg'
import jonathanAvatar from '../../assets/icons/facebook.png'
// import play from '../../assets/icons/play.svg'
import play from '../../assets/icons/facebook.png'
// import cuotes from '../../assets/icons/cuotes.svg'
import cuotes from '../../assets/icons/facebook.png'
import "./ourStories.css";;

const OurStories = () => {
  const [video, setVideo] = useState('')
  return (
    <div className={`mobile_our_stories_container`}>
      <div className={'title_container'}>
        <div className={'title'}>
          Nuestras historias
        </div>
        <div className={'subtitle'}>
          ¿Qué opinan nuestros estudiantes?
        </div>
      </div>
      <div className='scrolls_container'>
        <div className={`scroll animate`}>
          <div className={`item`}>
            <div className={`cuotes`}>
              <img src={cuotes} alt='' width='64px' height='51px' />
            </div>
            <div className={`text`}>
              "Gracias Kuepa por la oportunidad, y el crecimiento que me llevo. Ha aportado muchas cosas positivas, actualmente ya me gradué y me encuentro trabajando y lo mas importante es que estoy ejerciendo lo que estudie. "
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={katrinAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Katrin Moreno
                </div>
                <div className={`program`}>
                  Técnico Auxiliar administrativo
                </div>
              </div>
            </div>
          </div>
          <div className={`item clickeable`}
            onClick={() => setVideo('samuelVideo')}
          >
            <div className={`cuotes`}>
            </div>
            <div className={`text`}>
              <img src={play} alt='' width='100px' height='100px' />
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={samuelAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Samuel Poveda
                </div>
                <div className={`program`}>
                  Bachillerato
                </div>
              </div>
            </div>
          </div>
          <div className={`item`}>
            <div className={`cuotes`}>
              <img src={cuotes} alt='' width='64px' height='51px' />
            </div>
            <div className={`text`}>
              "Hay muchas oportunidades , tienen que salir y buscar otras opciones que les quiten menos tiempo, soy deportista de patinaje de alta velocidad y Kuepa me permitió estudiar y no descuidar mi deporte y llevar ambas en un mismo nivel ¡Gracias Kuepa!"
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={alisonAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Alison Cardozo
                </div>
                <div className={`program`}>
                  Virtual y deportista
                </div>
              </div>
            </div>
          </div>
          <div className={`item clickeable`}
            onClick={() => setVideo('niniVideo')}
          >
            <div className={`cuotes`}>
            </div>
            <div className={`text`}>
              <img src={play} alt='' width='100px' height='100px' />
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={niniAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Nini Castro
                </div>
                <div className={`program`}>
                  Técnico auxiliar administrativo
                </div>
              </div>
            </div>
          </div>
          <div className={`item`}>
            <div className={`cuotes`}>
              <img src={cuotes} alt='' width='64px' height='51px' />
            </div>
            <div className={`text`}>
              "Me impulso demasiado a seguir estudiando, es una excelente oportunidad de crecimiento laboral, personal y profesional. No era partidario de la virtualidad pero acá tienen alternancia de venir un día y compartir con mis compañeros”
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={jonathanAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Jonathan Niño
                </div>
                <div className={`program`}>
                  Mercadeo y Ventas
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`scroll animate last`}>
          <div className={`item`}>
            <div className={`cuotes`}>
              <img src={cuotes} alt='' width='64px' height='51px' />
            </div>
            <div className={`text`}>
              "Gracias Kuepa por la oportunidad, y el crecimiento que me llevo. Ha aportado muchas cosas positivas, actualmente ya me gradué y me encuentro trabajando y lo mas importante es que estoy ejerciendo lo que estudie. "
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={katrinAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Katrin Moreno
                </div>
                <div className={`program`}>
                  Técnico Auxiliar administrativo
                </div>
              </div>
            </div>
          </div>
          <div className={`item clickeable`}
            onClick={() => setVideo('samuelVideo')}
          >
            <div className={`cuotes`}>
            </div>
            <div className={`text`}>
              <img src={play} alt='' width='100px' height='100px' />
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={samuelAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Samuel Poveda
                </div>
                <div className={`program`}>
                  Bachillerato
                </div>
              </div>
            </div>
          </div>
          <div className={`item`}>
            <div className={`cuotes`}>
              <img src={cuotes} alt='' width='64px' height='51px' />
            </div>
            <div className={`text`}>
              "Hay muchas oportunidades , tienen que salir y buscar otras opciones que les quiten menos tiempo, soy deportista de patinaje de alta velocidad y Kuepa me permitió estudiar y no descuidar mi deporte y llevar ambas en un mismo nivel ¡Gracias Kuepa!"
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={alisonAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Alison Cardozo
                </div>
                <div className={`program`}>
                  Virtual y deportista
                </div>
              </div>
            </div>
          </div>
          <div className={`item clickeable`}
            onClick={() => setVideo('niniVideo')}
          >
            <div className={`cuotes`}>
            </div>
            <div className={`text`}>
              <img src={play} alt='' width='100px' height='100px' />
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={niniAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Nini Castro
                </div>
                <div className={`program`}>
                  Técnico auxiliar administrativo
                </div>
              </div>
            </div>
          </div>
          <div className={`item`}>
            <div className={`cuotes`}>
              <img src={cuotes} alt='' width='64px' height='51px' />
            </div>
            <div className={`text`}>
              "Me impulso demasiado a seguir estudiando, es una excelente oportunidad de crecimiento laboral, personal y profesional. No era partidario de la virtualidad pero acá tienen alternancia de venir un día y compartir con mis compañeros”
            </div>
            <div className={`user_container`}>
              <div className={`avatar`}>
                <img src={jonathanAvatar} alt='' width='32px' height='32px' />
              </div>
              <div className={`name_program`}>
                <div className={`name`}>
                  Jonathan Niño
                </div>
                <div className={`program`}>
                  Mercadeo y Ventas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {video?.length ?
        <div className={`custom_video_player`}>
          <div className={`content`}>
            <div className={`close_button`}
              onClick={() => setVideo('')}
            >
              <img src={close} alt='' width='16px' height='16px' />
            </div>
            <video src={video === 'niniVideo' ? 'https://d1lkn153fcyomr.cloudfront.net/mkNiBjkW9A0XpcDOxbeQ.mp4' : 'https://d1lkn153fcyomr.cloudfront.net/AtZJPsLvZTrSBAflSB1N.mp4'} controls playsInline />
          </div>
        </div>
        : null}
    </div>
  );
};

export default OurStories;
