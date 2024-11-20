import React, { useEffect, useState } from 'react';

import { getAdminToken } from '../../../utils/tokenStorage';
import { useNavigate } from 'react-router-dom';
import { getAdminProfileService } from '../../../service/admin/admin.service';

import AuthSkeltion from '../../skelton/AuthSkeltion';

const AdminAuthLayout = ({ slug = "/auth/admin-login", children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function isAdminLogin() {
        try {
            setIsLoading(false)
            const authToken = getAdminToken();
            if (!authToken) {
                navigate('/auth/admin-login');
                return;
            }

            const response = await getAdminProfileService();
            console.log(response)
            if (response.error !== null) {
                setIsLoading(false)
                navigate('/auth/admin-login');
                return;
            }
            if (response.data.success === true) {
                setIsLoading(false)
                navigate(slug);
                return;
            }
        } catch (err) {
            setIsLoading(false)
            navigate('/auth/admin-login');

            setError("An error occurred during authentication.");
            console.error(err);
            return;
        }
    }

    useEffect(() => {
        isAdminLogin();
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
                children // Render children directly
            )}
        </>
    );
}

export default AdminAuthLayout;
