"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, Play, Pause, Volume2, VolumeX, Maximize, ArrowRight } from "lucide-react";

interface TransformationVideoSectionProps {
  label?: string;
  title?: string;
  description?: string;
  features?: string[];
  ctaText?: string;
  videoSrc?: string;
}

export default function TransformationVideoSection({
  label = "SEE THE TRANSFORMATION",
  title = "A Home Designed for Real Life.",
  description = "See how quality craftsmanship and thoughtful remodeling can transform an everyday residence into a space that's beautiful, functional, and built around the homeowner.",
  features = [
    "Custom Home & Kitchen Remodeling",
    "Quality Materials & Precision Finishes",
    "Professional Master Craftsmanship",
  ],
  ctaText = "START YOUR HOME REMODEL",
  videoSrc = "/videos/remodeling-video.mp4",
}: TransformationVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default to muted for 100% reliable mobile autoplay
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

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

    // If unmuting, make sure video keeps playing
    if (!nextMuted && video.paused) {
      video.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = clickPos * duration;
    }
  };

  const handleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // 100% Reliable Mobile Autoplay via Intersection Observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM attributes for mobile Safari & Chrome
    video.muted = isMuted;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    const attemptPlay = () => {
      video.muted = isMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If browser blocked sound-enabled play, enforce muted and play again
            video.muted = true;
            setIsMuted(true);
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
          });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            attemptPlay();
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: [0.1, 0.2, 0.5],
        rootMargin: "80px 0px 80px 0px",
      }
    );

    observer.observe(video);

    // Initial check
    attemptPlay();

    // Event listeners
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

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="bg-white text-black py-14 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 reveal-init">
            
            <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
              {label}
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 tracking-tight leading-[1.05] uppercase heading-condensed">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {description}
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-1">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-base text-gray-800 font-medium group cursor-default">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 shrink-0 group-hover:scale-110 transition-transform duration-200" strokeWidth={2.2} />
                  <span className="text-gentle-lift">{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                href="#quote-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded btn-invert-black text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transform hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Real Video Player Container */}
          <div className="lg:col-span-7 reveal-scale-init delay-150">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200 group card-hover-lift">
              
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
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={togglePlay}
                  className="w-full h-full object-cover object-center cursor-pointer transition-all duration-300 group-hover:brightness-[1.04]"
                />

                {/* Sound Toggle Floating Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                  <button
                    onClick={toggleMute}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
                      isMuted
                        ? "bg-black/80 hover:bg-black/90 border-white/35 text-white animate-pulse"
                        : "bg-black/60 hover:bg-black/85 border-white/20 text-white"
                    }`}
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-white" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">Tap for Sound</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">Sound On</span>
                      </>
                    )}
                  </button>
                </div>
                
                {/* Dark Overlay when Paused */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 cursor-pointer flex items-center justify-center transition-colors backdrop-blur-[1px]"
                  >
                    <button
                      onClick={togglePlay}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 z-20"
                      aria-label="Play video"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5" />
                    </button>
                  </div>
                )}

                {/* Bottom Custom Video Control Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-4 text-white z-20 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {/* Timeline Bar */}
                  <div
                    className="w-full h-1.5 sm:h-2 bg-white/30 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-full bg-white transition-all rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <button
                        onClick={togglePlay}
                        className="hover:text-gray-300 transition-colors p-1"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="hover:text-gray-300 transition-colors p-1"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <span className="text-[10px] sm:text-[11px] text-gray-300 font-mono">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleFullscreen}
                        className="hover:text-gray-300 transition-colors p-1"
                        aria-label="Full screen"
                      >
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
