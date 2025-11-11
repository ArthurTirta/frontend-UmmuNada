"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/tahu_bakso.webp",
  "/sosis_solo.webp",
  "/martabak_mini.webp",
  "/bomboloni.webp",
  "/gabin_fla.webp",
  "/panada_ikan.webp",
  "/risol_mayo.webp",
  "/risol_sayur.webp",
  "/pie_buah.webp",
  "/tahu_sayur_pedas.webp",
  "/mihun.webp",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }; 
  return (
    <div className="relative w-full h-full">
      {/* Simple carousel with fade effect */}
      <div className="relative w-full h-full">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;

          return (
            <div
              key={src}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : isPrev || isNext
                  ? "opacity-30 z-5"
                  : "opacity-0 z-0"
              }`}
              style={{
                transform: isActive
                  ? "translateX(0%) scale(1)"
                  : isPrev
                  ? "translateX(-15%) scale(0.85)"
                  : isNext
                  ? "translateX(15%) scale(0.85)"
                  : "translateX(0%) scale(0.8)",
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons - Responsive sizes */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-20 bg-[--brand-sky] hover:bg-[--brand-navy] text-white rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-20 bg-[--brand-sky] hover:bg-[--brand-navy] text-white rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot indicators - Hidden on mobile/tablet, visible on desktop only */}
      <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? "bg-[--brand-sky] w-8 h-2 rounded-full"
                : "bg-white/50 hover:bg-white/75 w-2 h-2 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
