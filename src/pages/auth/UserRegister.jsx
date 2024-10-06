import React, { useState } from 'react'
import ShadowCard from '../../comoponent/shared/card/ShadowCard'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    firstname:'',
    lastname:'',
    phone:'',
    dob:'',
    conformpassword:''
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

      <ShadowCard className={'w-full h-full  md:h-full md:w-2/3 my-1 rounded-lg border-neutral-500'}>
        <div>
          <div className='w-full flex justify-center items-center flex-col '>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold  sm:text-xl text-center'>Nice to see your , Create your Account here with Simple process.</p>
          </div>

          <div className='flex justify-center items-center mt-5 md:mt-10'>
            <div className='w-full p-4 sm:p-0 sm:w-1/2  grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <InputWithLabel label={'First Name'} type='text'
                value={registerForm.firstname}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"First Name "} inputClassName={'py-3 '}
                name={'firstname'}
                handleChange={handleChange}
              />
               <InputWithLabel label={'Last Name'} type='text'
                value={registerForm.lastname}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Last Name "} inputClassName={'py-3 '}
                name={'lastname'}
                handleChange={handleChange}
              />
               <InputWithLabel label={'Phone'} type='number'
                value={registerForm.phone}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Phone "} inputClassName={'py-3 '}
                name={'Mobile No'}
                handleChange={handleChange}
              />
               <InputWithLabel label={'DOB'} type='date'
                value={registerForm.email}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"01/01/2001"} inputClassName={'py-3 '}
                name={'dob'}
                handleChange={handleChange}
              />
              <InputWithLabel label={'Email'} type='email'
                value={registerForm.email}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Email "} inputClassName={'py-3 '}
                name={'email'}
                handleChange={handleChange}
              />
              <InputWithLabel label={'Password'} type='password' value={registerForm.password}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Password "} inputClassName={'py-3 '}
                name={'password'}
                handleChange={handleChange}
              />
                 <InputWithLabel label={'Confirm Password'} type='text' value={registerForm.conformpassword}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"Cofirm Password "} inputClassName={'py-3 '}
                name={'conformpassword'}
                handleChange={handleChange}
              />
             
            </div>

          </div>
          <div className='flex flex-col justify-center items-center my-2'>
          <Button handlClick={() => navigate('/')} text={"Sign Up"} className={'py-2 w-1/3 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
                <span className='text-center text-xl text-neutral-400 '>Or</span>
                <Button handlClick={() => navigate('/auth/user-login')} text={"Login"} className={'py-2 w-1/3 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
          </div>
          
        </div>
      </ShadowCard>

    </div>
  )
}

export default UserRegister