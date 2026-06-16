import type { Metadata } from "next";
import { Audiowide, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/i18n";
import { BookingProvider } from "@/components/booking-context";
import { BookingModal } from "@/components/booking-modal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const display = Audiowide({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FramingFuture™ — Less noise. More clarity.",
  description:
    "The premium coaching system with SEVDA™ and CortexCraft™. FramingFuture™ builds resilience and digital strength for the challenges of today and tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ink text-white">
        <LocaleProvider>
          <BookingProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <BookingModal />
          </BookingProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
