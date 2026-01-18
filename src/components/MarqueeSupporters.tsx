import { motion } from "framer-motion";

interface Supporter {
  name: string;
  logo?: string;
}

interface MarqueeSupportersProps {
  supporters: Supporter[];
  speed?: number;
}

export function MarqueeSupporters({ supporters, speed = 60 }: MarqueeSupportersProps) {
  // Duplicate the array for seamless loop
  const duplicatedSupporters = [...supporters, ...supporters, ...supporters];

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8">
      {/* Gradient Overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-8 sm:gap-12"
        animate={{
          x: ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedSupporters.map((supporter, index) => (
          <div
            key={`${supporter.name}-${index}`}
            className="flex-shrink-0 flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
              {supporter.logo ? (
                <img
                  src={supporter.logo}
                  alt={supporter.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm sm:text-base font-bold text-primary">
                  {supporter.name.charAt(0)}
                </span>
              )}
            </div>
            <span className="text-sm sm:text-base font-medium text-foreground whitespace-nowrap">
              {supporter.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default MarqueeSupporters;