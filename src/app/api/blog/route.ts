import { NextResponse } from 'next/server';

export function GET() {
    return NextResponse.json([
        {id: 1, author: "Izma Ikhlaque" , blogname: "The Journey to Becoming a Full-Stack Developer", description: "Explore the essential skills and experiences needed to become a full-stack developer. Share tips for mastering both front-end and back-end technologies.", image: "/image.png"},
        {id: 2, author: "Arham Ikhlaque" , blogname: "Exploring New JavaScript Frameworks", description: "Discover the latest JavaScript frameworks like Next.jsand Tailwind CSS. Highlight their unique features and why they are worth exploring.", image: "/img2.jpg"},
        {id: 3, author: "Arish Ikhlaque" , blogname: "Debugging Tips for Developers", description: "Offer practical advice on effective debugging techniques. Share real-life examples of how to solve tricky coding bugs.", image: "/img3.jpeg"},
        {id: 4, author: "Zimal Ikhlaque" , blogname: "Boost Your Coding Productivity", description: "Discuss tools and methodologies to enhance coding efficiency. Highlight productivity boosters like code editors and version control systems.", image: "/img4.jpeg"},
        {id: 5, author: "Elaf Ikhlaque" , blogname: "CSS Grid vs. Flexbox", description: "CSS Grid and Flexbox, detailing their differences and use cases. Help developers choose the best layout system for their projects.", image: "/img5.jpeg"},
        {id: 6, author: "Ariba Abbasi" , blogname: "Building Responsive Web Apps", description: "Guide readers on creating responsive web applications. Highlight best practices for ensuring seamless user experiences across devices.", image: "/img6.avif"},
        {id: 7, author: "Faisal Massod" , blogname: "Introduction to API Integration", description: "Explain the basics of API integration and its importance. Provide a step-by-step guide on integrating popular APIs into projects.", image: "/img7.webp"},
        {id: 8, author: "Okasha Aijaz" , blogname: "From Code to Production: Deployment Strategies", description: "Discuss different deployment strategies for web applications. Offer insights on choosing the right hosting platforms and tools.", image: "/img8.png"}
    ])
}