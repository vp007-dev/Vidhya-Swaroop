import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Heart, Palette, Music, Baby, Calculator, Globe, PenTool, ArrowRight, Sparkles, Camera } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedEducationIllustration } from "@/components/illustrations/AnimatedEducationIllustration";
import { FloatingElements } from "@/components/illustrations/FloatingElements";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { EducationIcon } from "@/components/icons/CustomIcons";

const classes = ["Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V"];

const subjects = [
  { icon: PenTool, name: "English", desc: "Reading, writing, phonics, vocabulary, spoken English", color: "from-blue-500 to-indigo-600" },
  { icon: BookOpen, name: "Hindi", desc: "Reading, writing, grammar, comprehension", color: "from-orange-500 to-red-600" },
  { icon: Calculator, name: "Mathematics", desc: "Numbers, arithmetic, problem-solving, logical thinking", color: "from-emerald-500 to-teal-600" },
  { icon: Globe, name: "EVS", desc: "Nature, society, science basics, civic sense", color: "from-violet-500 to-purple-600" },
];

const additionalAreas = [
  { icon: BookOpen, name: "General Knowledge" },
  { icon: Heart, name: "Moral Values" },
  { icon: Palette, name: "Art & Craft" },
  { icon: Music, name: "Creative Expression" },
  { icon: GraduationCap, name: "Computer Basics" },
];

const teachingMethods = [
  "Storytelling & role-play",
  "Visual aids & charts",
  "Hands-on activities",
  "Group discussions",
  "Games-based learning",
  "Regular practice",
];

// Placeholder gallery images - replace with actual education program images
const educationGallery = [
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.10%20PM.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.11%20PM%20(1).jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.14%20PM%20(1).jpeg", alt: " " },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/Class.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/class2.jpeg", alt: "" },
];

const Education = memo(() => {
  const fadeInVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);
  return (
    <Layout>
      {/* Hero Section - Modern Asymmetric */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-mesh flex items-center">
        <FloatingElements variant="education" />
        <div className="hidden sm:block absolute top-10 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-violet-400/20 to-purple-500/20 blob animate-float-delayed blur-3xl" />
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[320px] opacity-80">
          <AnimatedEducationIllustration />
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-4xl">
            <motion.div {...fadeInVariants}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6">
                <EducationIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Education Program</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Laugh & Learn{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">School</span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
                Building strong foundations through joyful learning.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Card */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide quality, inclusive, and value-based education that nurtures curiosity, confidence, 
                  creativity, and compassion in young learners—especially children from underserved communities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Subjects - Bento Grid */}
      
      {/* Teaching Methods */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Methodology
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">Learn with Joy Approach</h2>
              <p className="text-muted-foreground mb-8">
                Our teaching is child-centric, activity-based, and emotionally supportive. 
                We focus on clear understanding of concepts, not rote learning.
              </p>
              <blockquote className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary italic text-foreground">
                "Children learn best when they feel safe, happy, and encouraged."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {teachingMethods.map((method, i) => (
                <div
                  key={method}
                  className="p-4 rounded-2xl bg-background border border-border flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{method}</span>
                </div>
              ))}
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-semibold mb-4">
              <Camera className="inline h-4 w-4 mr-2" />
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpses from our classrooms and learning activities
            </p>
          </motion.div>
          <GalleryGrid images={educationGallery} displayCount={6} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Education at the Cost of Chips
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join us in shaping young minds and building a brighter future for society.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-blue-600 hover:bg-white/90 shadow-xl">
                <Link to="/support">
                  <Heart className="h-5 w-5 mr-2" />
                  Support Education
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

Education.displayName = 'Education';

export default Education;
