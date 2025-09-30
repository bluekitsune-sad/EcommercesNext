import "../styles/globals.css";
import localFont from "next/font/local";

const pixelFont = localFont({
  src: "./fonts/pixelFont/JunMono.otf",
  variable: "--font-junmono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Page",
  description: "this is a practice ecommerce project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
