import styled from '@emotion/styled'
import '../../App.scss'
const Container = (props) => {
  const { currentDrag } =props

  const handleDragOver = (e) => {
    if (e.target.id === 'container') {
      currentDrag.current = e.target.id
    }
  }
  return (
    <ContainerPreview id='container' onDragOver={(e) => handleDragOver(e)} >
      <a className='btn btn-primary' href="" >button</a>
      {/* <img src="https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg" alt="" /> */}
    </ContainerPreview>
  )
}

export default Container

const ContainerPreview = styled.div`
  background: white;
  // height: 100vh;
  width: 80%;
  padding: 20px;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
`