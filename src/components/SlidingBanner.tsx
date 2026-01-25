import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface SlidingBannerProps {
  slides: BannerSlide[];
  autoPlayInterval?: number;
  height?: string;
}

export function SlidingBanner({ 
  slides, 
  autoPlayInterval = 2500, 
  height = "h-[250px] sm:h-[350px] lg:h-[450px]"
}: SlidingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle auto-play
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval, isPaused, currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]); // Re-bind allows accessing current state if needed

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const goToPrevious = () => paginate(-1);
  const goToNext = () => paginate(1);
  
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Drag end handler for swipe support
  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      goToNext();
    } else if (swipe > swipeConfidenceThreshold) {
      goToPrevious();
    }
  };

  if (slides.length === 0) {
    return (
      <div className={`relative w-full ${height} bg-gradient-to-r from-teal-600 to-emerald-600 flex items-center justify-center`}>
        <div className="text-center text-white px-4 animate-pulse">
          <h2 className="text-2xl font-bold">Vidhya Swaroop Foundation</h2>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${height} overflow-hidden group outline-none`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      tabIndex={0} // Makes the div focusable for keyboard navigation
      role="region"
      aria-label="Image Carousel"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 400, damping: 40 },
            opacity: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full bg-slate-200">
             {/* Skeleton / Loading Placeholder */}
             {!isLoaded && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
             )}
            
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover select-none pointer-events-none" // pointer-events-none prevents dragging the image file itself
              onLoad={() => setIsLoaded(true)}
              draggable={false}
            />

            {/* Professional Gradient Overlay (Darker at bottom for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            {/* Content Overlay */}
            {(slides[currentIndex].title || slides[currentIndex].subtitle) && (
              <div className="absolute inset-0 flex items-center justify-center text-center p-4 sm:p-12 pointer-events-none">
                <div className="max-w-4xl mx-auto space-y-4">
                  {slides[currentIndex].title && (
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg"
                    >
                      {slides[currentIndex].title}
                    </motion.h2>
                  )}
                  {slides[currentIndex].subtitle && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-sm sm:text-lg md:text-xl text-gray-100 font-medium max-w-2xl mx-auto drop-shadow-md"
                    >
                      {slides[currentIndex].subtitle}
                    </motion.p>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile (swipe preferred), visible on tablet+ */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-105 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-105 z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Simple Glass Morphism Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative p-1"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className="rounded-full backdrop-blur-sm border border-white/30"
                animate={{
                  width: index === currentIndex ? 16 : 8,
                  height: index === currentIndex ? 16 : 8,
                  backgroundColor: index === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/50 backdrop-blur-sm"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}