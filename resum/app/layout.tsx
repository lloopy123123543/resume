import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Header from "./components/Header";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galera",
  description: "Using this website, you can create your own resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />

            <div className="gradient"></div>
            <main className="main">
              <Header></Header>
              {children}
            </main>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
