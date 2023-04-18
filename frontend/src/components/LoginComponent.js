import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label,Form } from 'reactstrap'
import Login from '../pages/Login'
import axios from 'axios'

function LoginComponent() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

const login = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/user/login',{email,password})
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err=>{
            console.log(err)
        })
}

  return (
    <div className='d-flex justify-content-center'>
       <Form className='bg-light p-3 mt-5' onSubmit={login}>
       <FormGroup>
            <Label for="exampleEmail">
            Email
            </Label>
            <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">
            Password
            </Label>
            <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
        </FormGroup>
        <Button type="submit">Login</Button>
        <div  > Dont Have a account <Link to="/registry">Registry</Link></div>
       </Form>
    </div>
  )
}

export default LoginComponent
