import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
};

/** FramingFuture™ brand mark — the supplied logo.webp asset. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.webp"
      alt="FramingFuture™"
      width={73}
      height={72}
      priority
      className={className}
    />
  );
}

export function Logo({
  className = "",
  variant = "light",
  showText = true,
}: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="w-7 h-7 shrink-0 object-contain" />
      {showText && (
        <span className={`font-display text-base tracking-tight ${text}`}>
          FramingFuture
          <sup className="text-[0.55em] align-super ml-0.5">™</sup>
        </span>
      )}
    </span>
  );
}
