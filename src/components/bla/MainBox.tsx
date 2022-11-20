import React from 'react'
import './bla.scss'; 
import {LeftBar} from '../../leftBar/LeftBar'

type PlaylistProps = {
  id: number;
  nome: string;
  img: string;
};

export const playlists: PlaylistProps[] = [
  {
    id: 1,
    nome: 'Daily mix 1',
    img: 'https://github.com/IsaacLouzeiro/spotify-vue-clone/blob/master/assets/img/daily.png?raw=true'
  },
  {
    id: 2,
    nome: 'Daily mix 2',
    img: 'https://github.com/IsaacLouzeiro/spotify-vue-clone/blob/master/assets/img/daily2.png?raw=true'
  },
  {
    id: 3,
    nome: 'Daily mix 3',
    img: 'https://github.com/IsaacLouzeiro/spotify-vue-clone/blob/master/assets/img/daily3.png?raw=true'
  },
  {
    id: 4,
    nome: 'Daily mix 4',
    img: 'https://github.com/IsaacLouzeiro/spotify-vue-clone/blob/master/assets/img/daily4.png?raw=true'
  },
  {
    id: 5,
    nome: 'Daily mix 5',
    img: 'https://github.com/IsaacLouzeiro/spotify-vue-clone/blob/master/assets/img/daily5.png?raw=true'
  },
  {
    id: 6,
    nome: 'Daily mix 6',
    img: 'https://github.com/IsaacLouzeiro/spotify-vue-clone/blob/master/assets/img/daily6.png?raw=true'
  }
  
];


const MainBox = () => {

  return (
    <div id="app" className="d-flex flex-column">
      <div id="principal" className="d-flex">

<LeftBar/>


 <div id="feed" className="w-100"> 
 <nav id="topNav" className="d-flex justify-content-between align-items-center px-4 py-2">
          <div id="arrowMenu">
            <button aria-hidden="true" aria-label="Voltar" disabled>
              <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
              </svg>
            </button>

            <button aria-hidden="true" aria-label="Avancar" disabled>
              <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
              </svg>
            </button>
          </div>

          <div id="btnTopNav" className="d-flex">
            <button id="upgrade" className="me-2">
              Sign Up
            </button>

            <div className="dropdown ms-3" id="btnUsuario">
              <button
                className="btn btn-secondary dropdown-toggle"
                aria-expanded="false">
                <div className="imgUsuario bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </div>
                 Sarah L
              </button>
     
            </div>
          </div>
        </nav>



  <section id="feedHeader">

  <ul id="playlistsRecentes" className="mb-5">
  {playlists.map((val)=>(

    <li v-for="playlist in playlists"key={val.id}>
      <img src={val.img} alt="" />
      <span className="fw-semibold ms-3 me-auto">{val.nome}</span>
      <button type="button" className="btn me-3">
        <svg role="img" height="24" width="24" viewBox="0 0 24 24">
          <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
        </svg>
      </button>
    </li>
))}
  </ul>

</section>

 </div>
 </div>





 <div id="audioBar" className="p-3 d-flex justify-content-between">
    <div id="musicaPlay"></div>

    <div id="caixaCentral" className="d-flex flex-column align-items-center">
      <div id="caixaSetas" className="d-flex align-items-center">    
        <button type="button" className="icones aleatorio"><svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg></button>

        <button type="button" className="icones anterior"><svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg></button>

        <button type="button" className="btn playPause"><svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></button>

        <button type="button" className="icones proximo"><svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg></button>

        <button type="button" className="icones repetir"><svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path></svg></button>
      </div>

      <div id="barraDeProgresso"><small>00:00</small><input type="range"/><small>00:00</small></div>
    </div>

    <div id="configAudio" className="d-flex align-items-center">
      <button type="button" className="icones legenda"><svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path></svg></button>
      <button type="button" className="icones lista"><svg role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path></svg></button>
      <button type="button" className="icones outrosDispositivos"><svg role="img" height="16" width="16" aria-label="Conectar a um dispositivo" viewBox="0 0 16 16"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button>

      <div id="volume">
        <button type="button" className="icones outrosDispositivos"><svg role="presentation" height="16" width="16" aria-label="Volume médio" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 000-8.474v1.65a2.999 2.999 0 010 5.175v1.649z"></path></svg></button>
        <input type="range"/>
      </div>
    </div>
</div>





    </div>
  )
}

export default MainBox