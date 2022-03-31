import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/logout", {
            method: "GET",
            headers: {
				'x-access-token': localStorage.getItem('token'),
			},
          })
          .then(response => {return response.json()})
          .then(d => {
              if(d.status === 200) {
                localStorage.removeItem('token')
                navigate('/')
              }
          })
    }, [])


  return (
    <></>
  )
}

export default Logout