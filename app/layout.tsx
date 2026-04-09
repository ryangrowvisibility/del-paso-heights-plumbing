import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Del Paso Heights Plumbing | Sacramento Emergency Plumber — Nearly 24/7",
  description:
    "Sacramento's near-24/7 plumber. Del Paso Heights Plumbing — water heaters, pipe repair, drain clearing, and more. Led by Colby. Call (916) 769-0414.",
  keywords:
    "plumber Sacramento, emergency plumber Sacramento, 24 hour plumber Sacramento, water heater Sacramento, drain clearing Sacramento, Del Paso Heights Plumbing",
  openGraph: {
    title: "Del Paso Heights Plumbing | Nearly 24/7 Emergency Plumber",
    description:
      "Near-24/7 plumbing in Sacramento. Thorough, detail-oriented service led by Colby. Call (916) 769-0414.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Del Paso Heights Plumbing",
              telephone: "(916) 769-0414",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3135 Del Paso Blvd",
                addressLocality: "Sacramento",
                addressRegion: "CA",
                postalCode: "95815",
                addressCountry: "US",
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "00:00",
                  closes: "07:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "08:00",
                  closes: "00:00",
                },
              ],
              areaServed: ["Sacramento, CA", "Del Paso Heights, CA"],
            }),
          }}
        />
      </head>
      <body
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
