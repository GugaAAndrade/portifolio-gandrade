import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "Gustavo Andrade — Desenvolvimento premium de sites e sistemas",
    template: "%s — Gustavo Andrade",
  },
  description:
    "Sites, landing pages e sistemas com performance, UX e engenharia de verdade. Next.js, Firebase e automações sob medida. Vamos conversar.",
  applicationName: "Gustavo Andrade — Portfólio",
  openGraph: {
    title: "Gustavo Andrade — Desenvolvimento premium",
    description:
      "Vitrine de projetos e serviços com foco em performance, UX e conversão. Contrate desenvolvimento de sites e sistemas.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
