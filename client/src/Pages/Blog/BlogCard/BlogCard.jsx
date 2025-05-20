import React from 'react';

const BlogCard = ({blog}) => {
    const {img, heading, description} = blog;
    return (
        <div className='h-full'>
            <div className="max-w-lg h-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracki">{heading}</h2>
			<p className="dark:text-gray-100">{description}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md text-orange-500">Read more...</button>
	</div>
</div>
        </div>
    );
};

export default BlogCard;