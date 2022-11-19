import React from 'react'

import {
  ContentContainer,
    Header,
    ArrowsSearchContainer,
    Profile,
    ContentBody,
    ContentTitle,
    SearchBar,
    SeachBarInput,
    Category,
    CategoryTitle,
    CategoryContainer,
    CategoryItens,
    FixedTopBar
} from './styles'; 


interface CatergoryItemProps {
    imgUrl: string
    title: string
    description: string
  }
  const CategoryItem: React.FC<CatergoryItemProps> = ({
    imgUrl,
    title,
    description
  }) => {
    return (
      <CategoryContainer>
    <img src="https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg" alt="image" />
        <b>{title}</b>
        <p>{description}</p>
      </CategoryContainer>
    )
  }


export const Content:React.FC = () => {
  return (
    <div>
<ContentContainer>
<Header>
        <FixedTopBar>
          <ArrowsSearchContainer>
            <div>
              {/* <MdKeyboardArrowLeft size={30} />
              <MdKeyboardArrowRight color={'#aaa'} size={30} /> */}
              icon
            </div>
            <SearchBar>
              {/* <FiSearch color={'#000'} size={17} /> */}
              search
              <SeachBarInput placeholder="Search"></SeachBarInput>
            </SearchBar>
          </ArrowsSearchContainer>
          
          <Profile>
          <img src="https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg" alt="image" />

            <span>Mateus Pandino</span>

            {/* <MdKeyboardArrowDown size={30} /> */}
          </Profile>
        </FixedTopBar>

        <ContentTitle>Home</ContentTitle>
      </Header>


      <ContentBody>
        <Category>
          <CategoryTitle>
            <span>Shortcuts</span>
            <div>
              {/* <MdKeyboardArrowLeft color={'#aaa'} size={30} />
              <MdKeyboardArrowRight size={30} /> */}
              ivcon
            </div>
          </CategoryTitle>

          
          <CategoryItens>    
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="lofi hip hop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ></CategoryItem>
          </CategoryItens>
        </Category>
        <Category>
          <CategoryTitle>
            <span>Recently Played</span>
            <div>
              {/* <MdKeyboardArrowLeft color={'#aaa'} size={30} />
              <MdKeyboardArrowRight size={30} /> */} icon
            </div>
          </CategoryTitle>
          <CategoryItens>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
            <CategoryItem
              imgUrl = "https://v1.popcornnews.ru/k2/news/canvas/577x320/upload/news/401163241352.jpg"
              title="The Weekend"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            ></CategoryItem>
          </CategoryItens>
        </Category>
        </ContentBody>
</ContentContainer>

    </div>
  )
}

