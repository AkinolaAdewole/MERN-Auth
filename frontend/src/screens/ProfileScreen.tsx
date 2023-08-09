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
    <div>ProfileScreen</div>
  )
}

export default ProfileScreen