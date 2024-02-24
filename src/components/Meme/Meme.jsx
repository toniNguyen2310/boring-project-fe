import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

const Meme = () => {
  const [distanceX, distanceY] = [useRef(null), useRef(null)]
  const [distanceXFirst, distanceYFirst] = [useRef(null), useRef(null)]
  const cloneTextDrag = useRef(null)
  //On mouse Down when click inside image to get distance mouse to div cover image
  const divMouseDown =(e) => {
    let rect = document.getElementById('inputText').getBoundingClientRect()
    //Khoảng cách từ chuột tới màn hình window
    let mouseXtoWindow = e.clientX
    let mouseYtoWindow = e.clientY
    //Khoảng cách từ Div id 'inputText' tới màn hình window
    let distanceFromLeft = rect.left
    let distanceFromTop = rect.top
    // console.log(e.target)
    // console.log('Khoảng cách từ chuột tới div cover ảnh LEFT>>> ', Number(mouseXtoWindow) - Number(distanceFromLeft) )
    // console.log('Khoảng cách từ chuột tới div cover ảnh TOP >>> ', Number(distanceFromTop), distanceFromLeft )
    if (e.target.id === 'inputText') {
      distanceXFirst.current = Number(mouseXtoWindow) - Number(distanceFromLeft)
      distanceYFirst.current = Number(mouseYtoWindow) - Number(distanceFromTop)
    }
  }

  //on Drag start
  const dragTextStart = (e) => {
    // console.log(e.target)
    e.target.classList.add('isDragging')
    //remove ghost when drag column
    // e.dataTransfer.setDragImage(new Image(), 0, 0)
    e.target.style.opacity = '0'
    const newElement = document.createElement('div')
    newElement.setAttribute('id', 'inputTextDragging')
    cloneTextDrag.current = newElement
    document.getElementById('divCover').appendChild(cloneTextDrag.current)
    cloneTextDrag.current.style.opacity ='0'
  }

  //on drag over
  const dragTextOver = (e) => {
    cloneTextDrag.current.style.opacity ='1'
    let rect = document.getElementById('divCover').getBoundingClientRect()
    let distanceFromLeft = rect.left
    let distanceFromTop = rect.top
    //Khoảng cách từ chuột tới tới cửa sổ div cover
    distanceX.current = Number(e.pageX - distanceFromLeft - distanceXFirst.current)
    distanceY.current = Number(e.pageY - distanceFromTop - distanceYFirst.current )
    cloneTextDrag.current.style.left = distanceX.current + 'px'
    cloneTextDrag.current.style.top = distanceY.current + 'px'
  }


  //on Drag end
  const dragTextEnd = (e) => {
    const element = document.getElementById('inputTextDragging')
    element.remove()
    e.target.style.opacity = '1'
    e.target.style.left = distanceX.current + 'px'
    e.target.style.top = distanceY.current + 'px'
    cloneTextDrag.current = null
    distanceX.current = null
    distanceY.current = null
    distanceXFirst.current = null
    distanceYFirst.current = null
  }


  return (
    <MemeContainer >
      <SidebarMeme>
        <button>Thêm chữ</button>
      </SidebarMeme>
      <MainMeme >
        <ImageCover id='divCover' onMouseDown={(e) => divMouseDown(e)} onDragOver={(e) => dragTextOver(e)}>
          <img id='imageMeme' src="https://i.pinimg.com/564x/fd/be/85/fdbe856132156f9ddd2489145a96e103.jpg" alt="" />
          <InputText onDragStart={(e) => dragTextStart(e)} onDragEnd={(e) => dragTextEnd(e)} draggable id='inputText'></InputText>
          {/* <div id='inputTextDragging'></div> */}
        </ImageCover>
      </MainMeme>
    </MemeContainer>
  )
}

export default Meme


const MemeContainer = styled.div`
  display: flex;
  width: 100%;
`
const InputText = styled.div`
  height: 50px;
  width: 150px;
  // background: red;
  position: absolute;
  border: 4px dashed  red;
  top:0;
  left: 0;

`
const SidebarMeme = styled.div`
  width: 30%;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    width: 120px;
    height: 40px;
    border-radius: 20px;
    font-size: 20px; 
    cursor: pointer
  }

`
const MainMeme = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`
const ImageCover = styled.div`
  // background: blue;
  border: 2px solid #333;
  margin-top: 30px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  // z-index: -1;
  min-width: 600px;
  min-height: 600px;
`
