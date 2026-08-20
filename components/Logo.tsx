import React from "react";
import Image from "next/image";

export default function Logo({
  className = "w-[120px] sm:w-[135px] lg:w-[150px] h-auto",
  priority = true,
}: {
  className?: string;
  showText?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`relative flex items-center shrink-0 ${className}`}>
      <Image
        src="/images/simplified-home-remodeling-logo.png"
        alt="Simplified Home Remodeling"
        width={1467}
        height={1010}
        priority={priority}
        unoptimized
        className="w-full h-auto object-contain select-none"
      />
    </div>
  );
}

