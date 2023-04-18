import React from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, Input, Label,Form } from 'reactstrap'

function RegistryConponent() {
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
         placeholder="email"
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
