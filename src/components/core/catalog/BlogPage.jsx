import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../blogs/Header'
import BlogDetails from '../blogs/BlogDetails';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div className='pb-10 mx-auto bg-white w-full'>
            <Header />
            <div className='max-w-[720px] px-[25px] mx-auto'>
                <div>
                    <button className='mb-6 mt-2 border-2 rounded-md border-[#dfdfdf] py-1 px-4 hover:bg-[#efefef] transition-all'
                        onClick={() => navigation(-1)}
                    >
                        Back
                    </button>
                </div>
                {
                    loading ?
                        (<div className='flex justify-center items-center min-h-[80vh]'>
                            <p> Loading...</p>
                        </div>) :
                        blog ?
                            (<div className='flex flex-col gap-y-6'>
                                <BlogDetails post={blog} />
                                <h2 className='text-2xl font-bold ml-5'> Related Blogs </h2>
                                {
                                    relatedblogs.map((post) => (
                                        <div key={post.id}>
                                            <BlogDetails post={post} />
                                        </div>
                                    ))
                                }
                            </div>) :
                            (<div>
                                <p>No Blog Found</p>
                            </div>)

                }

            </div>

        </div>
    )
}

export default BlogPage
