import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useRef } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GalleryLightbox({ images, initialIndex = 0, open, onOpenChange }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 border-0 bg-black/95 backdrop-blur-xl"
        onKeyDown={handleKeyDown}
      >
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
          <span className="text-white font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Main Image Area */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-full"
            >
              <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white text-center font-medium">
                  {images[currentIndex]?.alt}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-2xl bg-white/10 backdrop-blur-sm max-w-[90vw] overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                index === currentIndex 
                  ? "ring-2 ring-white scale-105" 
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface GalleryGridProps {
  images: GalleryImage[];
  displayCount?: number;
}

export function GalleryGrid({ images, displayCount = 5 }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const displayImages = showAll ? images : images.slice(0, displayCount);
  const remainingCount = images.length - displayCount;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    // Scroll to center of gallery section
    setTimeout(() => {
      galleryRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  };

  return (
    <>
      <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4">
        {displayImages.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => openLightbox(i)}
            className={`relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                i === 0 ? 'h-64 sm:h-80 md:h-full' : 'h-32 sm:h-40 md:h-48'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <p className="text-white font-medium text-sm sm:text-base">{image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Show More Button */}
        {!showAll && remainingCount > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: displayCount * 0.05 }}
            onClick={handleShowAll}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer bg-gradient-to-br from-primary/20 to-amber-400/20 border-2 border-dashed border-primary/30 hover:border-primary/60 transition-all h-32 sm:h-40 md:h-48 flex flex-col items-center justify-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-primary">+{remainingCount}</span>
            </div>
            <span className="text-primary font-semibold text-sm sm:text-base">Show More</span>
          </motion.button>
        )}
      </div>

      {/* View All in Lightbox Button */}
      {showAll && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mt-6"
        >
          <Button
            onClick={() => openLightbox(0)}
            variant="outline"
            size="lg"
            className="rounded-full px-8 group"
          >
            <ZoomIn className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            View All in Gallery
          </Button>
          <Button
            onClick={handleShowLess}
            variant="ghost"
            size="lg"
            className="rounded-full px-8"
          >
            Show Less
          </Button>
        </motion.div>
      )}

      <GalleryLightbox 
        images={images}
        initialIndex={selectedIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
