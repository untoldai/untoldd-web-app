import React, { useEffect, useState } from 'react';


import { useNavigate } from 'react-router-dom';



import { getUserProfileService } from '../../service/user/user.service';
import AuthSkeltion from '../skelton/AuthSkeltion';
import { getUserToken, removeUserToken } from '../../utils/tokenStorage';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slice/user.slice';

const UserAuthLayout = ({ slug = "/auth/user-login", children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function isUserLogin() {
        try {
            setIsLoading(false)
            const authToken = getUserToken();
//console.log(authToken)
            if (!authToken || authToken === "") {
                console.log('not found')
                navigate('/auth/user-login');
                return;
            }

            const response = await getUserProfileService();
           // console.log(response.data.success)
            if (response.error !== null) {
                setIsLoading(false)

                removeUserToken();
                navigate('/auth/user-login');
                return;
            }
            if (response.data.success) {
                dispatch(loginUser(response.data.data))
                setIsLoading(false)
                navigate(slug);
                return;
            }
        } catch (err) {
          

            setError("An error occurred during authentication.");
            console.error(err);
            return;
        }
    }

    useEffect(() => {
        isUserLogin();
    }, []);

    return (
        <>
            {isLoading ? (
                <div className='w-full h-full flex justify-center items-center '>
                    <AuthSkeltion />

                </div>

            ) : error ? (
                <div>{error}</div>
            ) : (
                children
            )}
        </>
    );
}

export default UserAuthLayout;
