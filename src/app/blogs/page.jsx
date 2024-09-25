import { blogsFetch } from '@/util/Fetching/FeatchingBlogs';
import { Button } from 'keep-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async () => {
   const blogs = await blogsFetch()
    return (
        <div>
            <h2>blogs page</h2>


          <div className='grid lg:grid-cols-3 gap-3'>
            {
                blogs.map(blog=>(
                    <div key={blog._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <Image className="rounded-t-lg" width={400} height={300} src={blog.image} alt="blogs" />
    
                    <div className="p-5">
                        
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.name}</h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.description}</p>
                       <Link href={`/blogs/${blog._id}`}> <Button color="primary">See Blogs</Button></Link>
                    </div>
                </div>
    
                ))
            }
          </div>
        </div>
    );
};

export default page;