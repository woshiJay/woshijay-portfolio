
import React from "react";
import { TypewriterEffectJanky } from "@/components/ui/typewriter-effect";
import ThreeElement from '@/components/ui/three-element';

export default function Home() {
    return (
    <div className="max-w-[1200px] mx-auto h-full flex flex-col p-5">
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
            <TypewriterEffectJanky />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
                <ThreeElement />
            </div>
            </div>
        </div>
        </main>
    </div>
    );
}