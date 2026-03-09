import { Providers } from "@/components/providers";
import { getSiteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Gustavo Andrade — Desenvolvimento premium de sites e sistemas",
    template: "%s — Gustavo Andrade",
  },
  description:
    "Sites, landing pages e sistemas com performance, UX e engenharia de verdade. Next.js, Firebase e automações sob medida. Vamos conversar.",
  applicationName: "Gustavo Andrade — Portfólio",
  alternates: { canonical: "/" },
  authors: [{ name: "Gustavo Andrade" }],
  creator: "Gustavo Andrade",
  openGraph: {
    title: "Gustavo Andrade — Desenvolvimento premium",
    description:
    "Vitrine de projetos e serviços com foco em performance, UX e conversão. Contrate desenvolvimento de sites e sistemas.",
    url: "/",
    siteName: "Gustavo Andrade",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/icon", alt: "Gustavo Andrade — Portfólio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Andrade — Desenvolvimento premium",
    description:
      "Vitrine de projetos e serviços com foco em performance, UX e conversão.",
    images: ["/icon"],
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
        className={`${plusJakarta.variable} ${fraunces.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
