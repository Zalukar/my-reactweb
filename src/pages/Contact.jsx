import React, {useEffect} from 'react';
import gitHubImage from './components/images/gitHub.png';
import cvImage from './components/images/Cv.png';

function Contact() {

  useEffect(() => {
    const curriculum = document.getElementById("stackOverflow");
    const gitHub = document.getElementById("gitHub");
    const fontColorStack = document.getElementById("spanStack");
    const fontColorGit = document.getElementById("spanGit");
    const imgGit = document.getElementById("imgGit");

    // Eventos para el elemento 'curriculum'
    const handleCurriculumMouseOver = () => {
      curriculum.style.transform = "scale(1.15)";
      curriculum.style.backgroundColor = "#1a6b23db";
      curriculum.style.cursor = 'pointer';
      fontColorGit.style.color = "#D9D9D9";
    };

    const handleCurriculumMouseOut = () => {
      curriculum.style.transform = "scale(1)";
      curriculum.style.backgroundColor = "#D9D9D9";
      fontColorGit.style.color = "#000";
    };

    curriculum.addEventListener("mouseover", handleCurriculumMouseOver);
    curriculum.addEventListener("mouseout", handleCurriculumMouseOut);
    curriculum.addEventListener('click', () => {
      window.location.href = 'files/HojaDeVidaESP.pdf';
    });

    // Eventos para el elemento 'gitHub'
    const handleGitHubMouseOver = () => {
      gitHub.style.transform = "scale(1.15)";
      gitHub.style.backgroundColor = "#1a6b23db";
      gitHub.style.cursor = 'pointer';
      fontColorStack.style.color = "#D9D9D9";
      imgGit.style.filter = "invert(100%)";
    };

    const handleGitHubMouseOut = () => {
      gitHub.style.transform = "scale(1)";
      gitHub.style.backgroundColor = "#D9D9D9";
      fontColorStack.style.color = "#000";
      imgGit.style.filter = "invert(0%)";
    };

    gitHub.addEventListener("mouseover", handleGitHubMouseOver);
    gitHub.addEventListener("mouseout", handleGitHubMouseOut);
    gitHub.addEventListener('click', () => {
      window.location.href = 'https://github.com/Zalukar';
    });

    // Limpiar los eventos en la función de limpieza
    return () => {
      curriculum.removeEventListener("mouseover", handleCurriculumMouseOver);
      curriculum.removeEventListener("mouseout", handleCurriculumMouseOut);
      gitHub.removeEventListener("mouseover", handleGitHubMouseOver);
      gitHub.removeEventListener("mouseout", handleGitHubMouseOut);
    };
  }, []); // Dependencias vacías para ejecutar solo al montar

  return (
    <div id="content">
      <ul id="contact">
        <li id="gitHub">
          <a href="https://github.com/Zalukar" target="_blank" rel="noopener noreferrer">
            <img src={gitHubImage} id="imgGit" alt="" />
            <span id="spanStack">GitHub</span>
          </a>
        </li>
        <li id="stackOverflow">
          <a href="files/HojaDeVidaESP.pdf" download="HojaDeVidaESP.pdf">
            <img src={cvImage} id="imgLinked" alt="" />
            <span id="spanGit">Descarga mi Cv</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
