import React, {useEffect} from 'react'
import nodeJs from './components/images/nodejs.png'
import html from './components/images/html.png'

function Cer()  {
  useEffect (() => {
    const 
    btnR = document.querySelector(".btnR"),
    btnL = document.querySelector(".btnL"),
    slidersec = document.querySelectorAll(".slidersel");

    window.onload = function() {
        btnL.style.backgroundColor = '#fff';
      };

btnL.addEventListener("click",e=> moveToLeft());
btnR.addEventListener("click",e=> moveToRight());

function moveToRight() {
    slidersec.forEach(slide => {
        slide.style.transform = "translateX(-100%)";
        if (slide.style.transform === "translateX(-100%)") {
            btnR.style.backgroundColor = '#fff';
            btnL.style.backgroundColor = '';
        }
    });
}


function moveToLeft() {
    slidersec.forEach(slide => {
        slide.style.transform = "translateX(0%)";
        if (slide.style.transform === "translateX(0%)") {
            btnL.style.backgroundColor = '#fff';
            btnR.style.backgroundColor = '';
        }
    });
}


  }, []);
  return (
    <div id="content">
    <div id="Carrusel">
        <div id="containerSec">
                <section class="slidersel"><img src={nodeJs} alt=''/></section>
                <section class="slidersel"><img src={html} alt=''/></section>
            </div>
        </div>
        <div>
            <div class="btnL">&lt;</div>
            <div class="btnR">&gt;</div>
        </div>
    </div>
  )
}

export default Cer;
