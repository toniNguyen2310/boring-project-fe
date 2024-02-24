import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Basic } from '../../Utils/constant'
import { Bs0Circle } from 'react-icons/bs'


const SideBar = (props) => {
  const { currentDrag } =props
  const [isEnd, setIsEnd]=useState(false)

  // const createElement = (typeElement) => {

  // }

  const handleDragStart =(e) => {
    let htmlElement = e.target.getAttribute('datatype')
    // createElement(htmlElement)
  }

  const handleDragEnd =(e) => {
    if (currentDrag.current === 'container') {
      let target = e.target.innerHTML
      const newElement = document.createElement(target)
      const newContent = document.createTextNode(`create ${target} success`)
      newElement.appendChild(newContent)

      // if (target === 'html/button') {
      //   const newElement = document.createElement('a')
      //   // and give it some content
      //   const newContent = document.createTextNode('button')
      //   newElement.classList.add('btn')
      //   newElement.classList.add('btn-primary')
      //   // add the text node to the newly created div
      //   newElement.appendChild(newContent)
      //   // add the newly created element and its content into the DOM
      //   const currentContainer = document.getElementById(`${currentDrag.current}`)
      //   currentContainer.appendChild(newElement)
      // }else if(target = '')
      // const newElement = document.createElement(`${e.target.nodeName}`)


      // if (e.target.nodeName == 'IMG') {
      //   // create a new div element

      //   newElement.setAttribute('src', 'https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg')


      // } else {

      //   // and give it some content
      //   const newContent = document.createTextNode(`create ${e.target.nodeName} success`)
      //   // add the text node to the newly created div
      //   newElement.appendChild(newContent)
      // }
      const currentContainer = document.getElementById(`${currentDrag.current}`)
      currentContainer.appendChild(newElement)

    }

    currentDrag.current = null
    setIsEnd(!isEnd)
  }


  return (
    <>
      <SideBarContainer>
        <ElementCover>
          <div>BASIC</div>
          <div>
            <div>Heading</div>
            <div>Paragraph</div>
            <div>Button</div>
          </div>
        </ElementCover>
      </SideBarContainer>

    </>
  )
}

export default SideBar

const SideBarContainer = styled.div`
  background: #ffffff;
  width: 20%;
  display:flex;
  // justify-content: space-between;
  flex-direction: column;
  padding: 0 5px;
  gap: 10px;
`

const ElementCover =styled.div`

`
