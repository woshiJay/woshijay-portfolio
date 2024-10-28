import React from 'react';

export default function About() {
    return (
        <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center p-5">
            <main className="flex-grow flex items-center justify-start px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
                    <p className="text-lg md:text-xl lg:text-2xl my-4">I’m a passionate developer and data enthusiast with a strong foundation in full-stack development and data analytics. Skilled in building dynamic, user-focused applications using HTML, CSS, JavaScript, Node.js, and Firebase, I enjoy creating solutions that enhance user experience. </p>
                    <p className="text-lg md:text-xl lg:text-2xl my-4">I also leverage Python and machine learning tools to bring data-driven insights to life, using interactive dashboards for real-time results. Eager to innovate and solve real-world problems, I’m ready to contribute to software engineering or data science projects that make an impact.
                    </p>
                </div>
            </main>
        </div>
    );
}
