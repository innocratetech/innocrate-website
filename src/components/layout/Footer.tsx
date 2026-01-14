import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Process", path: "/process" },
    { name: "Work", path: "/work" },
  ],
  services: [
    { name: "Full Stack Development", path: "/services#fullstack" },
    { name: "AI / ML Solutions", path: "/services#ai" },
    { name: "UI/UX Design", path: "/services#design" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/innocrate.tech/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/innocrate-tech/" },
  { name: "Email", icon: Mail, href: "mailto:innocrate.tech@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="cta-section">
      <div className="container-wide py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img 
                src={logoIcon} 
                alt="InnoCrate" 
                className="h-8 w-8" 
              />
              <span className="text-xl font-bold text-white">InnoCrate</span>
            </Link>
            <p className="mt-4 text-white/70 max-w-md text-sm leading-relaxed">
              Product Engineering & AI Solutions for modern businesses. We partner 
              with startups and growing teams to build reliable digital products.
            </p>
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © 2025 InnoCrate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
