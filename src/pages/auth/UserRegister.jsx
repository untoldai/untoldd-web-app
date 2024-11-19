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

const UserRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    dob: '2001-01-01',  // Set the default date here
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!registerForm.firstname) newErrors.firstname = 'First name is required.';
    if (!registerForm.lastname) newErrors.lastname = 'Last name is required.';
    if (!registerForm.phone) newErrors.phone = 'Phone number is required.';
    if (!registerForm.dob) newErrors.dob = 'Date of birth is required.'; // this will always be valid now
    if (!registerForm.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!registerForm.password) newErrors.password = 'Password is required.';
    if (registerForm.password !== registerForm.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
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
    e.preventDefault();
    setIsLoading(true);

    if (validateForm()) {
      const payload = {
        firstname: registerForm.firstname,
        lastname: registerForm.lastname,
        email: registerForm.email,
        password: registerForm.password,
        phone: registerForm.phone,
        dob: registerForm.dob  // Passing the default DOB value here
      };

      try {
        const resp = await registerUserService(payload);
        setIsLoading(false);

        if (resp.data && resp.data.statusCode === 409) {
          errorToast(resp.data.message);
          return;
        }

        if (resp.data && resp.data.statusCode === 201) {
          successToast(resp.data.message);
          dispatch(loginUser(resp.data.data.newUser));
          setUserToken(resp.data.data.accessToken);

          setRegisterForm({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            phone: '',
            dob: '01/01/2001',  // Reset to default value after successful submission
            confirmPassword: ''
          });
          navigate('/');
        } else if (resp.error?.statusCode === 400) {
          errorToast(resp.error.error.error.message);
        } else {
          errorToast(resp.error?.error._message || 'An unexpected error occurred');
        }
      } catch (error) {
        setIsLoading(false);
        errorToast('An error occurred during registration.');
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>
      <ShadowCard className={'w-full h-full md:h-full md:w-2/3 my-1 rounded-lg border-neutral-500'}>
        <div>
          <div className='w-full flex justify-center items-center flex-col'>
            <img src={UntloddLogo} alt="/" className='h-20' />
            <p className='py-3 text-neutral-500 font-semibold sm:text-xl text-center'>
              Nice to see you, Create your Account here with a simple process.
            </p>
          </div>

          {isLoading ? (
            <div className='w-full h-full flex items-center justify-center'>
              <PendualLoader />
            </div>
          ) : (
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
                    type='tel' // Changed to tel for phone validation
                    value={registerForm.phone}
                    labelClass={'text-2xl font-semibold text-black'}
                    placeholder={"Phone"}
                    inputClassName={'py-3'}
                    name={'phone'}
                    handleChange={handleChange}
                    maxLength="10"
                  />
                  {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
                  <span className='text-sm text-gray-500 mt-1'>Phone number must be exactly 10 digits.</span> 
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
                  <span className='text-sm text-gray-500 mt-1'>Password must be at least 8 characters long.</span> 
                </div>

                <div>
                  <InputWithLabel
                    label={'Confirm Password'}
                    type='password'
                    value={registerForm.confirmPassword}
                    labelClass={'text-2xl font-semibold text-black'}
                    placeholder={"Confirm Password"}
                    inputClassName={'py-3'}
                    name={'confirmPassword'}
                    handleChange={handleChange}
                  />
                  {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword}</span>}
                </div>
              </div>

              <div className='flex flex-col justify-center items-center my-2 w-full'>
                <Button text={"Sign Up"} type='submit' className={'py-2 w-1/3 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
                <span className='text-center text-xl text-neutral-400'>Or</span>
                <Button handlClick={() => navigate('/auth/user-login')} text={"Login"} className={'py-2 w-1/3 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-2 hover:scale-105 duration-500 transition-transform'} />
              </div>
            </form>
          )}
        </div>
      </ShadowCard>
    </div>
  );
};

export default UserRegister;