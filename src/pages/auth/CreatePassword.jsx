import React, { useState } from 'react'
import ShadowCard from '../../comoponent/shared/card/ShadowCard'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';

const CreatePassword = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    password: '',
    conformpassword: ''
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

      <ShadowCard className={'w-full h-full  md:h-[80vh] md:w-1/2 my-20 rounded-lg border-neutral-500'}>
        <div>
          <div className='w-full flex justify-center items-center flex-col '>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold  text-xl text-center'>Create Your New Password to Secure your account.</p>
          </div>

          <div className='flex justify-center items-center mt-5 md:mt-10'>
            <div className='w-full p-4 sm:p-0 sm:w-1/2  flex flex-col gap-3'>
              <InputWithLabel label={'New Password'} type='password'
                value={loginForm.password}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"***** "} inputClassName={'py-3 '}
                name={'newpassword'}
                handleChange={handleChange}
              />
            
              <InputWithLabel label={'Conform Password'} type='text' value={loginForm.conformpassword}
                labelClass={'text-2xl font-semibold text-black '}
                placeholder={"***** "} inputClassName={'py-3 '}
                name={'conformpassword'}
                handleChange={handleChange}
              />
              <Button handlClick={() => navigate('/')} text={"Submit"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />
                
                
            </div>

          </div>
        </div>
      </ShadowCard>

    </div>
  )
}

export default CreatePassword