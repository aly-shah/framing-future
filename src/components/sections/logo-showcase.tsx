import { LogoMark } from "@/components/logo";

export function LogoShowcase() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x flex justify-center">
        <div className="relative">
          <LogoMark className="relative w-28 h-28 md:w-40 md:h-40 object-contain" />
        </div>
      </div>
    </section>
  );
}
