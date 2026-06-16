"use client";

import { useState } from "react";
import { useLocale } from "./i18n";

export function Newsletter() {
  const { t } = useLocale();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.newsletter.placeholder}
        className="flex-1 min-w-0 w-full rounded-md bg-transparent border border-white/25 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-white/60 outline-none"
      />
      <button
        type="submit"
        className="rounded-md border border-white/25 px-6 py-2.5 text-sm text-white hover:bg-white/5 transition-colors whitespace-nowrap"
      >
        {done ? t.newsletter.subscribed : t.newsletter.subscribe}
      </button>
    </form>
  );
}
