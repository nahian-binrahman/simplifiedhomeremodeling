import React from "react";
import Image from "next/image";

export default function Logo({
  className = "h-11 sm:h-12",
  priority = false,
}: {
  className?: string;
  showText?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Image
        src="/images/simplified-home-remodeling-logo.png"
        alt="Simplified Home Remodeling"
        width={1467}
        height={1010}
        priority={priority}
        className="h-full w-auto max-h-full object-contain"
      />
    </div>
  );
}
