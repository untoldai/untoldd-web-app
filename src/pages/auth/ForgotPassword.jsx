import React, { useRef, useState } from 'react'
import ShadowCard from '../../comoponent/shared/card/ShadowCard'
import InputWithLabel from '../../comoponent/specific/form/InputWithLabel'
import Button from '../../comoponent/specific/form/Button';
import { UntloddLogo } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import CenterPopDialog from '../../comoponent/Dialog/CenterPopDialog';

const ForgotPassword = () => {
    const navigate = useNavigate();
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
    return (
        <div className='w-full flex justify-center p-4 sm:p-0 items-center h-full'>

            <CenterPopDialog visible={isOtpSent} className={"flex flex-col justify-center items-center gap-5 "}>
                <p className='text-2xl font-semibold '>Your Otp Sent on your register email email****@gmail.com</p>

                <div className='flex items-center gap-2 '>
                    {
                        [0, 1, 2, 3].map((_, index) => (
                            <input key={index}
                                className={'shadow-2xl border-2 border-neutral-500 text-xl font-bold  w-20 h-14 rounded-md text-center'}
                                type='text' maxLength="1" ref={(el) => (inputs.current[index] = el)}
                                onChange={(e) => handleOtpChange(e, index)} onKeyDown={(e) => handleOtpKeyDown(e, index)} />
                        ))
                    }
                </div>
                <Button handlClick={() => setIsOtpSent(true)} text={"Verify"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />

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


                            <Button handlClick={() => setIsOtpSent(true)} text={"Send Otp"} className={'py-2 hover:bg-transparent hover:border border-neutral-500 hover:text-black text-2xl my-1 hover:scale-105 duration-500 transition-transform'} />
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