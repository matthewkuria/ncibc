"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/ncibc-hero-bg1.jpg",
  "/ncibc-hero-bg2.jpg",
  "/ncibc-hero-bg3.jpg",
  "/ncibc-hero-bg4.jpg",
  "/ncibc-hero-bg5.jpg",
  "/ncibc-hero-bg6.jpg",
];

// How long each image is shown, in ms
const SLIDE_DURATION = 5000;
// Crossfade duration, in ms
const FADE_DURATION = 1000;

export default function HeroCarousel() {
  const [tick, setTick] = useState(0);
  const activeIndex = tick % heroImages.length;

  // Preload images for smoother transitions
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Handle slide rotation - continuous, no pauses
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Images Container */}
      {heroImages.map((img, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={isActive ? `${img}-${tick}` : img}
            className={`
              absolute inset-0 h-full w-full
              transition-opacity duration-[${FADE_DURATION}ms] ease-in-out
              ${isActive ? "opacity-90" : "opacity-0"}
            `}
          >
            {/* Image with zoom animation */}
            <div
              className={`
                h-full w-full bg-cover bg-center bg-no-repeat
                ${isActive ? "animate-zoom" : ""}
              `}
              style={{ 
                backgroundImage: `url('${img}')`,
                willChange: 'transform, opacity', // Performance optimization
              }}
            />
          </div>
        );
      })}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/30"
        aria-hidden="true"
      />
    </div>
  );
}