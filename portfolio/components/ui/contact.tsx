import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center p-5">
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-5xl font-bold">Contact Me</h2>
                    <p className="text-2xl mt-4">I am currently looking for new opportunities. Feel free to contact me.</p>
                    <div className="mt-8">
                        <h3 className="text-3xl font-bold">Email</h3>
                        <p className="text-2xl">.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
