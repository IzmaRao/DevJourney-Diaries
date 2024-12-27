'use client';


import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";


interface IData {
    id: number;
    author: string;
    blogname: string;
    description: string;
    image: StaticImageData;
}


export default function Featuredblog() {
    const [blog, setBlog] = useState<IData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/featuredblog/`, { cache: 'no-cache'})
                if (!response.ok) {
                    throw new Error("Failed to fetch product data")
                }
                const BlogData: IData[] = await response.json()
                setBlog(BlogData)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchProduct();
    }, );

    if (loading) {
        return <div className='loading'>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }


  return (
    <div className='featuredblog space-y-8'>
        <h1 className='featuredblog-h'>Featured Blog</h1>

        <div className="featuredblog-items">
        {
        blog?.map((blog: IData) => (
            <div className="featuredblog-item space-y-3 bg-[#dfdfdf75] rounded" key={blog.id}>
                <Image className='featuredblog-item-img rounded' width={320} height={200} src={blog.image} alt=''/>                
                <div className='featuredblog-item-content space-y-3'>
                    <h1 className='featuredblog-item-h text-[#0d0d0d]'>{blog.blogname}</h1>
                    <p className='featuredblog-item-des text-[#151515]'>{blog.description}</p>

                    <div className='featuredblog-item-auth text-[#151515]    '>
                        <IoPersonCircleSharp size={22}/>
                        <p>{blog.author}</p>
                    </div>


                    <div>
                        <Link href={`/featuredblog/${blog.id}`}>
                        <button className="featuredblog-item-btn text-[#fff] rounded">Read More</button>
                        </Link>
                    </div>
                    
                </div>
                <br />
            </div>
        ))
        }
        </div>
    </div>
  )
}
