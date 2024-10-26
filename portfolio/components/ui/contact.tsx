import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center p-5">
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Me</h2>
                    <p className="text-lg md:text-xl lg:text-2xl my-8">
                        I’m open to new opportunities and excited to connect with like-minded professionals.{' '}
                        <a 
                            href="mailto:sengkit100@gmail.com" 
                            className="underline text-blue-600 hover:text-blue-800"
                        >
                            Send me an email
                        </a>
                        —I’d love to hear from you!
                    </p>

                </div>
            </main>
        </div>
    );
}