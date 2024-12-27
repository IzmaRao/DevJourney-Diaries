import React from 'react'
import Image from 'next/image';
import bg from '../../public/Rectangle 17.png'
export default function Newsletter() {
    return (
        <div>
            <section className="newsletter space-y-4">
                <h2 className="newsletter-h">Stay Updated</h2>
                <p className="newsletter-p">Subscribe to our newsletter to get the latest updates and tutorials.</p>
                <form className="newsletter-form" action="path/to/newsletter-signup" method="POST">
                    <Image className='newsletter-form-bg' width={1500} height={300} src={bg} alt='bg' />
                    <div className='newsletter-form-content'>
                        <input className="newsletter-form-input border-[1px] border-black rounded-lg" type="email" name="email" placeholder="Enter your email" required />
                        <button className="newsletter-form-btn rounded text-white " type="submit">Subscribe</button>
                    </div>
                </form>
            </section>

        </div>
    )
}
