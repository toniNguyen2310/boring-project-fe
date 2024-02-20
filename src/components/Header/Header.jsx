import styled from '@emotion/styled'
import { createData } from '../../Service/api'
import { useNavigate } from 'react-router-dom'
import twinkle1 from '../../assets/twinkle1.png'
import { HomeFilled, BulbFilled, HighlightFilled } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'


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
    // <NavBarContainer>
    //   {/* <span onClick={() => navigate('/')}>NAV BAR</span> */}
    //   <img src={twinkle1} alt="" />
    //   <a href="editor">Editor</a>
    //   <a href="meme">Meme</a>
    //   <button onClick={handleSaveSourceCode}>PUBLISH</button>
    // </NavBarContainer>
    <div className='header'>
      <NavLink to={'/'} className='header-logo'><img className='header-logo-img' src={twinkle1} alt="" /></NavLink>
      <div className='header-listBtn'>
        <NavLink to={'/'} className='header-a'><HomeFilled />  Trang chủ</NavLink>
        <NavLink to={'/editor'} className='header-a'><BulbFilled />Dựng Web</NavLink>
        <NavLink to={'/meme'} className='header-a'><HighlightFilled />Chế ảnh</NavLink>
      </div>
      <div className='login-btn' onClick={handleSaveSourceCode}>PUBLIC</div>
    </div>
  )
}

export default Header

const NavBarContainer = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  display:flex;
  justify-content: space-between;
  
`