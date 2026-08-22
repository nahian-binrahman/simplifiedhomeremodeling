"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, Play, Pause, Volume2, VolumeX, Quote } from "lucide-react";

interface VideoTestimonial {
  id: number;
  name: string;
  location: string;
  projectType: string;
  videoSrc: string;
  quote: string;
  rating: number;
}

interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  review: string;
  highlight: string;
  verified: boolean;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Coachella Valley Homeowner",
    location: "Palm Desert, CA",
    projectType: "Full Home & Kitchen Remodel",
    videoSrc: "/videos/testimonial-1-simplified-remodeling.mp4",
    quote: "“The craftsmanship exceeded every expectation. True professionals!”",
    rating: 5,
  },
  {
    id: 2,
    name: "Satisfied Client Story",
    location: "Rancho Mirage, CA",
    projectType: "Custom Remodel & Cabinetry",
    videoSrc: "/videos/testimonial-2-simplified-remodeling.mp4",
    quote: "“Honest, clean, and delivered on schedule with no hidden fees.”",
    rating: 5,
  },
];

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Steve N.",
    location: "Palm Desert, CA",
    projectType: "Full Kitchen & Island Remodel",
    rating: 5,
    date: "Yelp Verified Review",
    highlight: "“We couldn’t be happier with our new kitchen!”",
    review:
      "Working with Juan and Simplified Home Remodeling was an absolute pleasure. From start to finish, the entire process was smooth, transparent, and completely stress-free. The craftsmanship is truly top-notch. Our custom cabinets and quartz countertops turned out even better than we imagined!",
    verified: true,
  },
  {
    id: 2,
    name: "Rose Z.",
    location: "Rancho Mirage, CA",
    projectType: "Kitchen & Custom Cabinetry",
    rating: 5,
    date: "Yelp Verified Review",
    highlight: "“Honest, reliable, and exceptionally skilled.”",
    review:
      "Juan and his crew were wonderful to work with. They kept the workspace incredibly clean every single day, communicated daily updates, and finished right on schedule with zero surprise costs. Highly recommend them to anyone in the Coachella Valley!",
    verified: true,
  },
  {
    id: 3,
    name: "Bill & Carol M.",
    location: "Palm Springs, CA",
    projectType: "Whole-Home & Bathroom Renovation",
    rating: 5,
    date: "Yelp Verified Review",
    highlight: "“The best contractor experience we’ve ever had.”",
    review:
      "As seasonal residents, we were nervous about remodeling while out of state. Juan sent weekly video walkthroughs and handled everything with white-glove precision. We walked into a flawless home. True master craftsmen!",
    verified: true,
  },
];

function VideoTestimonialCard({ item }: { item: VideoTestimonial }) {
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else if (!entry.isIntersecting) {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: [0.1, 0.25] }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isMuted]);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-white/15 shadow-2xl flex flex-col group card-hover-lift">
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={item.videoSrc}
          playsInline
          autoPlay
          muted={isMuted}
          loop
          preload="auto"
          onClick={togglePlay}
          className="w-full h-full object-cover object-center cursor-pointer transition-all duration-300 group-hover:brightness-105"
        />

        {/* Sound Toggle Floating Badge */}
        <div className="absolute top-3 right-3 z-20">
          <button
            onClick={toggleMute}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md border shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
              isMuted
                ? "bg-black/80 hover:bg-black/90 border-white/35 text-white animate-pulse"
                : "bg-black/60 hover:bg-black/85 border-white/20 text-white"
            }`}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">Sound</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wide">On</span>
              </>
            )}
          </button>
        </div>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-black/40 cursor-pointer flex items-center justify-center backdrop-blur-[1px] transition-colors"
          >
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-white text-black hover:bg-black hover:text-white border border-transparent hover:border-white shadow-2xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95"
              aria-label="Play testimonial video"
            >
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </button>
          </div>
        )}
      </div>

      {/* Card Info Footer */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#d32323] text-white text-[11px] font-black shadow-xs">
              <span>★★★★★</span>
            </div>
            <span className="text-[11px] font-mono text-gray-400 uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
              {item.projectType}
            </span>
          </div>

          <p className="text-sm sm:text-base font-bold text-white italic text-italic-accent leading-snug pt-1">
            {item.quote}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="font-bold text-white text-sm uppercase heading-condensed tracking-wide">
              {item.name}
            </div>
            <div className="text-[11px] text-gray-400 font-mono">{item.location}</div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Video Story</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0a0a0a] text-white py-20 sm:py-28 lg:py-36 border-b border-white/10 overflow-hidden">
      {/* Background Subtle Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 reveal-init">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-gray-400 uppercase heading-condensed mb-3">
            <span className="w-4 h-px bg-white/40" />
            <span>CLIENT EXPERIENCES &amp; REVIEWS</span>
            <span className="w-4 h-px bg-white/40" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white uppercase tracking-tight heading-condensed">
            WHAT OUR CLIENTS SAY
          </h2>

          {/* Aggregate Yelp Badge */}
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex text-[#d32323] text-sm">★★★★★</div>
            <span className="text-sm font-bold text-white">5.0 Star Average Rating</span>
            <span className="text-white/20">•</span>
            <span className="text-xs text-gray-400 font-mono">100% Client Satisfaction</span>
          </div>
        </div>

        {/* Featured Video Testimonials Row */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>FEATURED VIDEO TESTIMONIALS</span>
            </div>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline">Tap for audio</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {videoTestimonials.map((v) => (
              <VideoTestimonialCard key={v.id} item={v} />
            ))}
          </div>
        </div>

        {/* 3 Written Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-[#141414] rounded-2xl p-6 sm:p-8 lg:p-9 border border-white/10 card-hover-lift flex flex-col justify-between group relative overflow-hidden reveal-init delay-${(idx + 1) * 100}`}
            >
              {/* Top Row: Stars + Project Type */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#d32323] text-white text-xs font-black shadow-sm tracking-wide">
                    <span>★★★★★</span>
                  </div>

                  <span className="text-[11px] font-mono text-gray-400 uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {t.projectType}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h3 className="text-lg sm:text-xl font-bold text-white italic text-italic-accent leading-snug pt-1">
                  {t.highlight}
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {t.review}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-black text-white text-base uppercase heading-condensed tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono">{t.location}</div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Trust Badges */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-white/10 flex flex-col items-center gap-6">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-400">
            VERIFIED 5-STAR CLIENT REVIEWS ON:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 w-full max-w-3xl">
            {/* Google */}
            <div className="bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/25 rounded-xl p-3.5 sm:p-4 flex items-center justify-center sm:justify-start gap-3.5 transition-all duration-200 group cursor-default shadow-lg">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span>Google</span>
                  <span className="text-[10px] text-gray-400 font-mono">Reviews</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-[#FBBC05] text-[10px] tracking-tighter">★★★★★</div>
                  <span className="text-[11px] font-bold text-white font-mono">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Yelp */}
            <div className="bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/25 rounded-xl p-3.5 sm:p-4 flex items-center justify-center sm:justify-start gap-3.5 transition-all duration-200 group cursor-default shadow-lg">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#d32323] flex items-center justify-center shrink-0 shadow-sm text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.784 14.85l2.71 1.764c.732.476 1.554-.253 1.187-.972l-1.39-2.73-2.507 1.938zm-1.85-2.73L8.224 9.39c-.732-.476-.366-1.448.513-1.448h3.072l-.875 4.178zm.725 3.018l-.875 4.178c-.183.876.878 1.448 1.464.795l2.122-2.368-2.711-2.605zm2.857-4.178h3.072c.879 0 1.245.972.513 1.448l-2.71 1.764-.875-3.212zm-3.804-1.258L8.59 7.334c-.586-.653-.183-1.67.732-1.448l2.962.725-.572 2.091z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span className="text-[#d32323] font-black">yelp</span>
                  <span className="text-[10px] text-gray-400 font-mono">Verified</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-[#d32323] text-[10px] tracking-tighter">★★★★★</div>
                  <span className="text-[11px] font-bold text-white font-mono">5.0 Rating</span>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/25 rounded-xl p-3.5 sm:p-4 flex items-center justify-center sm:justify-start gap-3.5 transition-all duration-200 group cursor-default shadow-lg">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1877F2] flex items-center justify-center shrink-0 shadow-sm text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span>Facebook</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-[#1877F2] text-[10px] tracking-tighter">★★★★★</div>
                  <span className="text-[11px] font-bold text-white font-mono">100% Rec</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
