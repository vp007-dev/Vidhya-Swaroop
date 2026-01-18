import { motion } from "framer-motion";
import { Heart, Building2, QrCode, Award, CreditCard, Users, HandHeart, Banknote, CheckCircle, Sparkles, Handshake } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MarqueeSupporters from "@/components/MarqueeSupporters";
const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactStats = [
  { number: "100+", label: "Students Educated", icon: Users, color: "from-blue-500 to-indigo-600" },
  { number: "1267+", label: "Items Donated", icon: HandHeart, color: "from-rose-500 to-pink-600" },
  { number: "3", label: "Generations", icon: Heart, color: "from-amber-500 to-orange-600" },
  { number: "₹Chips", label: "Education Cost", icon: Banknote, color: "from-emerald-500 to-teal-600" },
];

const valuedSupporters = [
  { name: "Bharat Vikas Parishad Annapurna", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/Annapurna.png", description: "A leading organization dedicated to national development through education, health, and social service initiatives across India." },
  { name: "India Rising", image: "https://lh3.googleusercontent.com/rd-d/ALs6j_G7mSiblyrSkOumO6vGAsfR3SDchVkNA_GuJg4RDFm9c7DUYysDLG3XabLGv6-aKUwDbMEEZBBFsokrVXx_XGS6RPoglV61jbys74E_1uNCH4R7lViLNOI0JzEwYWRH9RRaMeKCXKUJ752ahYPcbtGH4LOv4J75Io42QP3oCsEqSf-6CZ_BrLOaiTz40vWHkyrCUAovyrCt6LmjLnyki8bJ_G6eeWedX1L_YZ_xaQO3jQSyhIbIaorjb7NXBp2ST_ssncIBSYLpdp0BvANzA3RMxRDqMHA4icxjy5RL_Jiaol-yfbDreZOY1qG0RqVnoiJhaqBzqcQmwCmzNSX5cZxVJImtt2JtA0rs5toZeSAewcwJjmemS1DfGMtKJSNVzwZXBTEXiIFy7yjFKA6YttFJ019DhlofEoATSJFvdWbRKw1PVc5Js3KxdDrlGIRGCQiVZpYquJKJQWF975Khr2TVod2AJ8HKIJvr8vEEzr2aDgHCDKNPHMjP8gocvGvkB7DphUrqV1oM0ffWqIQFrJAH7o354ZApun-I1sPd44lDcniwW67bgj1luahp1amox5Vb9VvOd5V1q9-elC0jvCUjNBQXndH7i-HcbnI5NUBCcSn07tAGYY7S7qOqa0cGPpMTs4En_cM6V3jgsJVMfjGqrxMIN3Dpso6CXHPtsqLcY86u193pIgPHbYLR6718sF2r-bEsN7WcTc6Mi1MrWXO0H1zziW4I9RRSalkv_q-4vc-8vhZ2ZJfeXiHGTXRxDS7T1h_4LW0-5mT3cod20Ex-YZKYjWDuaKl9yxRla6cx763GC08EoZFCaEiEIddH-l_NAm3GfBplI9Yg2QeQcKSjLfObj1pGWM_lBLyCU6m05RQ8Au7mz18uoEP40_ynviF9ThrFuKaLu4R9HC-smBl4dkVCncybvV66c_tso7dDysJTg6ePJBio0Nptxfkn4KbZoDz6eSL-ZdRzDZdGDQC2rC-z8oKBlz0ZK92CNw8cTt7l37mh1IlW0sCrm6ulvaASd7yhLWk_sy3VHo0u=w1920-h868?auditContext=prefetch", description: "Empowering communities through sustainable development programs, skill training, and grassroots social transformation." },
  {name: "Lions Club Supreme", image: "https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/lionsking.jpeg", description: "International humanitarian organization serving communities through vision care, hunger relief, and youth programs." },
  { name: "State Bank of India", image: "", description: "India's largest public sector bank, supporting educational initiatives and financial literacy programs nationwide." },
];
const constantSupporters = [
  { name: "Agarwal Mahila Manch" },
  { name: "Eco Friends Welfare Society"},
  { name: "Hari Bol Seva Samiti"},
  { name: "Nav Agarwal Samaj"},
  { name: "Shikhar club" },
];
const benefits = [
  "Quality education at minimal cost",
  "Complete study materials & uniforms",
  "Skill development for adults",
  "Health check-up camps",
  "Annual donation drives",
];

export default function Support() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] overflow-hidden bg-mesh flex items-center">
        <div className="hidden sm:block absolute top-10 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary/20 to-amber-500/20 blob animate-float blur-3xl" />
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Support Our Mission</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Make a <span className="text-gradient">Difference</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground px-4">
                Every contribution transforms lives through education, healthcare, and empowerment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-16 bg-card border-y border-border">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {impactStats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 sm:mb-3 shadow-lg`}>
                  <stat.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          
          {/* Changed max-w-5xl to max-w-2xl and removed grid to center it */}
          <div className="max-w-2xl mx-auto"> 
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20 flex flex-col items-center justify-center text-center shadow-2xl shadow-primary/5"
            >
              
              <QrCode className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Scan to Donate
              </h3>
              
              <p className="text-base text-muted-foreground mb-8">
                Support our mission directly via UPI
              </p>
              
              {/* BIG QR CODE CONTAINER */}
              {/* Added overflow-hidden so the image stays rounded */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xl border-4 border-white overflow-hidden relative">
                
                {/* 1. PLACE YOUR IMAGE URL HERE inside src="" */}
                {/* 2. If no image is provided, it falls back to the icon */}
                <img 
                  src="https://cdn.jsdelivr.net/gh/vp007-dev/community-care-hub@main/src/assets/QR.jpeg" 
                  alt="UPI QR Code" 
                  className="w-full h-full object-cover"
                />

                {/* Optional: Fallback Icon if image fails to load (can be removed if not needed) */}
                {/* <QrCode className="absolute h-32 w-32 text-gray-200" /> */}
              
              </div>
              
              <div className="bg-secondary/50 px-6 py-3 rounded-full border border-border">
                <p className="text-sm sm:text-base font-medium text-foreground tracking-wide select-all">
                  vidhyaswaroopfoundation@upi
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
      {/* Valued Supporters */}
      

      {/* Constant Supporters */}
      <section className="py-8 sm:py-12 bg-card border-t border-border overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-2">
              Our Champions
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-foreground">Constant Supporters</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Individuals who consistently contribute to our mission
            </p>
          </motion.div>
        </div>
        <MarqueeSupporters supporters={constantSupporters} speed={10} />
      </section>


      {/* Why Support */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-white/80 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Why Support Us?</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                  <span className="text-sm sm:text-base text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
