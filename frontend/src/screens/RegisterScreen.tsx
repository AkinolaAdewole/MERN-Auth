import React,{useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { AppState } from '../store';

const RegisterScreen = () => {
  const [firstname, setFirstName]= useState('');
  const [lastname, setLastName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo} = useSelector((state:AppState)=>state.auth);

  useEffect(()=>{
    if(userInfo){
        navigate('/');
    }
  },[navigate, userInfo]);

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

            <Form.Group className='my-2' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

           <Form.Group className='my-2' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
           </Form.Group>

           <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
           
           {isLoading && <Loader />}
        
        </Form>

        <Button type='submit' variant='primary' className='mt-3'>
          Register
        </Button>
    </FormContainer>
  )
}

export default RegisterScreen