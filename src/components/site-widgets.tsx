"use client";

import Script from "next/script";

// FramingFuture™ WhatsApp business number (digits only, intl format)
const WHATSAPP = "4915202339664";
// TinyTalk bot — from the existing FramingFuture TinyTalk account
const TINYTALK_BOT_ID = "dab5c32d-e472-4fc6-b748-29140139d3e2";

export function SiteWidgets() {
  return (
    <>
      {/* TinyTalk AI chat widget (renders its own bubble) */}
      <Script
        src="https://cdn.tinytalk.ai/latest/tiny-talk-sdk.min.umd.js"
        data-tiny-bot-id={TINYTALK_BOT_ID}
        strategy="afterInteractive"
      />

      {/* WhatsApp click-to-chat (stacked above the chat bubble) */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-[80] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff" aria-hidden>
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.5 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7.7.7-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5.9 9.6 10.5 5 16 5s10.1 4.6 10.1 10.2S21.5 24.8 16 24.8zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </a>
    </>
  );
}
