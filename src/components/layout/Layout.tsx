import React from 'react'
import {LeftBar} from '../../leftBar/LeftBar'
import { Content } from '../content/Content'
import { Container, MainContent } from './styles'

export const Layout:React.FC = () => {
    document.title = ('Spotify')

  return (
<Container>
<MainContent>
<LeftBar/>
<Content/>
                                                
</MainContent>
<h3>new playlist +</h3>
    </Container>
  )
}

