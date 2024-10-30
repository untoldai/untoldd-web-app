import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfileService } from '../../service/user/user.service';
import AuthSkeltion from '../skelton/AuthSkeltion';
import { getUserToken, removeUserToken } from '../../utils/tokenStorage';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slice/user.slice';

const UserAuthLayout = ({children, slug = "#" }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
 

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const authToken = getUserToken();
                
    
                if (!authToken) {
                    console.log('not found');
                    navigate('/auth/user-login');
                    return;
                }
                //console.log(authToken)
                const response = await getUserProfileService();
               // console.log(response);
    
                if (response.data !== null && response.data.success === true) {
                    console.log(slug);
                    dispatch(loginUser(response.data.data));
                    setIsLoading(false);
                    navigate(slug);
                    return
                } else {
                    setIsLoading(false);
                    removeUserToken();
                    navigate('/auth/user-login');
                    return
                }
            } catch (err) {
                setError("An error occurred during authentication.");
                console.error(err);
            } finally {
                setIsLoading(false); // Ensure loading is set to false in both success and error cases
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

export default UserAuthLayout;
