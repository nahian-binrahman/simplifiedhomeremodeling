"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight, LayoutGrid, Gem, MessageSquare, MapPin } from "lucide-react";

interface TransformationVideoSectionProps {
  label?: string;
  title?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  videoSrc?: string;
}

export default function TransformationVideoSection({
  label = "SEE OUR WORK",
  title = "REAL PROJECTS.\nREAL TRANSFORMATIONS.",
  description = "See how Simplified Home Remodeling transforms outdated spaces through thoughtful design, quality materials, and craftsmanship built to last.",
  videoSrc = "/videos/remodeling-video.mp4",
}: TransformationVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted && video.paused) {
      video.play().catch(() => {});
    }
  };

  // Autoplay on view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    return () => {
      observer.disconnect();
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, [isMuted]);

  return (
    <section id="video" className="bg-[#FAF8F5] text-gray-900 py-16 sm:py-24 lg:py-28 border-y border-[#e7e2d8] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* =========================================
              LEFT COLUMN (Desktop): Text, Features & Buttons
              (On mobile, order is controlled cleanly)
             ========================================= */}
          <div className="lg:col-span-5 flex flex-col space-y-6 reveal-init">
            
            {/* 1. Small Label: SEE OUR WORK */}
            <div className="order-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#a4865e] uppercase heading-condensed">
                <span className="w-5 h-px bg-[#a4865e]" />
                <span>{label}</span>
              </div>

              {/* 2. Main Headline */}
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] font-black text-gray-950 tracking-tight leading-[0.98] uppercase heading-condensed mt-3">
                REAL PROJECTS. <br />
                <span className="text-[#a4865e]">REAL TRANSFORMATIONS.</span>
              </h2>

              {/* 3. Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal mt-3">
                {description}
              </p>
            </div>

            {/* Mobile Video Position Spacer - handled by DOM placement below */}

            {/* 4. Selling Points with Clean Circular Icons */}
            <div className="order-3 lg:order-2 space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-900 font-medium">
                <div className="w-9 h-9 rounded-full bg-[#f0ece4] border border-[#dcd4c6] flex items-center justify-center text-[#8d6f46] shrink-0">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <span>Kitchen &amp; Bathroom Remodeling</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-900 font-medium">
                <div className="w-9 h-9 rounded-full bg-[#f0ece4] border border-[#dcd4c6] flex items-center justify-center text-[#8d6f46] shrink-0">
                  <Gem className="w-4 h-4" />
                </div>
                <span>Quality Materials &amp; Detailed Finishes</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-900 font-medium">
                <div className="w-9 h-9 rounded-full bg-[#f0ece4] border border-[#dcd4c6] flex items-center justify-center text-[#8d6f46] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Clear Communication From Start to Finish</span>
              </div>
            </div>

            {/* 5. Dual Action Buttons */}
            <div className="order-4 lg:order-3 pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded bg-black text-white hover:bg-gray-900 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transform hover:-translate-y-0.5 active:scale-[0.99] transition-all text-center"
              >
                <span>VIEW OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded border-2 border-black/20 hover:border-black text-black bg-transparent hover:bg-black/5 text-xs sm:text-sm font-bold uppercase tracking-wider transform hover:-translate-y-0.5 active:scale-[0.99] transition-all text-center"
              >
                <span>GET YOUR FREE ESTIMATE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: Video Player Card with Before/After Split Overlay
              (Shows between text and selling points on mobile)
             ========================================= */}
          <div className="lg:col-span-7 reveal-scale-init delay-150 order-2 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-black/10 group card-hover-lift">
              
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  playsInline
                  autoPlay
                  muted={isMuted}
                  loop
                  preload="auto"
                  onClick={togglePlay}
                  className="w-full h-full object-cover object-center cursor-pointer transition-all duration-300 group-hover:brightness-[1.03]"
                />

                {/* Top Badges: BEFORE on left, AFTER on right */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                  <div className="px-3 py-1 rounded bg-black/85 backdrop-blur-md text-[10px] sm:text-xs font-black uppercase tracking-widest text-white border border-white/20 shadow-md heading-condensed">
                    BEFORE
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                  <div className="px-3 py-1 rounded bg-black/85 backdrop-blur-md text-[10px] sm:text-xs font-black uppercase tracking-widest text-white border border-white/20 shadow-md heading-condensed">
                    AFTER
                  </div>

                  {/* Sound Toggle Floating Button */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 sm:p-2 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-md shadow-md transition-transform active:scale-95"
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </button>
                </div>

                {/* Center Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center z-10 bg-black/35 group-hover:bg-black/25 transition-colors cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-black flex items-center justify-center shadow-2xl border-4 border-white/40 transform group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-black" />
                    </div>
                  </button>
                )}

                {/* Bottom Left Label: Palm Desert Kitchen Transformation */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                  <div className="bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
                    <MapPin className="w-3.5 h-3.5 text-[#cbb08a]" />
                    <div className="text-left">
                      <div className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider heading-condensed">
                        PALM DESERT
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-gray-300 uppercase tracking-widest">
                        Kitchen Transformation
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right Duration Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
                  <div className="bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded text-[11px] font-mono text-gray-200">
                    1:35
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
