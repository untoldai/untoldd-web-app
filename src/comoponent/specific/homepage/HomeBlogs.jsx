import { useEffect, useMemo, useState } from "react"

import { FaInbox, FaUser } from "react-icons/fa";
import moment from "moment";
import parse from "html-react-parser";
import { getBlogListsService } from "../../../service/admin/admin.service";

export default function HomeBlog() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);
    const getBookingList = async () => {
        try {
            const res = await getBlogListsService();

            setBlogList(res.data.data)
        } catch (error) {
            return e
        }
    }
    useEffect(() => {
        getBookingList()
    }, [])
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="">
                    {blogList && blogList.length > 0 ? (
                        <div className="w-full grid grid-cols-1 sm:grid-cols-4  gap-x-8 gap-y-16  ">
                            {blogList.map((post) => (
                                <div
                                    key={post._id}
                                    className="flex w-full flex-col items-start justify-between shadow hover:shadow-lg  transition-all"
                                >
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <p>{moment(post.createdAt).format('D-MMM-yy')}</p>
                                        <a
                                            href={post.category}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={""}>
                                                <span className="absolute inset-0" />
                                                {post.heading}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">


                                            {parse(post.blogText)}                 </p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        {/* <img
                      alt=""
                      src={post.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    /> */}
                                        <FaUser className="bg-neutral-400 w-14 h-14 p-2 text-white rounded-full" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                {/* <a href={post.author}>
                          <span className="absolute inset-0" />
                          {post.author}
                        </a> */}
                                            </p>
                                            <p className="text-gray-600">{post.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full h-full justify-center items-center">
                            <div className="mx-20 my-20 flex flex-col justify-center items-center">
                                <FaInbox className="text-neutral-500 text-8xl " />
                                <p className="text-xl text-neutral-800 my-10">
                                    No Blog found! Create New blog
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
