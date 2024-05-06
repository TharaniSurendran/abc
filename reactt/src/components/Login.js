import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'


export default function Login() {

const[email,setEmail]=useState()
const[password,setPassword]=useState()
const[userList,setUserList]=useState([])
const[errorMessage,setErrorMessage]=useState()

const auth=useAuth()

const navigate=useNavigate()

useEffect(()=>{
    axios.get('http://localhost:3001/users')
      .then(res=>setUserList(res.data))
      .catch(err=>console.log(err))
},[])

const handleLogin=(e)=>{
  e.preventDefault()
const user=userList.find(x=>x.email === email)

  if(user){
    if(user.password === password){
      auth.login(user.name)
      navigate('/serviceConfirmation')
    }
    else{

      setErrorMessage('incorrect password')
    }
  }
  else{
    setErrorMessage('New user? please signup and login')
  }

}

  return (
    <div id='log'>
    <div className='login'>
<form onSubmit={handleLogin}>
  <h3 className='lo'><i>LOGIN</i></h3>
<label>Email:</label><br></br>
<input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
<br></br>
<label>Password:</label><br></br>
<input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
<br></br>
<button id='but'type='submit'>Login</button>

</form>



{errorMessage}
    </div>

    </div>

    
  )
}

