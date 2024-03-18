import React, { useEffect, useState } from 'react';

export default function App(){

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/users").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  

  return(
    <>
    
    </>
  )
}