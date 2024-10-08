import React from 'react'
import linkedin from './components/images/linkedin.png'
import whatsapp from './components/images/whatsapp.png'
import gmail from './components/images/gmail.png'

function BriefCase()  {
  return (
      <div id="content">
      <ul id="contact">
          <li id="linkedin"><a href="https://www.linkedin.com/in/victor-m-ardila/"><img src={linkedin} id="imgLinked" alt=""/><span id="spanLinked">Linkedin</span></a></li>
          <li id="whatsapp"><a href="https://wa.link/g6owbr"><img src={whatsapp} id="imgWhats" alt=""/><span id="spanWhats">WhatsApp</span></a></li>
          <li id="gmail"><a href="mailto:victor.ardila0205@gmail.com"><img src={gmail} id="imgGmail" alt=""/><span id="spanGmail">Gmail</span></a></li>
      </ul>
  </div>
  )
}

export default BriefCase;
