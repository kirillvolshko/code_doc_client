"use client";
import { metadata } from "@/lib/metadata";
import "./globals.css";
import { Provider } from "react-redux";
import { AuthProvider } from "./providers/AuthProvider";
import { store } from "@/store";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth";
  const isProjectPage = pathname?.startsWith("/project");
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body>
        <Provider store={store}>
          <AuthProvider>
            {!isAuthPage && !isProjectPage && <Header />}
            {children}
            <Toaster />
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
