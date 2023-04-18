import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, Input, Label,Form } from 'reactstrap'
import axios from 'axios'


function RegistryConponent() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [confirm,setConfirm] = useState('')


const handleSubmit = async(e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/user/registry',{email,password})
            .then(res=>{
                console.log(res.data)
                window.alert('post is successfully')
            })
            .catch(err=>{
                console.log(err)
                window.alert('post is failiure')

            })
   
}

  return (
    <div className='d-flex justify-content-center'>
    <Form className='bg-light p-3 mt-5' onSubmit= {handleSubmit}>
    <FormGroup >
         <Label for="exampleEmail">
         Email
         </Label>
         <Input
         id="exampleEmail"
         name="email"
         placeholder="email"
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
     <FormGroup>
         <Label for="examplePassword">
            Comfirm password
         </Label>
         <Input
         id="examplePassword"
         name="password"
         placeholder="password confirm placeholder"
         type="password"
         />
     </FormGroup>
     <Button>Registry</Button>
     <div  >Have a account <Link to="/login">Login</Link></div>
    </Form>
 </div>
  )
}

export default RegistryConponent
