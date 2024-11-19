import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthSkeltion from '../skelton/AuthSkeltion';
import { getInfluncerToken, removeInfluncerToken, } from '../../utils/tokenStorage';
import { useDispatch } from 'react-redux';

import { loginInfluncer } from '../../redux/slice/influncer.slice';
import { getInfluncerProfileService } from '../../service/influncer/influncer.service';

const InfluncerAuthLayout = ({ children, slug = "#" }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const authToken = getInfluncerToken();


                if (!authToken) {
                    console.log('not found');
                    navigate('/influncer/login');
                    return;
                }
                //console.log(authToken)
                const response = await getInfluncerProfileService();
                console.log(response);

                if (response.data !== null && response.data.success === true) {
                    console.log(response.data.data)
                    dispatch(loginInfluncer(response.data.data));
                    setIsLoading(false);
                    if (window.location.pathname !== slug) {
                        navigate(slug);
                    }
                    return
                } else {
                    setIsLoading(false);
                    removeInfluncerToken();
                    navigate('/influncer/login');
                    return
                }
            } catch (err) {
                setError("An error occurred during authentication.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate, slug, dispatch]);


    return (
        <>
            {isLoading ? (
                <div className='w-full h-full flex justify-center items-center '>
                    <AuthSkeltion />

                </div>

            ) : error ? (
                <div>{error}</div>
            ) : (
                [children]
            )}
        </>
    );
}

export default InfluncerAuthLayout;
