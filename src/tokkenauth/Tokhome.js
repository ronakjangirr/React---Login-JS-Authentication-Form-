import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Tokhome () {
  let navigate =useNavigate();
  
  useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigate('/')
    }
  },[])

  function deleteToken(){
    localStorage.removeItem('token')
  } 
    return (
    <>
      <h1>Tokken Home Page</h1>
      <button onClick={deleteToken}>Logout</button>
    </>
  )
}

export default Tokhome;
