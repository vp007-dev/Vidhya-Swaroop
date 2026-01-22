import { motion } from "framer-motion";
import { Heart, Users, Home, BookOpen, Stethoscope, ArrowRight, Target, Sparkles, Gift, HandHeart, GraduationCap, HeartPulse } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingElements } from "@/components/illustrations/FloatingElements";

const campaigns = [
  {
    id: "donation-drive",
    icon: Gift,
    title: "Daan Mahotsava (Every Year)",
    subtitle: "Spreading Hope & Resources (Since 2022, Every 8th December)",
    description: "Our donation drives are at the heart of our community outreach. We organize regular collection and distribution events to ensure essential items reach those who need them most.",
    color: "from-amber-500 to-orange-600",
    bgColor: "from-amber-50 to-orange-50",
    details: [
      "Collection of clothes, food items, and educational materials",
      "Festive season special drives during Diwali, Eid, and Christmas",
      "Monthly distribution camps in underprivileged areas",
      "Partnership with local businesses for bulk donations",
      "Emergency relief drives during natural calamities",
      "School kit distribution for underprivileged children",
    ],
    impact: {
      number: "4867+",
      label: "Items Donated",
    },
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/Donation.jpeg",
  },
  {
    id: "health-education",
    icon: HeartPulse,
    title: "Siksha Sang Sehat, Sahas",
    subtitle: "Empowering Women Through Knowledge",
    description: "We conduct specialized awareness programs focusing on women's health and the importance of education. These sessions are designed to break taboos and empower women with essential knowledge.",
    color: "from-rose-500 to-pink-600",
    bgColor: "from-rose-50 to-pink-50",
    details: [
      "Menstrual hygiene awareness and sanitary pad distribution",
      "Reproductive health education sessions",
      "Breast cancer and cervical cancer awareness camps",
      "Nutrition and diet counseling for women and girls",
      "Mental health awareness and stress management workshops",
      "Importance of education for girls - motivational sessions",
    ],
    impact: {
      number: "500+",
      label: "Women Educated",
    },
    image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/SSS.jpeg",
  },
  {
    id: "home-visits",
    icon: Home,
    title: "Home Visits - Education Awareness",
    subtitle: "Reaching Every Doorstep",
    description: "Our dedicated volunteers visit homes in underprivileged areas to educate families about the importance of education. We believe change starts at home, and every family deserves to understand how education can transform their children's future.",
    color: "from-teal-500 to-emerald-600",
    bgColor: "from-teal-50 to-emerald-50",
    details: [
      "Door-to-door visits in slum areas and rural villages",
      "Counseling parents about the benefits of schooling",
      "Identifying out-of-school children and enrolling them",
      "Understanding family challenges and providing solutions",
      "Follow-up visits to ensure children continue education",
      "Connecting families with government education schemes",
    ],
    impact: {
      number: "200+",
      label: "Families Reached",
    },
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
];

const upcomingEvents = [
  {
    title: "Daan Mahotsava",
    date: "Every 8th December",
    location: "Multiple Locations",
    description: "Join our biggest donation drive of the year",
  },
  {
    title: "Siksha Sang Sehat, Sahas (SSS)",
    date: "8th March, 2026",
    location: "Community Center",
    description: "Free health checkups and awareness on International Women's Day",
  },
  {
    title: "Education Enrollment Drive",
    date: "10th April, 2026",
    location: "Various Villages",
    description: "Enrolling children for the new academic session",
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

export default function Campaigns() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-mesh flex items-center">
        <FloatingElements variant="mixed" />
        <div className="hidden sm:block absolute top-10 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary/20 to-amber-400/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal-400/20 to-emerald-500/20 blob animate-float-delayed blur-3xl" />

        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Making a Difference</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary via-amber-500 to-teal-500 bg-clip-text text-transparent">
                  Campaigns
                </span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                Targeted initiatives designed to create lasting impact in education, health awareness, and community welfare.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 shine shadow-xl shadow-primary/25">
                  <Link to="/support">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Support a Campaign
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 border-2">
                  <Link to="/contact">
                    Volunteer With Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Active Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Campaigns</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each campaign is thoughtfully designed to address specific community needs
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-20">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${campaign.color} opacity-20`} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm">
                        <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${campaign.color} bg-clip-text text-transparent`}>
                          {campaign.impact.number}
                        </div>
                        <div className="text-sm text-muted-foreground">{campaign.impact.label}</div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className={`absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br ${campaign.color} opacity-20`} />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${campaign.bgColor} border border-border mb-4`}>
                    <campaign.icon className={`h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-r ${campaign.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{campaign.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{campaign.description}</p>

                  <div className="space-y-3 mb-8">
                    {campaign.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${campaign.color} flex items-center justify-center shrink-0 mt-0.5`}>
                          <ArrowRight className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm sm:text-base text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className={`rounded-full px-6 bg-gradient-to-r ${campaign.color} hover:opacity-90 shadow-lg`}>
                    <Link to="/support">
                      <HandHeart className="h-4 w-4 mr-2" />
                      Support This Campaign
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Mark Your Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us in making these events successful
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                variants={item}
                className="group p-6 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                  <span>📅</span>
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>📍</span>
                  {event.location}
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <HandHeart className="h-12 w-12 sm:h-16 sm:w-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Be Part of the Change
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8">
              Whether you donate, volunteer, or spread the word – every action counts. Join our campaigns and help us create a better tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90 shadow-xl">
                <Link to="/support">
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
