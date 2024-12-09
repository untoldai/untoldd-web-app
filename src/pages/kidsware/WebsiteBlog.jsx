import React, { useMemo, useState } from 'react';
import { FaInbox, FaUser } from 'react-icons/fa';
import moment from 'moment';
import parse from 'html-react-parser'; // to parse the HTML content

import { getBlogListsService } from '../../service/admin/admin.service';

const BlogListPage = () => {
    const [blogLists, setBlogLists] = useState([]);
    
    async function getBlogLists() {
        try {
            // Fetch blog list (uncomment when API is available)
            const response = await getBlogListsService();
            setBlogLists(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useMemo(() => {
        getBlogLists();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 mt-20">
            <div className="container mx-auto px-6 sm:px-12">
                {/* Blog Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {blogLists && blogLists.length > 0 ? (
                        blogLists.map((post) => (
                            <div
                                key={post._id}
                                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300 ease-in-out"
                            >
                                {/* Blog Header */}
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                    <time dateTime={post.createdAt} className="text-gray-500">
                                        {moment(post.createdAt).fromNow()}
                                    </time>
                                    <span className="text-blue-500 font-medium">{post.category}</span>
                                </div>

                                {/* Blog Heading */}
                                <h3 className="text-3xl font-semibold text-gray-900 mt-4 hover:text-blue-500 transition-colors duration-200">
                                    {post.heading}
                                </h3>

                                {/* Blog Description */}
                                <p className="text-gray-700 mt-4 text-base leading-relaxed line-clamp-4">
                                    {parse(post.blogText)}
                                </p>

                                {/* Author Section */}
                                <div className="flex items-center gap-4 mt-6">
                                    <FaUser className="text-gray-600 w-10 h-10 rounded-full bg-gray-200 p-2" />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900">{post.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col justify-center items-center text-gray-500">
                            <FaInbox className="text-6xl" />
                            <p className="mt-4 text-lg text-center">No blogs found. Create a new one!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogListPage;
