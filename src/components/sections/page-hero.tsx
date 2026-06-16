export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative bg-ink overflow-hidden border-b border-line">
      <div className="container-x relative pt-36 pb-16 md:pt-44 md:pb-20 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white max-w-3xl mx-auto leading-tight animate-fade-up">
          {title}
        </h1>
        <p className="text-lg text-white/60 mt-5 max-w-2xl mx-auto animate-fade-up">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
