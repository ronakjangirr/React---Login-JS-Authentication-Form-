import { useState } from "react";
import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Tform() {
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');

    let navigate =useNavigate();

async function handlesubmit(e){
        e.preventDefault();            /// it will stop refresh the page when we click on the signin button
        console.log({email, password})
        await axios.post('https://reqres.in/api/login',{
            email: email,
            password:password
        }).then(result=>{
            console.log(result.data)
            localStorage.setItem('token',result.data.token)
            navigate('/tokhome')
        }).catch(error=>{
            console.log(error)
        })
    } 
    return (
        <>
        <h1>Tokken based form handling </h1>
        <h3>"email": "eve.holt@reqres.in" & "password": "cityslicka"</h3>
        <div>
    <form onSubmit={handlesubmit}>
    <lable>Email</lable>  
    <input type="email" value={email} onChange={(e)=> setEmail (e.target.value)} required/><br/>
    <lable>Password</lable>  
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>  
    <button type='submit'>Sign in</button>
    </form>  
    </div>
    </>
    
  )
}

export default Tform;