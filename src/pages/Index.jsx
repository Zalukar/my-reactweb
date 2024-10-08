import React from 'react'
import myPhoto from './components/images/myPhoto.png'

function Index() {
  return (
    <div id="content">
            <div id="header">
                <div id="introduction">
                    <h1>Victor Manuel Ardila B.</h1>
                    <h3>Estudiante:</h3>
                    <p>Ingenieria de sistemas - disponibilidad completa </p>
                </div>
                <div class="photoDiv">
                    <div id="photo">
                        <img id="myPhoto" alt='' src={myPhoto}/>
                        <div id="secretDiv">estoy de cabeza c:</div>
                    </div>
                </div>
            </div>
            <div id="Todo">
                <div id="skills">
                    <div id="keySkills">
                        <h2>Aptitudes clave:</h2>
                        <p>-Git [Git Bash,GitHub]</p>
                        <p>-JavaScript [Node.js]</p>
                        <p>-HTML</p>
                        <p>-Css</p>
                        <p>-Java</p>
                        <p>-Python</p>
                        <p>-Hardware & Software Avanzado</p>
                        <p>-Facilidad de aprendizaje</p>
                    </div>
                    <div id="languages">
                        <h2>Idiomas:</h2>
                        <p>-Ingles - [Avanzado]</p>
                        <p>-Español - [Nativo]</p>
                    </div>
                </div>
                
                <div id="exp">
                    <div id="exp1">
                        <h1>Experiencia</h1>
                        <h2>[2021] - [2023]</h2>
                        <h3>Instalación de red local • Instalación de software empresarial •  Mantenimiento de Redes y ordenadores</h3>
                        <p>- Encargado de la planificación y elaboración de la red local en  la empresa “Jamar”, así como el mantenimiento de los  equipos.</p> 
                        <p>- Instalación de software empresarial, más configuración de la  base de datos con los datos clínicos de los pacientes.</p>
                    </div>
                    <div id="exp2">
                        <h2>Independiente:</h2>
                        <h3>Mantenimiento de hardware • Mantenimiento de software •  Consultor informático</h3>
                        <p >-Reparación y mantenimiento de hardware avanzado, tanto en  portátiles como en computadores de mesa  </p> 
                        <p>- Conocimientos en Windows y linux</p>
                        <span id="finalMargin"> </span>
                    </div>
                </div>
            </div>
          </div>
  )
}

export default Index;