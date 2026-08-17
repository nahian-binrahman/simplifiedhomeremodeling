"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, Play, Pause, Volume2, VolumeX, Maximize, ArrowRight } from "lucide-react";

export default function TransformationVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
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
    if (videoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = clickPos * duration;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

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

          {/* Right Column: Real Video Player Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-gray-200 group">
              
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/videos/remodeling-video.mp4"
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={togglePlay}
                  className="w-full h-full object-cover object-center cursor-pointer"
                />
                
                {/* Dark overlay when paused */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/30 cursor-pointer flex items-center justify-center transition-colors"
                  >
                    {/* Big Center Play Button */}
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-black shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 z-20"
                      aria-label="Play video"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black ml-1" />
                    </button>
                  </div>
                )}

                {/* Bottom Custom Video Control Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 text-white z-20 flex flex-col gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {/* Timeline Bar */}
                  <div
                    className="w-full h-2 bg-white/30 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-full bg-white transition-all rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="hover:text-gray-300 focus:outline-none"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 fill-current" />
                        ) : (
                          <Play className="w-4 h-4 fill-current" />
                        )}
                      </button>
                      <span className="text-[11px] sm:text-xs text-gray-300 font-mono">
                        {formatTime(currentTime)} / {formatTime(duration || 62)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <button
                        onClick={toggleMute}
                        className="hover:text-white focus:outline-none"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-red-400" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={handleFullscreen}
                        className="hover:text-white focus:outline-none"
                        aria-label="Fullscreen"
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
