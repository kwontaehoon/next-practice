'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
            <div>common header</div>

            {children}</body>
        </html>
      </QueryClientProvider>
  );
}