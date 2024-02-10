import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {
    userid,
    harry
} = useParams()    
  return (
    <div className="p-7 bg-black text-white text-3xl">
      Get User ID : {userid} {harry}
    </div>
  )
}

export default User