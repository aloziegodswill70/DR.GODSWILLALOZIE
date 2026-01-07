export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-300">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-glow1 mb-2">About Me</h3>
          <p className="text-sm leading-relaxed">
            I am Dr. Godswill Alozie — Optometrist, Web Developer, and 
            Health Tech Innovator helping people see better and businesses grow digitally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-glow1 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/services" className="hover:text-glow1">Services</a></li>
            <li><a href="/projects" className="hover:text-glow1">Projects</a></li>
            <li><a href="/contact" className="hover:text-glow1">Contact</a></li>
            <li><a href="/dr-godswillalozie" className="hover:text-glow1">Dr Godswill Alozie</a></li>
            <li><a href="/partnership" className="hover:text-glow1">Partner with us</a></li>
            <li><a href="/eye-care" className="hover:text-glow1">Eye Love You</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-glow1 mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="https://wa.me/2347067208592" className="hover:text-glow1">WhatsApp</a></li>
            <li><a href="https://facebook.com" className="hover:text-glow1">Facebook</a></li>
            <li><a href="https://instagram.com" className="hover:text-glow1">Instagram</a></li>
            <li><a href="mailto:draloziegodswill@gmail.com" className="hover:text-glow1">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Dr. Godswill Alozie — Crafted with ❤️
      </div>
    </footer>
  );
}
