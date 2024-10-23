import Navbar from '@/components/ui/navbar';
import { TypewriterEffectJanky } from "@/components/ui/typewriter-effect";
import Footer from '@/components/ui/footer';
import ThreeElement from '@/components/ui/three-element'; // Assuming you have the 3D element

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      
      {/* Side-by-side layout for typewriter and 3D */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full h-[70vh] px-6 md:px-12">
        {/* Left side: Typewriter Effect */}
        <div className="flex-1 flex items-center justify-center">
          <TypewriterEffectJanky />
        </div>

        {/* Right side: 3D Element */}
        <div className="flex-1 flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <ThreeElement />
        </div>
      </section>

      <Footer />
    </main>
  );
}