import React, { useState } from 'react';
import ShadowCard from '../../comoponent/shared/card/ShadowCard';
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel';
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { registerUserService } from '../../service/user/user.service';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import { loginUser } from "../../redux/slice/user.slice";
import { useDispatch } from "react-redux"
import { setUserToken } from '../../utils/tokenStorage';
import PendualLoader from '../../comoponent/Loader/PendualLoader';

const InfluncerRegisteration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    dob: '',
    conformpassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!registerForm.firstname) newErrors.firstname = 'First name is required.';
    if (!registerForm.lastname) newErrors.lastname = 'Last name is required.';
    if (!registerForm.phone) newErrors.phone = 'Phone number is required.';
    if (!registerForm.dob) newErrors.dob = 'Date of birth is required.';
    if (!registerForm.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!registerForm.password) newErrors.password = 'Password is required.';
    if (registerForm.password !== registerForm.conformpassword) {
      newErrors.conformpassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '' // Clear error when user starts typing
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      const payload = {
        firstname: registerForm.firstname,
        lastname: registerForm.lastname,
        email: registerForm.email,
        password: registerForm.password,
        phone: registerForm.phone,
        dob: registerForm.dob
      }
      const resp = await registerUserService(payload);
      //console.log(resp)
      if (resp.data && resp.data.statusCode === 409) {
        setIsLoading(false);
        errorToast(resp.data.message);

        return;
      }

      if (resp.data && resp.data.statusCode === 201) {
        setIsLoading(false);
        successToast(resp.data.message);
        dispatch(loginUser(resp.data.data.newUser));
        setUserToken(resp.data.data.accessToken)
        setRegisterForm({
          email: '',
          password: '',
          firstname: '',
          lastname: '',
          phone: '',
          dob: '',
          conformpassword: ''
        });
        navigate('/');
      }
      if (resp.error.statusCode == 400) {


        errorToast(resp.error.error.error.message);
        return;
      }
      setIsLoading(false);
      errorToast(resp.error.message);
      return
    }
  };

  return (
    <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>
      <ShadowCard className={'w-full h-full md:h-full md:w-2/3 my-1 rounded-lg border-neutral-500'}>
        <div>
          <div className='w-full flex justify-center items-center flex-col'>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold sm:text-xl text-center'>Nice to see you, Create your Account here with Simple process.</p>
          </div>

          {
            isLoading ?
              <div className='w-full h-full flex items-center justify-center'>
                <PendualLoader />
              </div>

              :

              <form className='flex flex-col justify-center items-center mt-5 md:mt-10' onSubmit={handleSubmit}>
                <div className='w-full p-4 sm:p-0 sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <InputWithLabel
                      label={'First Name'}
                      type='text'
                      value={registerForm.firstname}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"First Name"}
                      inputClassName={'py-3'}
                      name={'firstname'}
                      handleChange={handleChange}
                    />
                    {errors.firstname && <span className='text-red-500'>{errors.firstname}</span>}

                  </div>
                  <div>
                    <InputWithLabel
                      label={'Last Name'}
                      type='text'
                      value={registerForm.lastname}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"Last Name"}
                      inputClassName={'py-3'}
                      name={'lastname'}
                      handleChange={handleChange}
                    />
                    {errors.lastname && <span className='text-red-500'>{errors.lastname}</span>}
                  </div>
                  <div>
                    <InputWithLabel
                      label={'Phone'}
                      type='number'
                      value={registerForm.phone}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"Phone"}
                      inputClassName={'py-3'}
                      name={'phone'}
                      handleChange={handleChange}
                    />
                    {errors.phone && <span className='text-red-500'>{errors.phone}</span>}

                  </div>
                  <div>
                    <InputWithLabel
                      label={'DOB'}
                      type='date'
                      value={registerForm.dob}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"01/01/2001"}
                      inputClassName={'py-3'}
                      name={'dob'}
                      handleChange={handleChange}
                    />
                    {errors.dob && <span className='text-red-500'>{errors.dob}</span>}

                  </div>
                  <div>
                    <InputWithLabel
                      label={'Email'}
                      type='email'
                      value={registerForm.email}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"Email"}
                      inputClassName={'py-3'}
                      name={'email'}
                      handleChange={handleChange}
                    />
                    {errors.email && <span className='text-red-500'>{errors.email}</span>}

                  </div>
                  <div>
                    <InputWithLabel
                      label={'Password'}
                      type='password'
                      value={registerForm.password}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"Password"}
                      inputClassName={'py-3'}
                      name={'password'}
                      handleChange={handleChange}
                    />
                    {errors.password && <span className='text-red-500'>{errors.password}</span>}

                  </div>
                  <div>
                    <InputWithLabel
                      label={'Confirm Password'}
                      type='password'
                      value={registerForm.conformpassword}
                      labelClass={'text-2xl font-semibold text-black'}
                      placeholder={"Confirm Password"}
                      inputClassName={'py-3'}
                      name={'conformpassword'}
                      handleChange={handleChange}
                    />
                    {errors.conformpassword && <span className='text-red-500'>{errors.conformpassword}</span>}
                  </div>

                </div>

                <div className='flex flex-col justify-center items-center my-2 w-full'>
                  <Button text={"Sign Up"}
                    type='submit' className={'py-2 w-1/3 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
                  <span className='text-center text-xl text-neutral-400'>Or</span>
                  <Button handlClick={() => navigate('/auth/user-login')} text={"Login"} className={'py-2 w-1/3 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
                </div>
              </form>
          }
        </div>
      </ShadowCard>
    </div>
  );
};

export default InfluncerRegisteration;
