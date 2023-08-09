import React,{useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';


const RegisterScreen = () => {
  const [firstname, setFirstName]= useState('');
  const [lastname, setLastName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler=async(e:any)=>{
    e.preventDefault();
  }

  return (
    <FormContainer>
        <h1> Register</h1>

        <Form onSubmit={submitHandler}>

            <Form.Group className='my-2' controlId='firstname'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='firstname'
                  placeholder='Enter firstname'
                  value={firstname}
                  onChange={(e)=>setFirstName(e.target.value)}
                  ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='lastname'>
                <Form.Label>Name</Form.Label>
                 <Form.Control
                     type='lastname'
                      placeholder='Enter lastname'
                     value={lastname}
                    onChange={(e)=>setLastName(e.target.value)}
                    ></Form.Control>
            </Form.Group>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen