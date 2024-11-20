import React, { useEffect, useState } from 'react'
import { getAllInfluncerProductService } from '../../service/influncer/influncer.service';
import { FaClipboard, FaInbox, FaRupeeSign, FaShare, FaStar } from 'react-icons/fa';
import BreadCrum from '../../comoponent/shared/BreadCrum';
import Rating from 'react-rating';
import { successToast } from '../../hooks/toast.hooks';
import { useNavigate } from 'react-router-dom';

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    async function getMyproducts() {
        try {
            const response = await getAllInfluncerProductService();

            if (response.data !== null && response.data.statusCode === 200) {
                return setProducts(response.data.data)
            }
        } catch (error) {
            return error
        }
    }
    useEffect(() => {
        getMyproducts();
    }, [])
    return (
        <div className='min-h-screen'>
            <BreadCrum heading={"Influncer/Products"} />
            <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 shadow-md mx-10 px-20'>
                {
                    products.length > 0 ? products.map((prd, ind) => (
                        <InfluncerProductCard key={ind} product={prd.ProductDetails[0]} token={prd.assignment_token} />
                    ))
                        :
                        <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto hover:bg-red-50 hover:scale-105 transition-all duration-300">
                            <FaInbox className="text-red-500 text-4xl mr-3" />
                            <p className="text-gray-700 text-lg font-medium">No Product Found</p>
                        </div>

                }
            </div>
        </div>
    )
}

export const InfluncerProductCard = ({ product, token }) => {
    const navigate = useNavigate();
    const [linkCopied, setLinkCopied] = useState(false);

    const handleCopyClick = () => {
        // Copy the link to clipboard
        const baseUrl = 'https://untoldd.in';
        const fullUrl = `${baseUrl}/app/product-details?id=${product?._id}&inf_token=${token}`;
        navigator.clipboard.writeText(fullUrl);

        // Show the "Link copied" message
        setLinkCopied(true);
        successToast('Link is copied.');

        // Hide the "Link copied" message after 2 seconds
        setTimeout(() => {
            setLinkCopied(false);
        }, 2000);
    };
    return (
        <div className='bg-white shadow-xl p-6 rounded-lg w-full hover:bg-slate-100 cursor-pointer' key={product._id}>
            <img
                src={product?.images[0].url}
                style={{ mixBlendMode: 'multiply' }}
                alt='Cool T-shirt'
                className='w-full h-[200px]'
            // onClick={() => navigate(`/app/product-details?id=${product?._id}`)}
            />
            <div className='mt-2'>
                <p className='text-xl font-medium'>{product?.name}</p>
                <p className='text-gray-600 mb-2'>{product?.description?.substring(0, 10)}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Rating
                            readonly
                            initialRating={5}
                            fullSymbol={<FaStar className='text-orange-600' />}
                        />
                    </div>
                    <p className='text-2xl text-black flex items-center'>
                        <FaRupeeSign className='text-black' /> {product?.price}
                    </p>
                </div>
            </div>
            <div className='flex justify-between gap-4 md:gap-6'>
            {/* Copy Link Section */}
            <div className='w-full'>
                <button
                    onClick={handleCopyClick}
                    className='w-full flex items-center justify-center gap-3 bg-black text-white py-3 rounded-md font-semibold hover:bg-orange-500 transition duration-300'
                >
                    <FaClipboard className='text-xl' /> Copy Link
                </button>

                {/* Conditionally render the "Link Copied" message */}
                {linkCopied && (
                    <p className='mt-2 text-green-500 font-semibold text-center'>
                        Link Copied!
                    </p>
                )}
            </div>

            {/* Share Button Section */}
            <div className='w-full'>
                <button
                    onClick={() => navigate(`/app/product-details?id=${product?._id}&inf_token=${token}`)}
                    className='w-full flex items-center justify-center gap-3 bg-black text-white py-3 rounded-md font-semibold hover:bg-orange-500 transition duration-300'
                >
                    <FaShare className='text-xl' /> Share
                </button>
            </div>
        </div>
        </div>
    )
}
export default MyProduct