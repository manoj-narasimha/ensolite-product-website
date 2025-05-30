import { Projects } from "@/components/main/landing/Projects";
import { Hero } from '@/components/main/landing/Hero';
import { Clients } from "@/components/main/landing/Clients";
import { Services } from "@/components/main/landing/Services";
import { HowItWorks } from "@/components/main/landing/HowItWorks";
import { Testimonials } from "@/components/main/landing/Testimonials";
import { FAQS } from "@/components/main/landing/FAQS";
import GetInTouch from "@/components/main/landing/GetInTouch";


export default function Home() {
  return (
    <main className="h-full w-full">
      
      <Hero />
      <Clients />
      <Projects />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQS />
      <GetInTouch />
    </main>
  );
}
