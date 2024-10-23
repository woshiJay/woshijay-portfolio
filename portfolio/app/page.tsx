import Navbar from '@/components/ui/navbar';
import { Button } from '../components/ui/button';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <h2>Portfolio</h2>
        <Button />
        <Footer />
      </main>
  );
}
