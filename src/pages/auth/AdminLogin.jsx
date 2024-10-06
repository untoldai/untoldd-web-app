import React, { useState } from 'react'
import ShadowCard from '../../comoponent/shared/card/ShadowCard'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate=useNavigate();
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
  return (
    <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>

      <ShadowCard className={'w-full h-full  md:h-[70vh] md:w-1/2 my-20 rounded-lg border-neutral-500'}>
        <div>
          <div className='w-full flex justify-center items-center flex-col '>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold  text-xl text-center'>Welcome! Back to Admin Pannel</p>
          </div>

          <div className='flex justify-center items-center mt-5 md:mt-10'>
            <div className='w-full p-4 sm:p-0 sm:w-1/2  flex flex-col gap-3'>
              <InputWithLabel label={'Email'} type='email'
                value={loginForm.email}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Email "} inputClassName={'py-3 '}
                name={'email'}
                handleChange={handleChange}
              />
              <InputWithLabel label={'Password'} type='password' value={loginForm.password}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Password "} inputClassName={'py-3 '}
                name={'password'}
                handleChange={handleChange}
              />
              <Button  handlClick={()=>navigate('/admin/dashboard')} text={"Login"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
            </div>

          </div>
        </div>
      </ShadowCard>

    </div>
  )
}

export default AdminLogin