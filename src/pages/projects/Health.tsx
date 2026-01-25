import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Stethoscope, Heart, Target, Activity, Pill, BookOpen, Users, Home, Sprout, HandHeart, Award, CheckCircle, Syringe, SmilePlus, ShieldCheck, Camera } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedHealthIllustration } from "@/components/illustrations/AnimatedHealthIllustration";
import { FloatingElements } from "@/components/illustrations/FloatingElements";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { HealthcareIcon } from "@/components/icons/CustomIcons";

const campaigns = [
  {
    icon: Stethoscope,
    title: "Health Checkup",
    description: "Comprehensive health screening camps providing blood pressure monitoring, blood sugar testing, BMI assessment, and general physical examination.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: SmilePlus,
    title: "Dental Checkup",
    description: "Free dental examination and awareness camps focusing on oral hygiene, cavity prevention, and basic dental care education for communities.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Syringe,
    title: "Polio Drop",
    description: "Supporting national polio eradication initiatives by organizing polio immunization drives for children in underserved areas.",
    color: "from-violet-500 to-purple-600",
  },
];

const services = [
  {
    icon: Stethoscope,
    title: "Health Screening",
    items: ["Blood pressure", "Blood sugar", "BMI assessment", "Oxygen levels"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Tests",
    items: ["Hemoglobin test", "Vision screening", "Physical examination", "Health assessment"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Consultation",
    items: ["Doctor consultation", "Lifestyle guidance", "Hospital referrals", "Follow-up care"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Pill,
    title: "Medicine",
    items: ["Free medicines", "Supplements", "Prescription guidance", "Nutrition advice"],
    color: "from-rose-500 to-pink-600",
  },
];

const beneficiaries = [
  { icon: Home, label: "Underserved communities" },
  { icon: Users, label: "Women & children" },
  { icon: Heart, label: "Senior citizens" },
  { icon: HandHeart, label: "Low-income families" },
];

const impacts = [
  { number: "500+", label: "People Served" },
  { number: "10+", label: "Health Camps" },
  { number: "100%", label: "Free Service" },
  { number: "50+", label: "Volunteers" },
];

// Placeholder gallery images - replace with actual health camp images
// remove alt text like "Health camp photo 1" and add meaningful descriptions

const healthGallery = [
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.16%20PM.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.15%20PM.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/WhatsApp%20Image%202026-01-14%20at%204.37.20%20PM.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/health.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/health1.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/health2.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/health3.jpeg", alt: "" },
  { src: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/health4.jpeg", alt: "" },
];

const Health = memo(() => {
  const fadeInVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-mesh flex items-center">
        <FloatingElements variant="health" />
        <div className="hidden sm:block absolute top-10 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 blob animate-float-delayed blur-3xl" />
        {/* Animated Illustration */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[350px] opacity-80">
          <AnimatedHealthIllustration />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-4xl">
            <motion.div {...fadeInVariants}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 sm:mb-6">
                <HealthcareIcon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Healthcare Program</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Health Check-Up{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Camps</span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
                Promoting preventive healthcare for a healthier community. Free, accessible medical services for those who need it most.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {impacts.map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur border border-border text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary">{item.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Campaigns
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Health Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focused healthcare campaigns addressing critical community health needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {campaigns.map((campaign, i) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 sm:p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-all card-hover text-center"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${campaign.color} flex items-center justify-center mb-5 sm:mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform`}>
                  <campaign.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{campaign.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{campaign.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">
              Services
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services with qualified doctors and healthcare professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-background border border-border hover:border-emerald-500/30 transition-all card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Our Focus
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">Who We Serve</h2>
              <p className="text-muted-foreground mb-8">
                Access to basic healthcare is a fundamental right. We bridge the gap by providing 
                free, accessible, and preventive healthcare services to communities that need them most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {beneficiaries.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                <Sprout className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Long-Term Impact</h3>
                <ul className="space-y-3">
                  {[
                    "Reduce preventable illnesses",
                    "Improve health-seeking behavior",
                    "Create early diagnosis awareness",
                    "Promote preventive healthcare culture"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-semibold mb-4">
              <Camera className="inline h-4 w-4 mr-2" />
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Healthcare in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Moments from our health camps and medical outreach
            </p>
          </motion.div>
          <GalleryGrid images={healthGallery} displayCount={6} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
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
              Good Health is a Right, Not a Privilege
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Help us deliver compassionate healthcare to those left behind due to lack of access.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-emerald-600 hover:bg-white/90 shadow-xl">
                <Link to="/support">
                  <Heart className="h-5 w-5 mr-2" />
                  Support Healthcare
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

Health.displayName = 'Health';

export default Health;
