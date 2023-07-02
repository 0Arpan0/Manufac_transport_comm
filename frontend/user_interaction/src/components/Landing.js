import React from 'react'
import { useSelector } from 'react-redux'
import ManFac from './ManFac'
import Transporter from './Transporter'

function Landing() {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    console.log(userInfo)
  return (
    <div>
    {userInfo.type === "manufacturer" ? (
      <ManFac/>     
  ):(<Transporter/>)}
  </div>
  )
}

export default Landing