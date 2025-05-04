import React, { useRef, useState } from 'react'
import ShadowCard from '../../comoponent/shared/card/ShadowCard'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import CenterPopDialog from '../../comoponent/Dialog/CenterPopDialog';
import { errorToast, successToast } from '../../hooks/toast.hooks';
import OrderLoader from '../../comoponent/Loader/OrderLoader';
import PendualLoader from '../../comoponent/Loader/PendualLoader';
import { sendforgotPasswordOtpService, verifyforgotPasswordOtpService } from '../../service/user/user.service';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null);
    const inputs = useRef([]);
    const [loginForm, setLoginForm] = useState({
        email: '',

    });
    const [isOtpSent, setIsOtpSent] = useState(false);
    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        if (value.length === 1 && index < 3) {
            inputs.current[index + 1].focus();
        }
    }
    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputs.current[index - 1].focus();
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    async function handleSendotp() {
        try {
            if (loginForm.email === "") {
                return errorToast('Email is required');
            }
            // regext to validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(loginForm.email)) {
                return errorToast("Email is not valid");
            }
            setIsLoading(true);

            let response = await sendforgotPasswordOtpService({ email: loginForm.email });
            setIsLoading(false);
            if (response.data !== null && response.data.statusCode === 200) {
                setIsOtpSent(true);
                successToast(response.data.message);
                setToken(response.data.data);
            } else {
                errorToast(response?.message || response.error.message)
            }



        } catch (error) {
            setIsLoading(false);
            console.log('Something went wrong while sending otp', error);
        }
    }
    async function handlVerifyOtp() {
        const otp = inputs.current.map(input => input?.value).join('');

        // Basic validation
        if (otp.length !== 4 || !/^\d{4}$/.test(otp)) {
            errorToast("Please enter a valid 4-digit OTP.");
            return;
        }
        try {

            const response = await verifyforgotPasswordOtpService({ otp: otp, token: token });
            if (response.data !== null && response.data.statusCode === 200) {
                successToast(response.data.message);
                navigate('/auth/reset-password/'+response.data.data);
            } else {
                errorToast(response.error.message)
            }

        } catch (error) {
            setIsLoading(false);
            console.log('something went while verify otp ', error)
        }
    }
    return (
        <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>
            {isLoading && <PendualLoader />}
            <CenterPopDialog visible={isOtpSent} className={"flex flex-col w-full md:w-1/2 justify-center items-center gap-5 "} onClose={() => setIsOtpSent(false)}>
                <p className='text-2xl font-semibold '>Your Otp Sent on your register email email****@gmail.com</p>

                <div className='flex items-center gap-2 w-10/12  md:w-1/2'>
                    {
                        [0, 1, 2, 3].map((_, index) => (
                            <input key={index}
                                className={'shadow-2xl border-2 border-neutral-500 text-xl font-bold  w-20 h-14 rounded-md text-center'}
                                type='text' maxLength="1" ref={(el) => (inputs.current[index] = el)}
                                onChange={(e) => handleOtpChange(e, index)} onKeyDown={(e) => handleOtpKeyDown(e, index)} />
                        ))
                    }
                </div>
                <Button handlClick={handlVerifyOtp} text={"Verify"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />

            </CenterPopDialog>
            <ShadowCard className={'w-full h-full  md:h-[60vh] md:w-1/2 my-20 rounded-lg border-neutral-500'}>
                <div>
                    <div className='w-full flex justify-center items-center flex-col '>
                        <img src={UntloddLogo} alt="/" className='h-20' />
                        <p className='py-3 text-neutral-500 font-semibold  text-xl text-center'>Don't Worry , Your Account is Safe.</p>
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


                            <Button handlClick={handleSendotp} text={"Send Otp"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />
                            <span className='text-center text-xl text-neutral-500'>Or</span>
                            <Link to={"/"} className='text-center text-xl font-semibold text-blue-700'>Go To Home</Link>

                        </div>

                    </div>
                </div>
            </ShadowCard>

        </div>
    )
}

export default ForgotPassword