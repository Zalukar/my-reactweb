import React from 'react'
import nodeJs from './components/images/nodejs.png'
import html from './components/images/html.png'

function cer()  {
  return (
    <div id="content">
    <div id="Carrusel">
        <div id="containerSec">
                <section class="slidersel"><img src={nodeJs}/></section>
                <section class="slidersel"><img src={html}/></section>
            </div>
        </div>
        <div>
            <div class="btnL">&lt;</div>
            <div class="btnR">&gt;</div>
        </div>
    </div>
  )
}

export default cer;
