import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EB_Garamond } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ["latin"],
  weight: [ '400', '500', '600', '700', '800', ],
})

export const metadata = {
  title: "Vulpine",
  description: "Best place to hire professional Bartenders",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.ico',
        href: '/favicon-light.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'favicon-dark.ico',
        href: 'favicon-dark.ico'
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${garamond.variable} font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
