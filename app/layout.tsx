import SessionProvider from "@/components/providers/SessionProvider";
import "./globals.css";
import { Inter } from "next/font/google";
// import NextTopLoader from "nextjs-toploader";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JeMessageApp",
  description: "Messenger Clone with Next.js",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextTopLoader height={5} /> */}
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
