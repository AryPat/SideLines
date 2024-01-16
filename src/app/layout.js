import Head from "next/head";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Sidelines",
  description: "Sidemen tinder lines in once place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
