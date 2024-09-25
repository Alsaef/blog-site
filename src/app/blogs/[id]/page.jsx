import { singleBlogsFetch } from '@/util/Fetching/FeatchingBlogs';
import React from 'react';

const page = async({params}) => {
    const blog= await singleBlogsFetch(params.id)
    return (
        <div>
            {blog.name}
        </div>
    );
};

export default page;