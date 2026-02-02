import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  EducationIcon,
  WomenEmpowermentIcon,
  HealthcareIcon
} from "@/components/icons/CustomIcons";
import logo from "@/assets/logo.jpg";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "#",
    children: [
      { name: "Education", href: "/projects/education", icon: EducationIcon },
      { name: "Women Skill Development", href: "/projects/women-empowerment", icon: WomenEmpowermentIcon },
      { name: "Healthcare", href: "/projects/health", icon: HealthcareIcon },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <nav className="container px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">

            {/* --- Logo Area --- */}
            <Link to="/" className="flex items-center gap-3 group z-50">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={logo}
                  alt="Vidhya Swaroop Foundation"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover shadow-lg border border-border/20"
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-background"></span>
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-base sm:text-lg font-bold text-foreground leading-tight tracking-tight">
                  Vidhya Swaroop
                </span>
                <span className="block text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Foundation
                </span>
              </div>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => {
                const isItemActive = item.href === location.pathname || item.children?.some(c => c.href === location.pathname);

                return (
                  <div key={item.name} className="relative group">
                    {item.children ? (
                      // Dropdown Parent
                      <button
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isItemActive ? "text-primary bg-primary/10" : "text-foreground hover:bg-secondary/80"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-180" />
                      </button>
                    ) : (
                      // Regular Link
                      <Link
                        to={item.href}
                        onMouseEnter={() => setHoveredPath(item.href)}
                        onMouseLeave={() => setHoveredPath(null)}
                        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive(item.href) ? "text-primary font-semibold" : "text-foreground hover:text-foreground/80"
                          }`}
                      >
                        {item.name}
                        {/* Subtle hover pill animation */}
                        {item.href === hoveredPath && (
                          <motion.div
                            layoutId="navbar-hover"
                            className="absolute inset-0 bg-secondary rounded-full -z-10"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    )}

                    {/* Desktop Dropdown Content */}
                    {item.children && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform origin-top hover:translate-y-0 translate-y-2">
                        <div className="bg-popover/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl p-2 min-w-[260px] ring-1 ring-black/5">
                          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Programs
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`group/item flex items-center gap-3 px-3 py-3 rounded-xl transition-all hover:bg-secondary/80 ${isActive(child.href) ? "bg-secondary" : ""
                                }`}
                            >
                              <div className={`p-2 rounded-lg bg-background border border-border/50 shadow-sm transition-colors group-hover/item:border-primary/30 ${isActive(child.href) ? "text-primary" : "text-muted-foreground group-hover/item:text-primary"}`}>
                                <child.icon className="h-5 w-5" />
                              </div>
                              <span className={`text-sm font-medium ${isActive(child.href) ? "text-primary" : "text-foreground group-hover/item:text-foreground"}`}>
                                {child.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* --- Right Actions (Desktop) --- */}
            <div className="flex items-center gap-3">
              {/* Volunteer Button - Desktop (Original Style Kept) */}
              <Button asChild className="hidden sm:flex rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all shine bg-secondary text-secondary-foreground hover:bg-secondary/80">
                <Link to="/contact">
                  <HandHeart className="h-4 w-4 mr-2" />
                  Volunteer
                </Link>
              </Button>

              {/* Donate Button - Desktop (Original Style Kept) */}
              <Button asChild className="hidden sm:flex rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all shine">
                <Link to="/support">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate
                </Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden relative z-10 p-2 text-foreground active:scale-90 transition-transform hover:bg-secondary rounded-xl"
                onClick={toggleMobileMenu}
                type="button"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] sm:top-[80px] bottom-0 z-[99] bg-background/95 backdrop-blur-2xl border-t border-border overflow-y-auto lg:hidden"
          >
            <div className="container px-6 py-8 pb-20 space-y-6">

              {/* Mobile Links */}
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setProjectsOpen(!projectsOpen)}
                          className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground"
                        >
                          {item.name}
                          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                          {projectsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-2 border-l-2 border-border/50 ml-2 mb-4">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={child.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 py-2 px-3 rounded-lg text-base transition-colors ${isActive(child.href) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                      }`}
                                  >
                                    <child.icon className="h-5 w-5" />
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 text-lg font-medium border-b border-border/40 last:border-0 ${isActive(item.href) ? "text-primary" : "text-foreground"
                          }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 grid grid-cols-2 gap-4"
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-12 text-base rounded-xl border-border/60 hover:bg-secondary"
                >
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <HandHeart className="h-5 w-5 mr-2" />
                    Volunteer
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/20"
                >
                  <Link to="/support" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="h-5 w-5 mr-2 fill-current" />
                    Donate
                  </Link>
                </Button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}