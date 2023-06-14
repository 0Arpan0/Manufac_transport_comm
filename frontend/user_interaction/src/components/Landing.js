import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

function Landing() {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
  return (
    <div>
    {userInfo.type==="manufacturer" ? (
        <div>
            this is userinfo page            
        </div>  
  ):(<div>jhbs</div>)}
  </div>
  )
}

export default Landing