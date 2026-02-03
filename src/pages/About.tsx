import { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Target, Users, GraduationCap, HandHeart, Quote, Crown, Shield, Handshake, Calendar, X, UserCheck, Code, Terminal, Cpu, Sparkles, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StarIcon, TrophyIcon } from "@/components/icons/CustomIcons";

const inspirations = [
  { name: "Late Shri Vidhya Sagar Agarwal", description: "A visionary educator whose belief that 'every child deserves a chance to learn' continues to guide our mission." },
  { name: "Late Smt. Roopa Devi Agarwal", description: "A pillar of strength who believed that education combined with values creates stronger communities." },
];

const leadership = {
  presidents: [
    {
      name: "Mr. Vikas Agarwal",
      role: "President",
      education: "MBA, M.Com", // Added Education
      image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/vikas.jpeg",
      description: "Mr. Vikas Agarwal provides strategic leadership and financial oversight to the foundation. With expertise in corporate governance and finance, he ensures transparency, compliance, and sustainable growth, supporting the foundation’s long-term mission and social impact."
    },
    {
      name: "Mrs. Monika Agarwal",
      role: "Secretary",
      education: "MBA, M.Com , MA(ECONOMICS), B.ED, PHD pursiung", // Added Education
      image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/MonikaMam.jpeg",
      description: "Mrs. Monika Agarwal is a dedicated educationist and social worker with over 15 years of experience in the field of education and community development. She is deeply committed to strengthening foundational learning for children and actively promoting skill development programs for adults. Through her work, she focuses on holistic community upliftment by nurturing education, self-reliance, and confidence across all age groups, helping individuals build a stronger and more independent future."
    },
  ],
  trustees: [
    {
      name: "Shivani Agarwal",
      role: "Trustee",
      education: "MA(Sanskrit), B.Ed", // Added Education
      image: "https://raw.githubusercontent.com/vp007-dev/community-care-hub/refs/heads/main/src/assets/Shivani.jpeg",
      description: "Mrs. Shivani Agrawal is a committed educationist and trustee who brings strong academic knowledge and value-based learning to the foundation. With expertise in Sanskrit and education, she supports moral education, curriculum guidance, and holistic student development."
    },
    {
      name: "Sakshi Agarwal",
      role: "Trustee",
      education: "MBA (HR)", // Added Education
      image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/Sakshi.jpeg",
      description: "Mrs. Sakshi Agarwal contributes her expertise in human resources to support organizational development and people management within the foundation. She plays an active role in strengthening team coordination, volunteer engagement, and capacity building to ensure smooth and effective operations."
    },
  ],
};

const communityMembers = [
  { name: "CA Shivam Agarwal", role: " Financial Advisor" },
  { name: "Ms. Seema Agarwal", role: "Educationist" },
  { name: "MR. Anand Agarwal", role: "Planning Advisor" },
  { name: "Ms. Shashi Goyal", role: "District Coordinator" },
  { name: "Ms. Surbhi Aggrrawal", role: "Cultural Activity Incharge" },
  { name: "Dr. Nidhi Agarwal", role: "Educationist" },
  { name: "Lucky Mittal", role: "Member" },
  { name: "Sneha Garg", role: "Member" },
  { name: "Supriya Khandelwal", role: "Member" },
];
const developers = [
  {
    name: "Vansh Pandey",
    role: "Lead Developer",
    email: "vanshpandey928@gmail.com",
    image: "https://raw.githubusercontent.com/YashAgr-dev/Private-data/refs/heads/main/vp.jpeg"
  },
  {
    name: "Yash Agarwal",
    role: "Developer",
    email: "yashagr850@gmail.com",
    image: "https://raw.githubusercontent.com/YashAgr-dev/Private-data/refs/heads/main/ya.jpeg"
  },
  {
    name: "Shivika",
    role: "Designer & Developer",
    email: "shivika@example.com",
    image: "https://raw.githubusercontent.com/YashAgr-dev/Private-data/refs/heads/main/Shivika.jpeg"
  },
];

const supporters = [
  { name: "Apollo Clinic Agra", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/Apollo.jpg", description: "Apollo Clinic Agra is a multi-speciality outpatient healthcare center offering expert consultations, diagnostics, and preventive health services." },
  { name: "Bharat Vikas Parishad Annapurna", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/Annapurna.png", description: "A leading organization dedicated to national development through education, health, and social service initiatives across India." },
  { name: "India Rising", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/indiarising.png", description: "Empowering communities through sustainable development programs, skill training, and grassroots social transformation." },
  { name: "Seth M.R. Jaipuria School", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/jaipuria.jpg", description: "It emphasizes holistic development through modern teaching methods, co-curricular activities, and a student-centric approach" },
  { name: "Lions Club Supreme", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/lionsking.jpeg", description: "International humanitarian organization serving communities through vision care, hunger relief, and youth programs." },
];

const purposes = [
  { icon: HandHeart, title: "Affordable Education", desc: "Remove financial barriers to education" },
  { icon: Users, title: "Empower Communities", desc: "Transform lives through skill development" },
  { icon: GraduationCap, title: "Nurture Minds", desc: "Quality early education with support" },
  { icon: Target, title: "Serve with Compassion", desc: "Create lasting impact through service" },
];

const About = memo(() => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = useCallback((member) => {
    setSelectedMember(member);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] overflow-hidden bg-mesh flex items-center">
        <div className="hidden sm:block absolute top-10 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary/20 to-amber-500/20 blob animate-float blur-3xl" />
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-foreground">About Us</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground px-4 mb-4">3 generations of service, transforming lives through education</p>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Established in 2021</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20">
            <p className="text-lg sm:text-2xl font-medium text-foreground text-center leading-relaxed">
              At Vidhya Swaroop Foundation, we believe education should be accessible to everyone—
              <span className="text-primary font-bold"> at the cost of chips</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Our Inspiration</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">The Legacy We Carry</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {inspirations.map((person, i) => (
              <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all card-hover">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <StarIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{person.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{person.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Leadership</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">Our Team</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[...leadership.presidents, ...leadership.trustees].map((person, i) => (
              <motion.div
                key={person.name}
                layoutId={`card-${person.name}`}
                onClick={() => handleMemberClick(person)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-lg text-center relative"
              >
                {/* Circular Image Placeholder */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-amber-500/20 border-4 border-primary/30 flex items-center justify-center mb-4 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl sm:text-3xl font-bold text-primary">{person.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>

                {/* Role Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${person.role === 'President'
                  ? 'bg-amber-500/10 text-amber-600'
                  : 'bg-teal-500/10 text-teal-600'
                  }`}>
                  {person.role === 'President' ? <Crown className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
                  {person.role}
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{person.name}</h3>

                {/* --- NEW ADDITION: Education Badge --- */}
                {person.education && (
                  <div className="flex justify-center mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-secondary/50 text-secondary-foreground text-[10px] sm:text-xs font-medium border border-secondary">
                      <GraduationCap className="h-3 w-3 opacity-70" />
                      {person.education}
                    </span>
                  </div>
                )}

                {/* Description (Truncated) */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                  {person.description}
                </p>
                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">Read more</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Our Partners</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">Valued Supporters</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {supporters.map((supporter, i) => (
              <motion.div
                key={supporter.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all card-hover text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/30 flex items-center justify-center mb-4 overflow-hidden shadow-lg">
                  {supporter.image ? (
                    <img src={supporter.image} alt={supporter.name} className="w-full h-full object-cover" />
                  ) : (
                    <Handshake className="h-7 w-7 sm:h-9 sm:w-9 text-accent" />
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-2">{supporter.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">{supporter.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-card border-t border-b border-border/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Dedicated Team</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Community Pillars</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {communityMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-background border border-border px-5 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all min-w-[280px] sm:min-w-[320px]"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-foreground text-sm sm:text-base">{member.name}</h4>
                    <p className="text-xs text-muted-foreground font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 relative overflow-hidden bg-background">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Floating Icons Background */}
        <div className="absolute top-10 left-10 text-cyan-500/10 animate-float hidden sm:block"><Code size={64} /></div>
        <div className="absolute bottom-10 right-10 text-blue-500/10 animate-pulse hidden sm:block"><Cpu size={64} /></div>

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-xs font-mono mb-4">
              <Terminal className="h-3 w-3" />
              <span>Digital Architects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Code & Love</span></h2>
            <p className="text-sm text-muted-foreground mt-2 font-mono">&lt;meet_the_developers /&gt;</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {developers.map((dev, i) => (
              <motion.div
                key={dev.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-background/50 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-900/50 rounded-2xl p-6 text-center hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col items-center flex-grow">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px] mb-4 group-hover:spin-slow overflow-hidden">
                    {dev.image ? (
                      <img src={dev.image} alt={dev.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-cyan-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">{dev.name}</h3>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground font-mono mb-4">
                    <span className="text-cyan-500">{'>'}</span> {dev.role}
                  </div>

                  {/* --- CONTACT TAG / BUTTON --- */}
                  <div className="mt-auto">
                    <a
                      href={`mailto:${dev.email}`}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 hover:bg-cyan-500/10 text-cyan-600 hover:text-cyan-500 text-xs font-medium transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Our Purpose</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">Why We Exist</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {purposes.map((purpose, i) => (
              <motion.div key={purpose.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-background border border-border hover:border-primary/30 transition-all card-hover">
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <purpose.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2">{purpose.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{purpose.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-white/80 mx-auto mb-4 sm:mb-6" />
            <p className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 italic px-4">"Education for all—simple, affordable, and impactful."</p>
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8 bg-white text-primary hover:bg-white/90 shadow-xl">
              <Link to="/support"><Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />Join Our Mission</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- TEAM MEMBER DIALOG (MODAL) --- */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              layoutId={`card-${selectedMember.name}`}
              className="relative w-full max-w-2xl bg-background rounded-3xl shadow-2xl overflow-hidden border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Background Header */}
              <div className="h-32 bg-gradient-to-r from-primary/20 to-amber-500/20 w-full absolute top-0 left-0" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background border border-border transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>

              <div className="relative pt-16 px-6 sm:px-10 pb-10">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Full Size Image */}
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-background border-4 border-background shadow-xl flex items-center justify-center overflow-hidden">
                      {selectedMember.image ? (
                        <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-4xl sm:text-5xl font-bold text-primary bg-primary/10 w-full h-full flex items-center justify-center">
                          {selectedMember.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${selectedMember.role === 'President'
                      ? 'bg-amber-500/10 text-amber-600'
                      : 'bg-teal-500/10 text-teal-600'
                      }`}>
                      {selectedMember.role === 'President' ? <Crown className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
                      {selectedMember.role}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{selectedMember.name}</h3>

                    {/* --- NEW ADDITION: Education Badge in Modal --- */}
                    {selectedMember.education && (
                      <div className="mb-4 flex sm:justify-start justify-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs font-medium border border-secondary">
                          <GraduationCap className="h-4 w-4 opacity-70" />
                          {selectedMember.education}
                        </span>
                      </div>
                    )}

                    {/* Full Description (No Line Clamp) */}
                    <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {selectedMember.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
});

About.displayName = 'About';

export default About;
