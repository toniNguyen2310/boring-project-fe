import { useRef } from 'react'
import './App.scss'
import styled from '@emotion/styled'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Container from './components/Container/Container'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import NotFound from './components/Layout/NotFound'
import Preview from './components/Preview'
import LayoutEdit from './components/Layout/LayoutEdit'
import Homepage from './components/Homepage/Homepage'
import Meme from './components/Meme/Meme'

function App() {
  const currentDrag = useRef(null)
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header/>
          <Layout />
        </>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <Homepage />
          )
        },
        {
          path: 'editor',
          element: (
            <>
              <AppContainer>
                <SideBar currentDrag={currentDrag}/>
                <Container currentDrag={currentDrag} />
              </AppContainer>
            </>
          )
        },
        {
          path: 'meme',
          element: (
            <>
              <Meme />
            </>
          )
        }
      ]
    },
    {
      path: '/preview/:id',
      element: (
        <>
          <LayoutEdit />
        </>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <Preview />
          )
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: calc( 100vh - 20px)
`


