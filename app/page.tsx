import { HeroSection } from '@/components/hero-section';
import { PracticeAreas } from '@/components/practice-areas';
import { Testimonials } from '@/components/testimonials';
import { Achievements } from '@/components/achievements';
import { Newsletter } from '@/components/newsletter';
import { Gallery } from '@/components/gallery';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PracticeAreas />
      <Gallery />
      <Testimonials />
      <Achievements />
      <Newsletter />
    </div>
  );
}