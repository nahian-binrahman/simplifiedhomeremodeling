"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Play, Pause, Volume2, Settings, Maximize, ArrowRight } from "lucide-react";

export default function TransformationVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-white text-black py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
              SEE THE TRANSFORMATION
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              A Kitchen Designed <br />
              for Real Life.
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              See how quality craftsmanship and thoughtful remodeling can transform an everyday kitchen into a space that&apos;s beautiful, functional, and built around the homeowner.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0" strokeWidth={2.2} />
                <span>Custom Kitchen Remodeling</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0" strokeWidth={2.2} />
                <span>Quality Materials &amp; Finishes</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0" strokeWidth={2.2} />
                <span>Professional Craftsmanship</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-3">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded bg-black hover:bg-gray-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>START YOUR KITCHEN REMODEL</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Video Player Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200 group">
              
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern kitchen transformation showcase"
                  fill
                  className="object-cover object-center brightness-95"
                />
                
                {/* Dark overlay when paused */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Big Center Play Button */}
                <button
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-white text-black shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 z-20"
                  aria-label="Play video"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-black" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black ml-1" />
                  )}
                </button>

                {/* Bottom Custom Video Control Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white z-20 flex flex-col gap-2">
                  {/* Timeline Bar */}
                  <div
                    className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickPos = (e.clientX - rect.left) / rect.width;
                      setProgress(clickPos * 100);
                    }}
                  >
                    <div
                      className="h-full bg-white transition-all"
                      style={{ width: `${isPlaying ? (progress || 35) : 0}%` }}
                    />
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <button onClick={togglePlay} className="hover:text-gray-300">
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                      <span className="text-[11px] sm:text-xs text-gray-300 font-mono">
                        {isPlaying ? "0:22 / 1:02" : "0:00 / 1:02"}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <button className="hover:text-white" aria-label="Volume">
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button className="hover:text-white" aria-label="Settings">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="hover:text-white" aria-label="Fullscreen">
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>
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
