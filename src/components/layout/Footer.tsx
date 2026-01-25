import { Link } from "react-router-dom";
import { 
  Heart, Phone, Mail, MapPin, 
  Youtube, Facebook, Instagram, 
  ArrowUpRight, ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Education", href: "/projects/education" },
  { name: "Healthcare", href: "/projects/health" },
  { name: "Women Empowerment", href: "/projects/women-empowerment" },
];

const supportLinks = [
  { name: "Donate", href: "/support" },
  { name: "Contact Us", href: "/contact" },
  { name: "Volunteer", href: "/contact" },
];

const socials = [
  { icon: Youtube, href: "https://youtube.com/@vidhyaswaroopfoundation", label: "YouTube", color: "hover:bg-red-600 hover:text-white" },
  { icon: Facebook, href: "https://facebook.com/vidhyaswaroopfoundation", label: "Facebook", color: "hover:bg-blue-600 hover:text-white" },
  { icon: Instagram, href: "https://instagram.com/vidhyaswaroopfoundation", label: "Instagram", color: "hover:bg-pink-600 hover:text-white" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-white overflow-hidden border-t border-white/5">
      
      {/* --- Background Textures --- */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* --- Main Grid Content --- */}
        <div className="pb-16 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand + Join Mission (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Vidhya Swaroop Foundation" 
                className="h-14 w-14 rounded-2xl object-cover shadow-lg border border-white/10 group-hover:border-primary/50 transition-colors" 
              />
              <div>
                <span className="block text-xl font-bold text-white tracking-tight">Vidhya Swaroop</span>
                <span className="block text-xs font-medium text-primary uppercase tracking-widest">Foundation</span>
              </div>
            </Link>
            
            <p className="text-white/60 leading-relaxed max-w-sm">
              Empowering communities through education, healthcare, and skill development. Continuing a legacy of service for over three generations.
            </p>

            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Join Our Mission Card */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
              <div className="space-y-1">
                <h4 className="font-bold text-white flex items-center gap-2">
                  Join Our Mission <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </h4>
                <p className="text-xs text-white/50">
                  Be a part of the change. Stay updated with our latest initiatives and impact stories directly.
                </p>
              </div>
              <Button asChild className="w-full rounded-xl bg-white text-black hover:bg-white/90 group transition-all duration-300">
                <Link to="/contact">
                  Get Involved
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-primary transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-500 rounded-full" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 opacity-50 group-hover:text-teal-500 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* 80G Badge */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-primary fill-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">80G Certified</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wide">Tax Benefits Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+919528219780" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-white/40 mb-0.5 uppercase tracking-wide">Call Us</span>
                    <span className="text-white/90 font-medium group-hover:text-white transition-colors">+91 95282 19780</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info.vidhyaswaroopfoundation@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-primary/20 group-hover:text-primary transition-all shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-white/40 mb-0.5 uppercase tracking-wide">Email Us</span>
                    <span className="text-sm text-white/90 font-medium break-all group-hover:text-white transition-colors">
                      info.vidhyaswaroopfoundation@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-white/40 mb-0.5 uppercase tracking-wide">Visit Us</span>
                  <span className="text-white/90 text-sm leading-snug">
                    Agra, Uttar Pradesh,<br />India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-white/40">
              © {currentYear} Vidhya Swaroop Foundation. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/privacy" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-white/60">Registered NGO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}