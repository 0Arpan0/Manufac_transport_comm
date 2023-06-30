import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import ManFac from './ManFac'

function Landing() {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    console.log(userInfo)
  return (
    <div>
    {userInfo.type==="manufacturer" ? (
        <ManFac/>
  ):(<div>jhbs</div>)}
  </div>
  )
}

export default Landing