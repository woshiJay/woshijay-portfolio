import PageSlider from '@/components/ui/page-slider';
import Navbar from '@/components/ui/navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageSlider />
      </main>
    </div>
  );
}