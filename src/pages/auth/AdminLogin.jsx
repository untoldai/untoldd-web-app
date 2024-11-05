import React, { useState } from 'react';

import { UntloddLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { adminLoginService } from '../../service/admin/admin.service';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../../redux/slice/admin.slice';
import { setAdminToken } from '../../utils/tokenStorage';
import ShadowCard from '../../comoponent/shared/card/ShadowCard';
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel';
import Button from '../../comoponent/specific/form/Button';
import PendualLoader from '../../comoponent/Loader/PendualLoader';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState({}); // State for error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value
    }));
    // Reset error message for the current input field
    setErrorMessage((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true)
    let errors = {};

    // Validate email
    if (loginForm.email === "") {
      errors.email = "Email is required.";
    }

    // Validate password
    if (loginForm.password === "") {
      errors.password = "Password is required.";
    }

    // If there are errors, update state and return early
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    // Proceed with the login process (API call, etc.)
    try {
      // Simulate login
      const payload = {
        'email': loginForm.email,
        'password': loginForm.password
      }
      const response = await adminLoginService(payload);
      
      
      if (response.data!=null&&response.data.statusCode == 200) {
        setIsLoading(false)
        successToast(response.data.message);
        dispatch(loginAdmin(response.data.data.data));
        setAdminToken(response.data.data.accessToken);
        setTimeout(()=>{
          navigate('/admin/dashboard');
        },1500)
        return;

      }
   
      setIsLoading(false)
      return errorToast(response.error.message)
    } catch (error) {
      setIsLoading(false)
      console.error("Login failed:", error);
      // Optionally handle login errors here
      return;
    }
  };

  return (
    <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>
      <ShadowCard className={'w-full h-full md:h-[70vh] md:w-1/2 my-20 rounded-lg border-neutral-500'}>


        <div>
          <div className='w-full flex justify-center items-center flex-col '>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold text-xl text-center'>Welcome! Back to Admin Panel</p>
          </div>
         
              <div className='flex justify-center items-center mt-5 md:mt-10'>
              {
            isLoading ?
              <PendualLoader />
              :
                <div className='w-full p-4 sm:p-0 sm:w-1/2 flex flex-col gap-3'>
                  <InputWithLabel
                    label={'Email'}
                    type='email'
                    value={loginForm.email}
                    labelClass={'text-2xl font-semibold text-black '}
                    placeholder={"Email "}
                    inputClassName={'py-3 '}
                    name={'email'}
                    handleChange={handleChange}
                  />
                  {errorMessage.email && <p className='text-red-500 text-sm'>{errorMessage.email}</p>} {/* Display email error */}

                  <InputWithLabel
                    label={'Password'}
                    type='password'
                    value={loginForm.password}
                    labelClass={'text-2xl font-semibold text-black '}
                    placeholder={"Password "}
                    inputClassName={'py-3 '}
                    name={'password'}
                    handleChange={handleChange}
                  />
                  {errorMessage.password && <p className='text-red-500 text-sm'>{errorMessage.password}</p>} {/* Display password error */}

                  <Button
                    handlClick={handleLogin} // Call handleLogin on button click
                    text={"Login"}
                    className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2  duration-500 transition-transform'}
                  />
                </div>
                 }
              </div>
         
        </div>

      </ShadowCard>
    </div>
  );
};

export default AdminLogin;
