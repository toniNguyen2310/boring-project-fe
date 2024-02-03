import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const SideBar = (props) => {
  const { currentDrag } =props
  const [isEnd, setIsEnd]=useState(false)

  const handleDragStart =(e) => {
    console.log(e.target.nodeName)
  }

  const handleDragEnd =(e) => {
    if (currentDrag.current === 'container') {
      const newElement = document.createElement(`${e.target.nodeName}`)


      if (e.target.nodeName == 'IMG') {
        // create a new div element

        newElement.setAttribute('src', 'https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg')


      } else {

        // and give it some content
        const newContent = document.createTextNode(`create ${e.target.nodeName} success`)
        // add the text node to the newly created div
        newElement.appendChild(newContent)
      }

      // add the newly created element and its content into the DOM
      const currentContainer = document.getElementById(`${currentDrag.current}`)
      currentContainer.appendChild(newElement)
    }

    currentDrag.current = null
    setIsEnd(!isEnd)
  }


  return (
    <>
      <SideBarContainer>
        <a href="" onDragStart={(e) => handleDragStart(e)} onDragEnd={(e) => handleDragEnd(e)} draggable>button</a>
        <p onDragStart={(e) => handleDragStart(e)} onDragEnd={(e) => handleDragEnd(e)} draggable>This is p</p>
        <img onDragStart={(e) => handleDragStart(e)} onDragEnd={(e) => handleDragEnd(e)} draggable src="https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg" alt="" />

      </SideBarContainer>

    </>
  )
}

export default SideBar

const SideBarContainer = styled.div`
  background: #ffffff;
  // height: 100%;
  width: 20%;
  display:flex;
  // justify-content: space-between;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  
  
`
