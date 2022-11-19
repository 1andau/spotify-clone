import React from 'react';
import { LeftbarCollections, Title, LibraryItem } from '../styles';
import { MenuItem } from '../styles';
import like from '../assets/likeSpoty.png'
import './library.scss';
import create from '../assets/Create.png'

export const Library: React.FC = () => {
  return (
    // <LeftbarCollections >
    //   <Title>Playlists</Title>

<>




<span>Playlists</span>

<div className="playlists">
<img src={create} alt="" />
<span> Create playlists</span>
</div>

<div className="playlists">
<img src={like} alt="" />
<span>Liked songs</span>
</div>
</>

    //   <LibraryItem > Top songs</LibraryItem>
    //   <LibraryItem>Liked Songs</LibraryItem>
    //   <LibraryItem>Albums</LibraryItem>
    //   <LibraryItem>Artists</LibraryItem>
    //   <LibraryItem>Podcasts</LibraryItem>
    // </LeftbarCollections>
  );
};
