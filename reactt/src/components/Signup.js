import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'


export default function Signup() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate=useNavigate()
const handleSubmit=()=>{
    axios.post('http://localhost:3001/users',{
        name,email,password
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    navigate('/login')

}
    return (

        <div className='signup'>
            
<div className='sig'>
<form onSubmit={handleSubmit}>
    <h3 className='up'><i>SIGN-UP</i></h3>
<label>Name:</label><br></br>
<input type='text'value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
<label>Email:</label><br></br>
<input type='email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
<label>Password:</label><br></br>
<input type='password'value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
<br></br>
<button id='sub' type='submit' >Sign up</button>

</form>

        </div>


        </div>
    )
}



