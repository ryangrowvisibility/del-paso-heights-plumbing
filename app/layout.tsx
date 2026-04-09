import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Del Paso Heights Plumbing | Sacramento Emergency Plumber",
  description:
    "Sacramento's near-24/7 plumber. Del Paso Heights Plumbing — water heaters, pipe repair, drain clearing, and more. Call Colby at (916) 769-0414.",
  keywords:
    "plumber Sacramento, emergency plumber Sacramento, water heater Sacramento, drain clearing Sacramento, Del Paso Heights Plumbing",
  openGraph: {
    title: "Del Paso Heights Plumbing | Sacramento Emergency Plumber",
    description:
      "Near-24/7 plumbing in Sacramento. Water heaters, pipes, drains. Call (916) 769-0414.",
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
    <html lang="en">
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
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "07:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "00:00",
                },
              ],
              areaServed: ["Sacramento, CA", "Del Paso Heights, CA"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
