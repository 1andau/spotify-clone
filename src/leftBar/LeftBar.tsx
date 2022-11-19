import React from 'react'
import { Library } from './library/Library'
import Playlists from './playlists/Playlists'
import { Container, LibraryPlaylistContainer } from './styles'
import {TopBar} from './topbar/TopBar'

export const LeftBar:React.FC = () => {
  return (
<Container>
  <TopBar/>
  <LibraryPlaylistContainer>
    <Library/>
    <Playlists/>
  </LibraryPlaylistContainer>
</Container>


    )
}

