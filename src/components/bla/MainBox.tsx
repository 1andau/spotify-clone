import React from 'react'
import Bla from './bla';
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
                Log in
              </button>
     
            </div>
          </div>
        </nav>








 </div>

</div>



    </div>
  )
}

export default MainBox