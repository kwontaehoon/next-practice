'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from './Header'
import tw from "twin.macro";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <div css={tw`h-16`}/>
            {children}
          </body>
        </html>
      </QueryClientProvider>
  );
}
