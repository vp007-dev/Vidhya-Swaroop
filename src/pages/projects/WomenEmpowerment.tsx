import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Users, Heart, Monitor, Scissors, Smartphone, Music, Palette, Target, CheckCircle, Sparkles, Briefcase, Camera } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedWomanIllustration } from "@/components/illustrations/AnimatedWomanIllustration";
import { FloatingElements } from "@/components/illustrations/FloatingElements";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { WomenEmpowermentIcon } from "@/components/icons/CustomIcons";

const programs = [
  {
    icon: Monitor,
    title: "Computer Education",
    description: "Digital literacy and work-from-home opportunities",
    items: ["MS Office", "Internet & email", "Online safety", "Freelancing basics"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: Scissors,
    title: "Tailoring & Stitching",
    description: "Income-generating skills for self-employment",
    items: ["Advanced stitching", "Fashion designing", "Business guidance", "Machine handling"],
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-50 to-pink-50",
  },
  {
    icon: Smartphone,
    title: "Digital Marketing",
    description: "Modern entrepreneurship skills",
    items: ["Social media", "Content creation", "Online promotion", "Freelancing"],
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: Music,
    title: "Classical Music",
    description: "Cultural expression and confidence",
    items: ["Voice training", "Rhythm basics", "Indian classical", "Performance skills"],
    color: "from-violet-500 to-purple-600",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    icon: Palette,
    title: "Painting & Arts",
    description: "Creative expression and healing",
    items: ["Drawing techniques", "Color theory", "Art therapy", "Creative expression"],
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
  },
];

const empowermentPillars = [
  { icon: Briefcase, label: "Economic Independence", desc: "Financial self-reliance through skills" },
  { icon: Monitor, label: "Digital Confidence", desc: "Navigate the digital world" },
  { icon: Sparkles, label: "Creative Skills", desc: "Express through art & music" },
  { icon: Heart, label: "Well-being", desc: "Physical & mental health" },
  { icon: Users, label: "Social Confidence", desc: "Leadership & community" },
];

const outcomes = [
  "Confident decision-makers",
  "Skilled professionals",
  "Role models for families",
  "Active contributors to society",
];

// Placeholder gallery images - replace with actual empowerment program images
const empowermentGallery = [
  { src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.08%20PM.jpeg", alt: "" },
  { src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.11%20PM.jpeg", alt: "" },
  { src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.13%20PM.jpeg", alt: "" },
  { src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.14%20PM.jpeg", alt: "" },
  { src: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/women.jpeg", alt: "" },
];

const WomenEmpowerment = memo(() => {
  const fadeInVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-mesh flex items-center">
        <FloatingElements variant="empowerment" />
        <div className="hidden sm:block absolute top-10 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-rose-400/20 to-pink-500/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-violet-400/20 to-purple-500/20 blob animate-float-delayed blur-3xl" />
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[320px] opacity-80">
          <AnimatedWomanIllustration />
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-4xl">
            <motion.div {...fadeInVariants}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4 sm:mb-6">
                <WomenEmpowermentIcon className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Women Empowerment</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Skills for{" "}
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Independence</span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
                Empowering women through education, vocational skills, and self-confidence. 
                Because empowered women build empowered families and communities.
              </p>

              <Button asChild size="lg" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 shine shadow-xl shadow-primary/25">
                <Link to="/support">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Support This Cause
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-600 text-sm font-semibold mb-4">
              Programs
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Skill-Based Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practical, hands-on training designed to create financial independence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 rounded-3xl bg-gradient-to-br ${program.bgColor} border border-border/50 hover:border-rose-500/30 transition-all card-hover relative overflow-hidden`}
              >
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <program.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-white/80 text-xs font-medium text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowerment Pillars */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Holistic Approach
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">5 Pillars of Empowerment</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {empowermentPillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <pillar.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{pillar.label}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl" />
              <div className="relative text-center">
                <Sparkles className="h-12 w-12 text-rose-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-6">Women Become</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-rose-100">
                      <CheckCircle className="h-5 w-5 text-rose-500 shrink-0" />
                      <span className="font-medium text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-600 text-sm font-semibold mb-4">
              <Camera className="inline h-4 w-4 mr-2" />
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Empowerment in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Women learning, growing, and achieving independence
            </p>
          </motion.div>
          <GalleryGrid images={empowermentGallery} displayCount={6} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Empowerment is About Dignity & Self-Worth
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Help every woman realize her true potential through education and skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-rose-600 hover:bg-white/90 shadow-xl">
                <Link to="/support">
                  <Heart className="h-5 w-5 mr-2" />
                  Support Women
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-black hover:bg-white/10">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
});

WomenEmpowerment.displayName = 'WomenEmpowerment';

export default WomenEmpowerment;
