'use client';


import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
interface IData {
    id: number;
    author: string;
    blogname: string;
    description1: string;
    description2: string;
    description3: string;
    image: StaticImageData;
}

interface Comment {
    id: number;
    author: string;
    content: string;
}

interface Params {
    params: Promise<{ id: string }>; // Reflecting that `params` is a Promise
}

export default function Page({ params }: Params) {
    const [blog, setBlog] = useState<IData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<{ author: string; content: string }>({ author: '', content: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const unwrappedParams = await params;
                const response = await fetch(`https://dev-journey-diaries.vercel.app/api/featuredblog/${unwrappedParams.id}`, { cache: 'no-store' })
                if (!response.ok) {
                    throw new Error("Failed to fetch product data")
                }
                const BlogData: IData = await response.json()
                setBlog(BlogData)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchProduct();
    }, [params]);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewComment((prev) => ({ ...prev, [name]: value }));
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.author && newComment.content) {
            const commentToAdd = { id: comments.length + 1, ...newComment };
            setComments((prev) => [...prev, commentToAdd]);
            setNewComment({ author: '', content: '' }); // Reset the form
        }
    };

    if (loading) {
        return <div className='loading'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className='bg-[#BFAS84]'>
            {blog && (
                <div className='featured-detailblog' key={blog.id}>
                    <div className='featured-detailblog-img-div'>
                        <Image className='featured-detailblog-img rounded' width={700} height={400} src={blog.image} alt="" />
                    </div>
                    <div className='featured-detailblog-content space-y-6'>
                        <h1 className='featured-detailblog-h'>{blog.blogname}</h1>
                        <div className='featured-detailblog-ps  space-y-4'>
                            <p>{blog.description1}</p>
                            <p>{blog.description2}</p>
                            <p>{blog.description3}</p>
                        </div>
                    </div>
                </div>
            )}
            
                        <div className='comments-section space-y-8'>
                            <h1 className="comments-head">Comments</h1>
                            <form onSubmit={handleCommentSubmit} className="space-y-4">
                                <div className="comment-section-add">
                                    <input
                                        type="text"
                                        name="author"
                                        placeholder="Your Name"
                                        value={newComment.author}
                                        onChange={handleCommentChange}
                                        className="comment-section-add-input"
                                        required
                                    />
                                    <input
                                        name="content"
                                        placeholder="Your Comment"
                                        value={newComment.content}
                                        onChange={handleCommentChange}
                                        className="comment-section-add-input"
                                        required
                                    />
                                </div>
                                <button type="submit" className="comment-section-add-btn text-white rounded">Submit Comment</button>
                            </form>
                            
            
                            <div className="comments-list">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="comment border py-[10px] px-[15px] rounded space-y-2">
                                        <div className="flex gap-2 items-center xl:text-xl lg:text-xl md:text-xl sm:text-xl text-[15px]"><IoPersonSharp  size={18}/><strong>{comment.author}</strong></div>
                                        <p className='xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[14px] text-[13px]'>{comment.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

        </div>
    )
}
