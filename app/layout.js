import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Aslan Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen max-h-screen flex-col">
          <Nav />
          <div className="bg-page text-default-text flex-grow overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
