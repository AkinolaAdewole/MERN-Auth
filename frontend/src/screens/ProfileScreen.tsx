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
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const {userInfo} = useSelector((state:AppState)=>state.auth);
    const [updateProfile, {isLoading}] = useUpdateUserMutation();

    useEffect(()=>{
        setFirstname(userInfo.firstname);
        setLastname(userInfo.lastname);
        setEmail(userInfo.email);
    },[userInfo.firstname, userInfo.lastname, userInfo.email]);


    const submitHandler = async (e:any) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          toast.error('Passwords do not match');
        } else {
          try {
            const res = await updateProfile({
              _id: userInfo._id,
              firstname,
              lastname,
              email,
              password,
            }).unwrap();
            

            console.log(res);
            dispatch(setCredentials(res));
            toast.success('Profile updated successfully');
          } catch (err:any) {
            toast.error(err?.data?.message || err.error);
          }
        }
      };


  return (
        <FormContainer>
        <h1>Update Profile</h1>

        <Form onSubmit={submitHandler}>

            <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type='name'
                placeholder='Enter your firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            ></Form.Control>
            </Form.Group>

          <Form.Group className='my-2' controlId='lastname'>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type='name'
                placeholder='Enter your lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
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

            <Button type='submit' variant='primary' className='mt-3'>
                Update
            </Button>

            {isLoading && <Loader />}
        </Form>
        </FormContainer>
  )
}

export default ProfileScreen