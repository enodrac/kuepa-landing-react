import React, { useState } from 'react';
import Animator from '../../animator/animator';
import estudiantesMobile from '../../assets/icons/estudiantesMobile.png'
// import RegisterService from '@/services/kuepaServices/registerService';
import "./welcome.css";;

const Welcome = () => {
  let [data, setData] = useState({})
  // const registerService = new RegisterService()
  const [loading, setLoading] = useState(false)

  const handleUpdateData = (params) => {
    setData(prev => ({ ...prev, ...params }))
  }

  const handleSubmit = async () => {
    setLoading(true)

    let isVirtual
    let insertPanel = false
    let insertCRM = false
    if (window.location.pathname === "/bachillerato-virtual" || window.location.pathname === "/ingles" || window.location.pathname === "/ingles-corporativo") {
      isVirtual = true
    }
    else {
      isVirtual = false
    }


    const formData = {
      ...data,
      isVirtual,
      insertPanel,
      insertCRM,
    }

    // const register: any = await registerService.registerNewUserInProgram(formData)

    // if (register?.status === 200) {
    //   history.push(`/thank-you`, {
    //     Nombre: data.name
    //   });
    // } else {
    //   setLoading(false)
    //   alert("algo salio mal")
    // }
  }

  const handleOnChange = (e) => {
    let program = JSON.parse(JSON.stringify(data.program || {}))
    if (program.id_panel === "" && (window.location.pathname === "/bachillerato-presencial" || window.location.pathname === "/bachillerato")) {
      program = { id_panel: "43", id_crm: "bachillerato-plus-onsite" }
      setData({
        ...data,
        [e.target.name]: e.target.value,
        program: program,
        alliance_slug: "kuepa-colombia"
      })
    } else if (program.id_panel === "" && (window.location.pathname === "/bachillerato-virtual" || window.location.pathname === "/bachillerato-semipresencial")) {
      program = { id_panel: "43", id_crm: "bachillerato-plus-online" }
      setData({
        ...data,
        [e.target.name]: e.target.value,
        program: program,
        alliance_slug: "kuepa-colombia"
      })
    } else if (program.id_panel === "" && window.location.pathname === "/ingles") {
      program = { id_panel: "19", id_crm: "" }
      setData({
        ...data,
        [e.target.name]: e.target.value,
        program: program,
        alliance_slug: "kuepa-colombia"
      })
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
        alliance_slug: "kuepa-colombia"
      })
    }

  };
  return (
    <div className={`mobile_welcome_container`}>
      <div className={`animator_container`}>
        <Animator animation={{
          "frames": {
            "frame_0": {
              "0_296478_frame_element": {
                "left": "54px",
                "top": "-61px",
                "height": "269px",
                "width": "269px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "var(--primary)",
                "filter": "blur(100px)"
              },
              "1_027877_frame_element": {
                "left": "158px",
                "top": "147px",
                "height": "222px",
                "width": "222px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "#FF8A00",
                "filter": "blur(100px)"
              }
            },
            "frame_1": {
              "0_296478_frame_element": {
                "left": "-56px",
                "top": "147px",
                "height": "269px",
                "width": "269px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "var(--primary)",
                "filter": "blur(100px)"
              },
              "1_027877_frame_element": {
                "left": "146px",
                "top": "12px",
                "height": "222px",
                "width": "222px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "#FF8A00",
                "filter": "blur(100px)"
              },
            },
            "frame_2": {
              "0_296478_frame_element": {
                "left": "167px",
                "top": "116px",
                "height": "216px",
                "width": "216px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "var(--primary)",
                "filter": "blur(100px)"
              },
              "1_027877_frame_element": {
                "left": "12px",
                "top": "-40px",
                "height": "222px",
                "width": "222px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "#FF8A00",
                "filter": "blur(100px)"
              }
            },
            "frame_3": {
              "0_296478_frame_element": {
                "left": "95px",
                "top": "-17px",
                "height": "170px",
                "width": "170px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "var(--primary)",
                "filter": "blur(100px)"
              },
              "1_027877_frame_element": {
                "left": "42px",
                "top": "269px",
                "height": "197px",
                "width": "197px",
                "borderRadius": "100%",
                "transition": "all 3.3s ease-out",
                'WebkitTransitionDuration': 'all 3.3s ease-out',
                'MozTransitionDuration': 'all 3.3s ease-out',
                'msTransitionDuration': 'all 3.3s ease-out',
                "backgroundColor": "#FF8A00",
                "filter": "blur(100px)"
              },
            }
          },
          "time": "3300",
          "canvasHeight": "740px",
          "canvasWidth": "360px",
          "currentFrame": "frame_0"
        }} />
      </div>
      <div className={`initial_container`}>
        <div className={`text_container`}>
          <div className={`top_text`}>
            En <span className={`special_text`}>Kuepa</span> inicias tu camino profesional.
          </div>
          <div className={`bottom_text`}>
            Nuestros programas te preparan para encontrar el empleo de tus sueños.
          </div>
        </div>
        <div className={`container_ fade_from_bottom`}>
          <div className={`image_container`}>
            <img src={estudiantesMobile} alt="" />
          </div >
          <div className={`register_container`}>
            <div className={`form_title`}>
              ¡Regístrate ahora o llámanos al 601 917 7888!
            </div>
            <div className={`top_container`}>
              <div className={`custom_input_container`}>
                <div className={`custom_label`}>
                  Nombre
                </div>
                <div className={`custom_input`}>
                  <input
                    type={`text`}
                    name={`name`}
                    value={data?.name || ``}
                    onChange={(event) => handleUpdateData({ [event?.target?.name]: event?.target?.value })}
                    placeholder='Ej: Nombres y apellidos'
                  />
                </div>
              </div>
              <div className={`custom_input_container`}>
                <div className={`custom_label`}>
                  Correo
                </div>
                <div className={`custom_input`}>
                  <input
                    type={`text`}
                    name={`mail`}
                    value={data?.mail || ``}
                    onChange={(event) => handleUpdateData({ [event?.target?.name]: event?.target?.value })}
                    placeholder='tunombre@correoelectrónico.com'
                  />
                </div>
              </div>
              <div className={`custom_input_container`}>
                <div className={`custom_label`}>
                  Telefono
                </div>
                <div className={`custom_input`}>
                  <input
                    type={`text`}
                    name={`phone`}
                    value={data?.phone || ``}
                    onChange={(event) => handleUpdateData({ [event?.target?.name]: event?.target?.value })}
                    placeholder='Ej: 316 789 9876'
                  />
                </div>
              </div>
            </div>
            <div className={`bottom_container`}>
              <div className={`custom_input_container`}>
                <div className={`custom_label`}>
                  Programa
                </div>
                <div className={`custom_input`}>
                    <select
                    aria-label='select-program'
                      name={`program`}
                      onChange={handleOnChange}
                      style={{ color: data?.program ? '' : '#333639' }}
                    >
                      <option label='Seleccionar programa' selected disabled value="" style={{ color: '#333639' }}>Seleccionar programa</option>
                      <option label='Bachillerato Virtual' value='{"id_panel": "43", "id_crm":"bachillerato-plus-online"}'>Bachillerato Virtual</option>
                      <option label='Bachillerato Presencial' value='{"id_panel": "43", "id_crm":"bachillerato-plus-onsite"}'>Bachillerato Presencial</option>
                      <option label='Inglés' value='{"id_panel": "19", "id_crm":"ingles-intensivo" }'>Inglés</option>
                      <option label='PreIcfes' value='{"id_panel": "3", "id_crm": "preicfes" }'>PreIcfes</option>
                      <option label='Técnicos Laborales' value='{"id_panel": "44", "id_crm":"6279265fdb9de50f6405ad9d" }'>Técnicos Laborales</option>
                    </select>
                </div>
              </div>
              <div className={`register_button  ${loading ? 'disabled' : ''}`}
                onClick={() => !loading ? handleSubmit() : {}}
              >
                Regístrate ahora
              </div>
            </div>
            <div className={`terms_text`}>
              *Al hacer click, acepto los <span><a href='/legal-page'>términos y condiciones</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
