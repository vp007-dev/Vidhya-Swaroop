import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Sparkles,
  Users,
  BookOpen,
  Stethoscope,
  Play,
  ChevronRight,
  Star,
  Zap,
  Award,
  Trophy,
  Medal,
  Crown,
  BadgeCheck,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import logo from "@/assets/logo.jpg";
import { FloatingElements } from "@/components/illustrations/FloatingElements";
import { AnimatedHeroIllustration } from "@/components/illustrations/AnimatedHeroIllustration";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { SlidingBanner } from "@/components/SlidingBanner";

// Banner slides - add your images here
const bannerSlides = [
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.08%20PM.jpeg",
    alt: "Community Care",
    title: "Vidhya Swaroop Foundation",
    subtitle: "Transforming Lives Through Education & Care",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.11%20PM.jpeg",
    alt: "Education Program",
    title: "",
    subtitle: "",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.14%20PM.jpeg",
    alt: "Health Initiative",
    title: "",
    subtitle: "",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.19%20PM.jpeg",
    alt: "Women Empowerment",
    title: "",
    subtitle: "",
  },
];

const stats = [
  { number: "3", label: "Generations", icon: Star, color: "from-amber-400 to-orange-500" },
  { number: "100+", label: "Students Taught", icon: Users, color: "from-teal-400 to-emerald-500" },
  { number: "1267+", label: "Items Donated", icon: Heart, color: "from-pink-400 to-rose-500" },
  { number: "₹0", label: "Cost Barrier", icon: Zap, color: "from-violet-400 to-purple-500" },
];

const programs = [
  {
    title: "Education",
    subtitle: "Laugh & Learn School",
    description: "NCERT-based education from Nursery to Class V with complete study materials at the cost of chips.",
    link: "/projects/education",
    icon: BookOpen,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    title: "Healthcare",
    subtitle: "Free Health Camps",
    description: "Preventive healthcare with screenings, consultations, and medicine distribution for all.",
    link: "/projects/health",
    icon: Stethoscope,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Women Skill Development",
    subtitle: "Skills & Independence",
    description: "Tailoring, computers, digital marketing, and arts training for financial independence.",
    link: "/projects/women-empowerment",
    icon: Sparkles,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
];

const galleryImages = [
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.08%20PM.jpeg",
    alt: "Community event",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.10%20PM.jpeg",
    alt: "Education program",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.10%20PM%20(1).jpeg",
    alt: "Student activities",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.11%20PM.jpeg",
    alt: "Learning moments",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.11%20PM%20(1).jpeg",
    alt: "Classroom session",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.12%20PM.jpeg",
    alt: "Community gathering",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.13%20PM.jpeg",
    alt: "Foundation event",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.14%20PM.jpeg",
    alt: "Health camp",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.14%20PM%20(1).jpeg",
    alt: "Volunteer work",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.15%20PM.jpeg",
    alt: "Student celebration",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.16%20PM.jpeg",
    alt: "Team activity",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.17%20PM.jpeg",
    alt: "Award ceremony",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.17%20PM%20(1).jpeg",
    alt: "Special event",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.18%20PM.jpeg",
    alt: "Cultural program",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.18%20PM%20(1).jpeg",
    alt: "Community support",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.19%20PM.jpeg",
    alt: "Women empowerment",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.20%20PM.jpeg",
    alt: "Training session",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.20%20PM%20(1).jpeg",
    alt: "Skill development",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.21%20PM.jpeg",
    alt: "Group photo",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.22%20PM.jpeg",
    alt: "Celebration moment",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.22%20PM%20(1).jpeg",
    alt: "Achievement day",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.23%20PM.jpeg",
    alt: "Foundation milestone",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.23%20PM%20(1).jpeg",
    alt: "Impact moment",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.23%20PM%20(2).jpeg",
    alt: "Success story",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.24%20PM.jpeg",
    alt: "Team work",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.24%20PM%20(1).jpeg",
    alt: "Community service",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.25%20PM.jpeg",
    alt: "Education impact",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.25%20PM%20(1).jpeg",
    alt: "Health initiative",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.26%20PM.jpeg",
    alt: "Foundation journey",
  },
];

const awards = [
  {
    icon: Trophy,
    title: "Karmyogi welfare society",
    organization: "",
    year: "2023",
    description: "Honoured for best social work",
    gradient: "from-amber-400 via-yellow-400 to-orange-400",
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/select.jpeg", // Add award image URL here
  },
  {
    icon: Medal,
    title: "Bhijariya Mela panckuyia",
    organization: "State Education Board",
    year: "2024",
    description:
      "Honoured her as Nari Shakti Award for her work in health sector. ",
    gradient: "from-slate-300 via-gray-300 to-zinc-400",
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/panckuyia.jpeg", // Add award image URL here
  },
  {
    icon: Crown,
    title: "Allen House School",
    organization: "Allen House School",
    year: "2025",
    description: "Honoured by the title of social activist on women's day",
    gradient: "from-rose-400 via-pink-400 to-fuchsia-400",
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/allen.jpeg", // Add award image URL here
  },
  {
    icon: Award,
    title: "Vanvasi Prakalp Sansthan",
    organization: "Vanvasi Prakalp Sansthan",
    year: "2023",
    description: "Honored for her work in education sector by Honourable Mr. S.P Singh Baghel (MP) And Mrs. Nirmala Dixit (former President of Mahila Ayog)",
    gradient: "from-teal-400 via-cyan-400 to-blue-400",
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/vanvasi.jpeg", // Add award image URL here
  },
  {
    icon: Award,
    title: "State Bank Of India Donation",
    organization: "SBI",
    year: "2025",
    description: "SBI Donates 31000/- for our students",
    gradient: "from-teal-400 via-cyan-400 to-blue-400",
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/sbidon.jpeg", // Add award image URL here
  },
  // {
  //   icon: Award,
  //   title: "State Bank Of India Selection",
  //   organization: "SBI",
  //   year: "2025",
  //   description: "SBI Selects our students for POCSO committee member.",
  //   gradient: "from-teal-400 via-cyan-400 to-blue-400",
  //   image: "", // Add award image URL here
  // },
];

const certificates = [
  {
    title: "Darpan Registered",
    number: "UP/2025/0643489", // Add certificate number here
    icon: Shield,
  },
  {
    title: "PAN",
    number: "ATMPA1618B", // Add certificate number here
    icon: Shield,
  },
  {
    title: "80G Registered",
    number: "", // Add certificate number here
    icon: Shield,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Index() {
  return (
    <Layout>
      {/* Sliding Banner Section */}
      <SlidingBanner slides={bannerSlides} autoPlayInterval={4000} />

      {/* Hero Section - Unique Asymmetric Design */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-mesh">
        <FloatingElements variant="mixed" />
        {/* Floating Shapes - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-primary/20 to-amber-400/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal/20 to-purple-400/20 blob animate-float-delayed blur-3xl" />

        <div className="container px-4 sm:px-6 lg:px-8 relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-foreground">3 Generations of Impact</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Education at the <span className="text-gradient">Cost of Chips Packet</span>
              </h1>

              {/* Certified By Section */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm font-medium text-muted-foreground">Certified by:</span>
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
                  >
                    <BadgeCheck className="h-5 w-5 text-blue-500" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{cert.title}</span>
                      {cert.number && (
                        <span className="text-xs text-muted-foreground">{cert.number}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl leading-relaxed">
                We're transforming lives by making quality education accessible to everyone. Join our mission to empower
                communities through knowledge.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base shine shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                >
                  <Link to="/support">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base group border-2"
                >
                  <Link to="/about">
                    Our Story
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Mini Stats - Hidden on mobile */}
              <div className="hidden sm:flex items-center gap-6 text-sm mt-8 sm:mt-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber-400 border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i === 4 ? "+" : "★"}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground">1000+ Lives Changed</div>
                  <div className="text-muted-foreground">Join our growing family</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Bento Grid */}
            <motion.div
              className="lg:col-span-5 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Logo Card */}
                <div className="col-span-2 p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-strong border border-border/50 shadow-xl">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={logo}
                      alt="VSF"
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-foreground">Vidhya Swaroop</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">An Educational NGO</p>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                {stats.slice(0, 2).map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-3 sm:p-5 rounded-xl sm:rounded-2xl glass border border-border/50 group hover:border-primary/30 transition-colors"
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}

                {/* Video/Play Card */}
                <div className="col-span-2 relative overflow-hidden rounded-3xl aspect-video group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                    alt="Our Impact"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-80">Watch</div>
                    <div className="font-semibold">Our Impact Story</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 55C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--card))"
            />
          </svg>
        </div>
      </section>

      {/* Programs - Modern Bento Grid */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Our Programs</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive initiatives designed to uplift and empower communities
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {programs.map((program, i) => (
              <motion.div key={program.title} variants={item}>
                <Link
                  to={program.link}
                  className={`group relative block h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${program.bgGradient} border border-border/50 overflow-hidden card-hover`}
                >
                  {/* Background Gradient Orb */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${program.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
                  />

                  <div className="relative">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <program.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>

                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 sm:mb-2">
                      {program.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      {program.description}
                    </p>

                    <span className="inline-flex items-center text-primary font-semibold text-sm sm:text-base">
                      Learn more
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section - Super Special Stage Display */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] bg-gradient-radial from-amber-500/20 via-transparent to-transparent rounded-full blur-3xl" />

          {/* Floating Orbs */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-[10%] w-20 h-20 bg-gradient-to-br from-amber-400/30 to-yellow-500/30 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 40, 0], rotate: [360, 180, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-[15%] w-32 h-32 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-[20%] w-16 h-16 bg-gradient-to-br from-teal-400/25 to-cyan-500/25 rounded-full blur-xl"
          />

          {/* Sparkle Stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header - Grand Display */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-20"
          >
            {/* Decorative Crown Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl sm:rounded-3xl rotate-6 opacity-50 blur-sm" />
              <div className="relative w-full h-full bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/50">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
              </div>
              {/* Sparkle Effects */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full blur-sm"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-300 rounded-full blur-sm"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6"
            >
              ✨ Recognition & Honors ✨
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Awards
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              Recognized for our unwavering commitment to transforming lives
            </p>
          </motion.div>

          {/* Awards Grid - Premium Cards */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${award.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                <div className="relative h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden">
                  {/* Top Shine Effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white/80">
                    {award.year}
                  </div>

                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-5 sm:mb-6"
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${award.gradient} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow`}
                    >
                      <award.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-md" />
                    </div>
                    {/* Icon Reflection */}
                    <div
                      className={`absolute -bottom-2 left-2 right-2 h-4 bg-gradient-to-br ${award.gradient} rounded-full blur-md opacity-40`}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors line-clamp-2">
                    {award.title}
                  </h3>

                  {/* Award Image */}
                  {award.image ? (
                    <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden mb-3 border border-white/10">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden mb-3 border border-white/10 bg-white/5 flex items-center justify-center">
                      <span className="text-xs text-white/30">Add image</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-white/50 font-medium mb-2">{award.organization}</p>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{award.description}</p>

                  {/* Bottom Decoration */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${award.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12 sm:mt-16"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <div className="flex -space-x-2">
                {[Trophy, Medal, Award].map((Icon, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${awards[i]?.gradient || "from-amber-400 to-orange-400"} flex items-center justify-center border-2 border-slate-900`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-white/70 text-sm font-medium">And many more recognitions...</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats - Full Width */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-foreground via-foreground to-foreground/95 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-teal/20 rounded-full blur-3xl" />

        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto px-4">
              Every number represents a life touched, a dream nurtured
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-base text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Style */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <div>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Moments of Impact</h2>
            </div>
            <Button asChild variant="outline" size="sm" className="rounded-full self-start sm:self-auto">
              <Link to="/about">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <GalleryGrid images={galleryImages} displayCount={5} />
        </div>
      </section>

      {/* CTA - Modern Glass */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-mesh">
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-br from-primary/30 via-amber-400/20 to-teal/30 rounded-full blur-3xl opacity-50" />

        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-6 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] glass-strong border border-border/50 text-center shadow-2xl">
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 sm:mb-8 shadow-xl">
                <Heart className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to Make a <span className="text-gradient">Difference?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Every contribution, big or small, helps us continue our mission. Join thousands who are already part of
                our journey.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 h-14 text-base shine shadow-xl shadow-primary/25"
                >
                  <Link to="/support">
                    <Heart className="h-5 w-5 mr-2" />
                    Support Our Cause
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-2">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-10 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  80G Tax Benefits
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Registered NGO
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  100% Transparent
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
