import styled from 'styled-components'; 

 //main left container 
export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  user-select: none;
  background: #121212;
  width: 300px;
  min-width: 194px;

`

export const LibraryPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
`

 // Playlist and library box
 export const LeftbarCollections = styled.div`
 margin-top: 25px;
 margin-left: 20px;
 user-select: none;

 height: 100%;
 > div + div {
   padding-top: 16px;
 }



`
export const LibraryItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  font-weight: 700;
  font-size: 17px;

  color: #c4c4c4;
  user-select: none;

  :hover {
    cursor: default;
    color: #fff;
  }

  :active {
    color: (0.2, '#a8a8a8')};
  }
`

export const Title = styled.span`
  display: block;
  font-weight: 100;
  font-size: 15px;
  letter-spacing: 1px;

  margin-bottom: 10px;

  color: #fff;
`

//Top bar collections 

export const TopBarCollections = styled.div`
display:flex; 
flex-direction: column; 
margin-bottom: 15px;
height: 225px;
`

interface MenuItemProps{
  active?: boolean
}

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  height: 42px;
  color: ${props => (props.active ? '#fff' : '#a8a8a8')};
  font-size: 20px;
  font-weight: bold;
  cursor: default;
  user-select: none;

  span {
    text-align: center;
    margin-left: 10px;
  }
  :hover {
    color: #edebeb;
  }
  :active {
    color: (0.2, '#a8a8a8')};
  }
  img{
    width:30px;
    padding-left: 20px; 

  }

`

export const Logo = styled.div`
display: flex;
align-items: center;
width: 60px; 
padding: 20px;

span{
  font-size: 1.5em;
  font-weight: bold;
}


`
