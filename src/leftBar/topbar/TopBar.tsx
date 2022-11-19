import React from 'react'; 
import { TopBarCollections, MenuItem, Logo } from "../styles";
import home from '../../leftBar/assets/home.png'
import browse from '../../leftBar/assets/browse.png'; 
import spotify from '../../leftBar/assets/spotify.png'
import search from '../../leftBar/assets/search.png'

export const TopBar: React.FC = () => {

  return (

    <TopBarCollections>
      <Logo>
      <img src={spotify} alt="" />
      <span>Spotify</span>
      </Logo>
      
      <MenuItem active>
     <img src={home} alt="" />
        <span>Home</span>
      </MenuItem>


      <MenuItem >
      <img src={search} alt="" />
        <span>Search</span>
      </MenuItem>

      <MenuItem>
      <img src={browse} alt="" />
        <span>Your Library</span>
      </MenuItem>

    </TopBarCollections>
  );
};

