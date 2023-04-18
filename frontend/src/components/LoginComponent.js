import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, Input, Label,Form } from 'reactstrap'

function LoginComponent() {
  return (
    <div className='d-flex justify-content-center'>
       <Form className='bg-light p-3 mt-5'>
       <FormGroup>
            <Label for="exampleEmail">
            Email
            </Label>
            <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
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
            />
        </FormGroup>
        <Button>Login</Button>
        <div  > Dont Have a account <Link to="/registry">Registry</Link></div>
       </Form>
    </div>
  )
}

export default LoginComponent
