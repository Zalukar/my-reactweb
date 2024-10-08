import React from 'react'
import gitHub from './components/images/gitHub.png'
import Cv from './components/images/Cv.png'

function Contact()  {
  return (
    <div id="content">
            <ul id="contact">
                <li id="gitHub"><a href="https://github.com/Zalukar"><img src={gitHub} id="imgGit" alt=""/><span id="spanStack">GitHub</span></a></li>
                <li id="stackOverflow"><a href="files\HojaDeVidaESP.pdf" download="HojaDeVidaESP.pdf"><img src={Cv} id="imgLinked" alt=""/><span id="spanGit">Descarga mi Cv</span></a></li>
            </ul>
        </div>
  )
}

export default Contact;
