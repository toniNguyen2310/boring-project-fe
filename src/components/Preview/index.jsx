import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchDataById } from '../../Service/api'

const index = () => {
  const [source, setSource]= useState(null)

  let location = useLocation()
  const idLocation = location?.pathname.split('/')[2]
  const fetchDataPreview = async () => {
    let data = { id: idLocation }
    console.log(data)
    const res = await fetchDataById(data)
    if (res && res.data) {
      let code = JSON.parse(res.data.board)
      setSource(JSON.parse(res.data.board))
      document.body.innerHTML=code
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchDataPreview()
  }, [idLocation])

  return (
    <>
      { !source &&
        <div id='publish'>
          <p> LOADING...</p>
          {/* {source} */}
        </div>}
    </>
  )
}

export default index