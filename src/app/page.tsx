import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import Homepage from '@/components/Homepage';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Homepage />
      <Footer/>
    </div>
  );
}