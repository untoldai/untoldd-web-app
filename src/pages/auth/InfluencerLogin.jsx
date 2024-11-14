import React, { useState } from 'react'
import ShadowCard from '../../comoponent/shared/card/ShadowCard'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../hooks/toast.hooks';

import { useDispatch } from 'react-redux';
import { setUserToken } from '../../utils/tokenStorage';
import PendualLoader from '../../comoponent/Loader/PendualLoader';
import { loginUser } from '../../redux/slice/user.slice';
import { LoginserService } from '../../service/user/user.service';

const InfluncerLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginForm.email === "") {
      return errorToast("Email required")
    }
    if (loginForm.password === "") {
      return errorToast("Password required")
    }
    setIsLoading(true)
    const response = await LoginserService(loginForm);
    
    if (response.data && response.data.statusCode === 200) {
      
      setIsLoading(false)
      
      dispatch(loginUser(response.data.data.data));
      setUserToken(response.data.data.accessToken)
      successToast(response.data.message)
    
      return  navigate('/app');;
    }
    setIsLoading(false)
    return errorToast(response.error.message)
  }
  return (
    <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>

      <ShadowCard className={'w-full h-full  md:h-[80vh] md:w-1/2 my-20 rounded-lg border-neutral-500'}>
        <div>
          <div className='w-full flex justify-center items-center flex-col '>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold  text-xl text-center'>Welcome! Back to untoldd</p>
          </div>

          <div className='flex justify-center items-center mt-5 md:mt-10'>
            {
              isLoading
                ?
                <PendualLoader />

                :

                <div className='w-full p-4 sm:p-0 sm:w-1/2  flex flex-col gap-3'>
                  <InputWithLabel label={'Email'} type='email'
                    value={loginForm.email}
                    labelClass={'text-2xl font-semibold text-black '}
                    placeholder={"Email "} inputClassName={'py-3 '}
                    name={'email'}
                    handleChange={handleChange}
                  />
                  <Link to={"/auth/forgot-password"} className='text-right text-blue-700 font-semibold'>Forgot Password?</Link>

                  <InputWithLabel label={'Password'} type='password' value={loginForm.password}
                    labelClass={'text-2xl font-semibold text-black '}
                    placeholder={"Password "} inputClassName={'py-3 '}
                    name={'password'}
                    handleChange={handleChange}
                  />
                  <Button handlClick={handleLogin} text={"Login"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />
                  <span className='text-center text-xl text-neutral-500'>Or</span>
                  <Button handlClick={() => navigate('/auth/influencer-register')} text={"Sign Up"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />

                </div>
            }
          </div>
        </div>
      </ShadowCard>

    </div>
  )
}

export default InfluncerLogin;