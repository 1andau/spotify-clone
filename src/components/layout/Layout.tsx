import React from 'react'
import MainBox from '../bla/MainBox'
import { Content } from '../content/Content'
import { Container, MainContent } from './styles'

export const Layout:React.FC = () => {
    document.title = ('Spotify')

  return (
<Container>


<MainBox/> 


<MainContent>

{/* <Content/> */}
                                                
</MainContent>


    </Container>
  )
}

