import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sifat",
  description: "A modern learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Iceland&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className=" ">
        <Navbar />
        <main className=" ">{children}</main>
      </body>
    </html>
  );
}
