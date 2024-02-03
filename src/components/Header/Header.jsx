import styled from '@emotion/styled'
import { createData } from '../../Service/api'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleSaveSourceCode =async () => {
    // console.log()
    let data = {
      board: JSON.stringify(document.getElementById('container').outerHTML)
    }
    const res = await createData(data)
    if (res?.data?._id) {
      let idPreview = res.data._id
      navigate(`/preview/${idPreview}`)
    } else {
      console.log('error')
    }
  }
  return (
    <NavBarContainer>
      <span onClick={() => navigate('/')}>NAV BAR</span>
      <a href="editor">Editor</a>
      <a href="meme">Meme</a>
      {/* <button onClick={handleSaveSourceCode}>PUBLISH</button> */}
    </NavBarContainer>
  )
}

export default Header

const NavBarContainer = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  display:flex;
  justify-content: space-between;
  // padding: 0 10px;
`