import PageSlider from '@/components/ui/page-slider';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <PageSlider />
      </div>
      <Footer />
    </div>
  );
}