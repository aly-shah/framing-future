"use client";

import { useBooking } from "./booking-context";
import { useLocale } from "./i18n";

export function BookButton({
  className = "btn-primary",
  label,
}: {
  className?: string;
  label?: string;
}) {
  const { openBooking } = useBooking();
  const { t } = useLocale();
  return (
    <button onClick={openBooking} className={className}>
      {label ?? t.nav.book}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
