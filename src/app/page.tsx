import { Hero } from "@/components/sections/hero";
import { LogoShowcase } from "@/components/sections/logo-showcase";
import { Mission } from "@/components/sections/mission";
import { Founder } from "@/components/sections/founder";
import { Pillars } from "@/components/sections/pillars";
import { Why } from "@/components/sections/why";
import { Audiences } from "@/components/sections/audiences";
import { IcfCircle } from "@/components/sections/icf-circle";
import { SiteCta } from "@/components/sections/site-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoShowcase />
      <Mission />
      <Founder />
      <Pillars />
      <Why />
      <Audiences />
      <IcfCircle />
      <SiteCta />
    </>
  );
}
