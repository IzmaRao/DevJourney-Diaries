import { NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json([
        {id: 1, author: "Izma Ikhlaque" , blogname: "The Journey to Becoming a Full-Stack Developer", description: "Explore the essential skills and experiences needed to become a full-stack developer. Share tips for mastering both front-end and back-end technologies.", image: "/image.png"},
        {id: 2, author: "Arham Ikhlaque" , blogname: "Exploring New JavaScript Frameworks", description: "Discover the latest JavaScript frameworks like Next.jsand Tailwind CSS. Highlight their unique features and why they are worth exploring.", image: "/img2.jpg"},
        {id: 3, author: "Arish Ikhlaque" , blogname: "Debugging Tips for Developers", description: "Offer practical advice on effective debugging techniques. Share real-life examples of how to solve tricky coding bugs.", image: "/img3.jpeg"},
    ])
}