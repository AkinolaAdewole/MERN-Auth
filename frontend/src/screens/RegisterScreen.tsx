import React,{useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';


const RegisterScreen = () => {
  const [firstname, setFirstName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div>RegisterScreen</div>
  )
}

export default RegisterScreen