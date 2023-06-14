import React from 'react'
import { useSelector } from 'react-redux'

function Landing() {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  return (
    <div>
        {userInfo.name}<br/>
        {userInfo.address}
    </div>
  )
}

export default Landing