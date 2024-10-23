import Navbar from '@/components/ui/navbar';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <h2>Portfolio</h2>
        <Button />
      </main>
  );
}
