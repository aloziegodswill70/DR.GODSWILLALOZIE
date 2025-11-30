import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dr Godswill Alozie | Portfolio",
  description: "Optometrist • Web Developer • Health Tech Innovator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">

        {/* Animated Background Elements */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute top-10 left-5 h-40 w-40 rounded-full bg-glow1 opacity-20 blur-3xl animate-glow"></div>
          <div className="absolute bottom-20 right-5 h-32 w-32 rounded-full bg-glow2 opacity-20 blur-3xl animate-pulseSoft"></div>
          <div className="absolute top-1/2 right-1/4 h-52 w-52 rounded-full bg-glow3 opacity-10 blur-3xl animate-float"></div>
        </div>

        {/* NAVBAR */}
        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
