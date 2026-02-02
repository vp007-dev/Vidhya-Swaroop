
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GalleryGrid } from "@/components/GalleryLightbox";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import annapurnaImg from "@/assets/Annapurna.jpeg";
import lionKingImg from "@/assets/lionsking.jpeg";

// Mock Data for the Event
const EVENT_DATA = {
    id: 1,
    title: "Community Food Drive 2024",
    date: "March 15, 2024",
    location: "City Community Center",
    shortDescription: "Join us in our mission to feed over 1000 families in need this season.",
    description: "The Annual Community Food Drive is our flagship event where we gather volunteers and donors to distribute food packages to underprivileged families. Last year, we helped over 500 families. This year, our goal is to double that impact. We will have gallery showcases, live interactions, and plenty of opportunities to help.",
    images: [
        { src: annapurnaImg, alt: "Food Distribution" },
        { src: lionKingImg, alt: "Community Gathering" },
        { src: annapurnaImg, alt: "Volunteers Packing" },
        { src: lionKingImg, alt: "Happy Faces" },
        { src: annapurnaImg, alt: "Evening Event" },
        { src: lionKingImg, alt: "Closing Ceremony" },
    ]
};

export default function Events() {
    const [selectedEvent, setSelectedEvent] = useState<typeof EVENT_DATA | null>(null);

    return (
        <Layout>
            <div className="min-h-screen bg-background pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto pt-8">

                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
                        >
                            Our <span className="text-primary">Events</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg max-w-2xl mx-auto"
                        >
                            Discover our latest initiatives, gatherings, and impactful moments.
                        </motion.p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <EventCard
                            event={EVENT_DATA}
                            onClick={() => setSelectedEvent(EVENT_DATA)}
                        />
                        {/* Future events will be mapped here */}
                    </div>

                    {/* Event Detail Modal */}
                    <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border/50">
                            <DialogHeader>
                                <DialogTitle className="text-2xl sm:text-3xl font-bold mb-2">
                                    {selectedEvent?.title}
                                </DialogTitle>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {selectedEvent?.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {selectedEvent?.location}
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-8">
                                {/* Context / Description */}
                                <div className="text-foreground/90 leading-relaxed">
                                    {selectedEvent?.description}
                                </div>

                                {/* Gallery Section */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        Event Gallery
                                    </h3>
                                    {selectedEvent && (
                                        <GalleryGrid
                                            images={selectedEvent.images}
                                            displayCount={4}
                                        />
                                    )}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </Layout>
    );
}

function EventCard({ event, onClick }: { event: typeof EVENT_DATA, onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 cursor-pointer"
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={event.images[0].src}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {event.date}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {event.shortDescription}
                </p>

                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                </div>
            </div>
        </motion.div>
    );
}
