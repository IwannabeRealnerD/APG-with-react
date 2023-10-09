import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "a11y-with-nextjs",
  description: "A11Y practicing page with next.js 13 app directory",
};

const font = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
