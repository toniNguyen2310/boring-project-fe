import styled from '@emotion/styled'
import '../../App.scss'
import { useEffect, useRef, useState } from 'react'
const Container = (props) => {
  const { currentDrag } =props
  const [isPreview, setIsPreview] = useState(false)
  const [dataStyle, setDataStyle] =useState([])
  const [edit, setEdit] =useState('')
  const listInit = useRef(null)
  const handleDragOver = (e) => {
    if (e.target.id === 'container') {
      currentDrag.current = e.target.id
    }
  }

  const displayStyleElement = (e) => {
    let list = window.getComputedStyle(e.target)
    // listInit.current = JSON.parse(JSON.stringify(list))
    // let styleArray = Array.from(list)
    setEdit(list.backgroundColor)
    setDataStyle(list)
    setIsPreview(true)
  }
  // onClick={(e) => setIsPreview(false)}
  useEffect(() => {
    document.getElementById('btnFirst').style.backgroundColor = edit
  }, [edit])
  return (
    <ContainerPreview id='container' onDragOver={(e) => handleDragOver(e)} >
      <button id='btnFirst' className='btn' onClick={(e) => displayStyleElement(e)} >button</button>
      <DivPreview style={ isPreview ? { top: '100px' } : { top: '-1000px' } }>
        {dataStyle.length > 0 && (
          <>
            <p>BG: <input type="text" value={edit} onChange={(e) => setEdit(e.target.value)} /></p>
            <p>Color: {dataStyle.color}</p>
            <p>PaddingTop: {dataStyle.paddingTop}</p>
            <p>border-radius: {dataStyle.borderRadius}</p>
          </>
        )}
      </DivPreview>
      {/* <img src="https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg" alt="" /> */}
    </ContainerPreview>
  )
}

export default Container

const ContainerPreview = styled.div`
  background: white;
  width: 80%;
  padding: 20px;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`
const DivPreview = styled.div`
  background: white;
  padding: 10px 10px;
  width: 500px;
  height: 400px;
  position: absolute;
  top: -10000px;
  border: 2px solid #333;
`