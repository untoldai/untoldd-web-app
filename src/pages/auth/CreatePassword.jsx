import React, { useState } from 'react';
import ShadowCard from '../../comoponent/shared/card/ShadowCard';
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel';
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { useNavigate, useParams } from 'react-router-dom';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import PendualLoader from '../../comoponent/Loader/PendualLoader';
import { passwordResetService } from '../../service/user/user.service';

const CreatePassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

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
  };

  const handleResetPassword = async () => {
    if (!loginForm.password || !loginForm.conformpassword) {
      return errorToast("Please fill all required fields");
    }

    if (loginForm.password !== loginForm.conformpassword) {
      return errorToast("Passwords do not match");
    }

    try {
      setIsLoading(true);
      const response = await passwordResetService({
        password: loginForm.conformpassword,
        token: id
      });

      setIsLoading(false);

      if (response?.data?.statusCode === 200) {
        successToast(response.data.message);
        if(response.data.is_user===true){
          navigate('/auth/user-login');
        }else{
          navigate("/influncer/login")
        }
        
      } else {
        errorToast(response?.error?.message || "Failed to reset password");
      }
    } catch (error) {
      setIsLoading(false);
      errorToast("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 p-4">
      {isLoading && <PendualLoader />}
      <ShadowCard className="w-full max-w-md rounded-lg p-6 shadow-lg bg-white">
        <div className="flex flex-col ">
          <img src={UntloddLogo} alt="Untoldd" className="h-16 mb-4" />
          <p className="text-neutral-600 font-semibold text-lg text-center mb-6">
            Create a new password to secure your Untoldd account.
          </p>

          <InputWithLabel
            label="New Password"
            type="password"
            value={loginForm.password}
            name="password"
            placeholder="••••••••"
            handleChange={handleChange}
            inputClassName="py-3"
            labelClass="text-base font-medium text-black"
          />

          <InputWithLabel
            label="Confirm Password"
            type="password"
            value={loginForm.conformpassword}
            name="conformpassword"
            placeholder="••••••••"
            handleChange={handleChange}
            inputClassName="py-3"
            labelClass="text-base font-medium text-black"
          />

          <Button
            handlClick={handleResetPassword}
            text="Submit"
            className="w-full mt-5 py-2 bg-black hover:bg-pink-700 text-white font-semibold text-lg transition-all duration-300 rounded-md"
          />
        </div>
      </ShadowCard>
    </div>
  );
};

export default CreatePassword;
