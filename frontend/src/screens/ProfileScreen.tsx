import React,{useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';

const ProfileScreen = () => {
  return (
    <div>ProfileScreen</div>
  )
}

export default ProfileScreen