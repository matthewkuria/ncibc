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

  const goToSlide = (index: number) => {
    setTick((currentTick) => {
      const rotation = Math.floor(currentTick / heroImages.length) * heroImages.length;
      return rotation + ((index + heroImages.length) % heroImages.length);
    });
  };

  const goToPrevious = () => goToSlide(activeIndex - 1);
  const goToNext = () => goToSlide(activeIndex + 1);

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

      {/* Carousel controls */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-2xl text-white transition hover:bg-ink/80 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-2xl text-white transition hover:bg-ink/80 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2" aria-label="Slide indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
              index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}