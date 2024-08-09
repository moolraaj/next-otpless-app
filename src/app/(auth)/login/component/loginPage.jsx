'use client'
import React, { useState } from 'react'
import  { signIn } from 'next-auth/react'
function LoginPage() {
  let [user,setUser]=useState({
    email:'',
    password:''
  })

  const changeHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  let loginHandler=async()=>{
    let resp=await fetch('/api/auth/login',{
      method:'POST',
      body:JSON.stringify(user)
    })
    let data=await resp.json()
    if(data){
      await signIn('credentials',{
        email:user.email,
        password:user.password,
        callbackUrl:'/admin/dashboard',
        redirect:true
      })
    }
  }
  
  return (
    <>
    <div className="form_outer">
        <div className="form_field">
            <label htmlFor="">email</label>
            <input type="email" name="email" id="" onChange={changeHandler}/>
        </div>
        <div className="form_field">
            <label htmlFor="">password</label>
            <input type="password" name="password" id="" onChange={changeHandler}/>
        </div>
        <div className="form_button">
            <button onClick={loginHandler}>login</button>
        </div>
    </div>
    </>
  )
}

export default LoginPage
