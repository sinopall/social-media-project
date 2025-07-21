import { Navbar, Footer } from '@/components/landing-page';

// sections
import Hero from './hero';
import VideoIntro from './video-intro';
import Feature from './feature';
import MobileConvenience from './mobile-convenience';
import Testimonials from './testimonials';
import Faqs from './faqs';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoIntro />
        <Feature />
        <MobileConvenience />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
