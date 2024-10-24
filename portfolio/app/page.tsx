import Navbar from '@/components/ui/navbar';
import { TypewriterEffectJanky } from "@/components/ui/typewriter-effect";
import Footer from '@/components/ui/footer';
import ThreeElement from '@/components/ui/three-element'; // Assuming you have the 3D element

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side: Typewriter Effect */}
          <div className="w-full md:w-1/2">
            <TypewriterEffectJanky />
          </div>
          
          {/* Right side: 3D Element */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
              <ThreeElement />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}