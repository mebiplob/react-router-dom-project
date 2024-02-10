import React, { useEffect, useState } from 'react'
function Github() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://api.github.com/users/mebiplob`)
    .then((res) => res.json())
    .then((res) => setData(res))
  }, []
  )


  return (
    <>
    <div className='flex'>
      <div><img src={data.avatar_url} alt="" /></div>
      <div className='p-3'>
        <h3 className='text-3xl text-left mb-2'>Username : {data.name}</h3>
        <h3 className='text-left'>Follwers : {data.followers}</h3>
      </div>
    </div>
    </>
  )
}

export default Github
