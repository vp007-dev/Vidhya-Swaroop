import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Building } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormData } from "@/lib/contact";

// Memoize static contact info to prevent recreation on every render
const contactInfo = [
  { 
    icon: Phone, 
    title: "Phone", 
    value: "+91 95282 19780", 
    href: "tel:+919528219780", 
    color: "from-emerald-500 to-teal-600" 
  },
  { 
    icon: Mail, 
    title: "Email", 
    value: "info.vidhyaswaroopfoundation@gmail.com", 
    href: "mailto:info.vidhyaswaroopfoundation@gmail.com", 
    color: "from-blue-500 to-indigo-600" 
  },
  { 
    icon: MapPin, 
    title: "Location", 
    value: "94, Basant Vihar Rd, Karbala, Kamla Nagar, Agra, Uttar Pradesh 282005", 
    href: "https://www.google.com/maps/search/?api=1&query=94+Basant+Vihar+Rd+Karbala+Kamla+Nagar+Agra+Uttar+Pradesh+282005", 
    color: "from-rose-500 to-pink-600" 
  },
] as const;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Memoize form handlers to prevent recreation on every render
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({ 
          title: "Message Sent Successfully!", 
          description: "Thank you for contacting us. We'll get back to you soon." 
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          type: "general"
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);

  const handleInputChange = useCallback((field: keyof ContactFormData) => 
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    }, []);

  const handleSelectChange = useCallback((field: keyof ContactFormData) => 
    (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    }, []);

  // Memoize animation variants
  const fadeInLeft = useMemo(() => ({ 
    initial: { opacity: 0, x: -30 }, 
    whileInView: { opacity: 1, x: 0 }, 
    viewport: { once: true } 
  }), []);
  
  const fadeInRight = useMemo(() => ({ 
    initial: { opacity: 0, x: 30 }, 
    whileInView: { opacity: 1, x: 0 }, 
    viewport: { once: true } 
  }), []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[35vh] sm:min-h-[40vh] overflow-hidden bg-mesh flex items-center">
        <div className="hidden sm:block absolute top-10 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-accent/20 to-teal-500/20 blob animate-float blur-3xl" />
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 sm:mb-6">
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Get in Touch</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Contact <span className="text-gradient-teal">Us</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground px-4">Have questions? We'd love to hear from you!</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <motion.div {...fadeInLeft} className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Let's Connect</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Reach out to learn more about our programs or how you can help.</p>
              </div>

              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 transition-all">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg shrink-0`}>
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors break-all">{info.value}</a>
                    ) : (
                      <p className="text-sm sm:text-base font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1774.0412734761915!2d78.01364815024411!3d27.21655801693853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477d0103068fb%3A0x51d427d01c843552!2svidhya%20swaroop%20public%20school!5e0!3m2!1sen!2sin!4v1768672893353!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade */}
                {/* Updated Map Iframe pointing to Veer Nagar, Dayal Bagh */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1774.0412734761915!2d78.01364815024411!3d27.21655801693853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477d0103068fb%3A0x51d427d01c843552!2svidhya%20swaroop%20public%20school!5e0!3m2!1sen!2sin!4v1768672893353!5m2!1sen!2sin" 
                  width="100%" 
                  height="150" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Vidhya Swaroop Foundation Location" 
                  className="grayscale hover:grayscale-0 transition-all duration-500 sm:h-[200px]" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeInRight} className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-background border border-border">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Send className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">We'll respond as soon as possible</p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-sm flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name" 
                      value={formData.name} 
                      onChange={handleInputChange('name')} 
                      required 
                      className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base" 
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={handleInputChange('email')} 
                      required 
                      className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base" 
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phone" className="text-sm flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      value={formData.phone} 
                      onChange={handleInputChange('phone')} 
                      className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base" 
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="type" className="text-sm flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Inquiry Type *
                    </Label>
                    <Select value={formData.type} onValueChange={handleSelectChange('type')}>
                      <SelectTrigger className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                        <SelectItem value="donation">Donation Information</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="subject" className="text-sm">Subject *</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief subject of your message" 
                    value={formData.subject} 
                    onChange={handleInputChange('subject')} 
                    required 
                    className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base" 
                  />
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..." 
                    value={formData.message} 
                    onChange={handleInputChange('message')} 
                    required 
                    rows={5} 
                    className="rounded-lg sm:rounded-xl resize-none text-sm sm:text-base" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-10 sm:h-12 rounded-lg sm:rounded-xl shine text-sm sm:text-base" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}