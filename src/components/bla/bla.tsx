import React from 'react';
import './bla.scss';

type BlaProps = {
  nome: string;
  img: string;
  id: number;
};

const Bla = ({ nome, id, img }: BlaProps) => {
  return (
    <>
     

<section id="feedHeader">

            <ul id="playlistsRecentes" className="mb-5">
              <li v-for="playlist in playlists"key={id}>
                <img src={img} alt="" />
                <span className="fw-semibold ms-3 me-auto">{nome}</span>
                <button type="button" className="btn me-3">
                  <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                    <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                  </svg>
                </button>
              </li>
            </ul>
</section>
{/* 
          <section className="feedPlaylist">

          <ul className="playlists">
            <li v-for="playlist in listaUm"key={id} >
              <img src={img}/>
              <button type="button" className="btn me-3"><svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></button>
              <span>{nome}</span>
            </li>
          </ul>
        </section> */}
{/* 
        <section className="feedPlaylist">

          <ul className="playlists">
            <li v-for="playlist in listaDois" key={id}>
              <img src={img}/>
              <button type="button" className="btn me-3"><svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></button>
              <span>{nome}</span>
            </li>
          </ul>
        </section>

        <section className="feedPlaylist">

          <ul className="playlists">
            <li v-for="playlist in listaTres"key={id}>
            <img src={img}/>
              <button type="button" className="btn me-3"><svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></button>
              <span>{nome}</span>
            </li>
          </ul>
        </section> */}
   
    </>
  );
};

export default Bla;
