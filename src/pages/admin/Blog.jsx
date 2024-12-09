import React, { useMemo, useState } from 'react'
import PendualLoader from '../../comoponent/Loader/PendualLoader';
import ReactQuill from 'react-quill';
import { FaInbox, FaUser } from 'react-icons/fa';
import "react-quill/dist/quill.snow.css";
import moment from 'moment';
import { addNewBlogService, getBlogListsService } from '../../service/admin/admin.service';
import { successToast } from '../../hooks/toast.hooks';
import parse from "html-react-parser";

const Blog = () => {
    const [value, setValue] = useState("");
    const [heading, setHeading] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [blogLists, setBlogLists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getBlogLists() {
        try {
            // Fetch blog list (uncomment when API is available)
            const response = await getBlogListsService();
            setBlogLists(response.data.data);
        } catch (error) {
            return;
        }
    }

    const handleNewBlog = async () => {
        try {
            setIsLoading(true);
            const payload = {
                heading: heading,
                category: category,
                blogText: value,
                author: author,
            };
            const response = await addNewBlogService(payload);

            if (response.data.statusCode === 201) {
                setIsLoading(false);
                successToast(
                    "success",
                    "New Blog Added",
                    "Your new blog was added successfully"
                );
                setAuthor('');
                setCategory('');
                setHeading('');
                setValue('');
            }
        } catch (error) {

            setIsLoading(false);
        }
    };

    useMemo(() => {
        getBlogLists();
    }, [isLoading]);

    return (
        <div className="ml-[2%] mt-20 sm:mt-0 sm:ml-[15%] sm:pt-[4%] h-full 0verflow-y-scroll">
            <div className=" mx-auto py-2 sm:pt-10">
                <div className="flex flex-col sm:flex-row gap-8">
                    {/* New Blog Section */}
                    <div className="shadow-lg bg-white rounded-xl p-2 w-full sm:w-1/2">
                        {isLoading ? (
                            <PendualLoader />
                        ) : (
                            <>
                                <h5 className="text-2xl font-semibold text-gray-800 mb-6">Write A New Blog</h5>
                                <div className="h-full">
                                    {/* Blog Heading */}
                                    <div>
                                        <label htmlFor="heading" className="block text-xl text-black ">Blog Heading</label>
                                        <input
                                            type="text"
                                            id="heading"
                                            placeholder="Enter your blog heading"
                                            value={heading}
                                            onChange={(e) => setHeading(e.target.value)}
                                            className="w-full p-4 border border-gray-300 rounded-xl text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Blog Category */}
                                    <div>
                                        <label htmlFor="category" className="block text-xl text-black " >Blog Category</label>
                                        <select onChange={(e)=>setCategory(e.target.value)} value={category}  className="w-full p-4 border border-gray-300 rounded-xl text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">Select Your Category</option>
                                            <option value="BEAUTY">BEAUTY</option>
                                            <option value="FASHION">FASHION</option>
                                            <option value="ALL">ALL</option>
                                        </select>
                                    </div>

                                    {/* Author Name */}
                                    <div>
                                        <label htmlFor="author" className="block text-xl text-black ">Author Name With Role</label>
                                        <input
                                            type="text"
                                            id="author"
                                            placeholder="Enter author name"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                            className="w-full p-4 border border-gray-300 rounded-xl text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Blog Description */}
                                    <div>
                                        <label className="block text-xl text-black ">Blog Description</label>
                                        <ReactQuill
                                            theme="snow"
                                            value={value}
                                            onChange={setValue}
                                            className="h-[250px] border border-gray-300 rounded-xl"
                                        />
                                    </div>

                                </div>

                                <button
                                    onClick={handleNewBlog}
                                    className="w-1/2 ml-72 py-2 bg-black text-white rounded-md text-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                >
                                    Add Blog
                                </button>
                            </>
                        )}
                    </div>

                    {/* Blog Lists Section */}
                    <div className="shadow-md bg-white rounded-xl w-full sm:w-1/2 p-6 h-full overflow-y-auto">
                        {blogLists && blogLists.length > 0 ? (
                            blogLists.map((post) => (
                                <div key={post._id} className="bg-gray-100 p-6 rounded-xl mb-6 shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <time dateTime={post.createdAt} className="text-gray-500">
                                            {moment(post.createdAt).fromNow()}
                                        </time>
                                        <span className="text-blue-500">{post.category}</span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-800 mt-4">{post.heading}</h3>
                                    <p className="text-gray-600 mt-3 text-sm line-clamp-3">{parse(post.blogText)}</p>

                                    <div className="flex items-center gap-4 mt-6">
                                        <FaUser className="text-gray-600 w-8 h-8 rounded-full bg-gray-200 p-2" />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col justify-center items-center text-gray-500">
                                <FaInbox className="text-6xl" />
                                <p className="mt-4 text-lg">No blogs found. Create a new one!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
