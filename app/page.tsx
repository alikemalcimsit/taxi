import Hero from "@/features/hero/Hero";
import Services from "@/features/hizmetler/Services";
import Testimonials from "@/features/testimonials/Testimonials";
import Fleet from "@/features/fleet/Fleet";
import Professional from "@/features/professional/Professional";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Professional />
      <Fleet />
      <Testimonials />

    </>
  );
}
