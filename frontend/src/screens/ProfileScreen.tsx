import React,{useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { AppState } from '../store';

const ProfileScreen = () => {
    const [email, setEmail] = useState();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const {userInfo} = useSelector((state:AppState)=>state.auth)

  return (
    <div>ProfileScreen</div>
  )
}

export default ProfileScreen