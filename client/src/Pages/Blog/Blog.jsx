import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard/BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    const blogsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <div>
            <div className='grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-12'>
                {currentBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog}></BlogCard>
                ))}
            </div>

            <div className="flex justify-center space-x-1 dark:text-gray-100 mb-24">
                <button
                    title="previous"
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
                >
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className='inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400'
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    title="next"
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
                >
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Blog;
