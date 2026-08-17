import React from "react";

export default function Logo({
  className = "h-9",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* S Geometric Interlocking Monogram Icon */}
      <svg
        viewBox="0 0 100 80"
        fill="currentColor"
        className="h-full w-auto text-white shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Segment of S */}
        <path
          d="M32 10 H75 C82 10 88 15.5 88 22.5 V23.5 C88 30.5 82 36 75 36 H44 V26 H72 C74.5 26 76.5 24.5 76.5 23 C76.5 21.5 74.5 20 72 20 H32 C21 20 12 29 12 40 C12 45 14 49.5 17.5 53 L24.5 46 C23 44 22 42 22 40 C22 34.5 26.5 30 32 30 H56 V40 H32 C30 40 28.5 41.5 28.5 43 C28.5 44.5 30 46 32 46 H44 V56 H32 C21 56 12 47 12 36 C12 21.5 21 10 32 10 Z"
          className="hidden"
        />
        {/* Exact Clean Dual Rounded Rect Interlocking S Paths */}
        {/* Top Rounded Hook */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36 8 C20.5 8 8 20.5 8 36 C8 44 11.5 51 17 56 L24 49 C20.5 45.5 18 41 18 36 C18 26 26 18 36 18 H72 V28 H42 V38 H76 C83.5 38 89.5 32 89.5 24.5 C89.5 15.5 83.5 8 74 8 H36 Z"
        />
        {/* Bottom Rounded Hook */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 72 C79.5 72 92 59.5 92 44 C92 36 88.5 29 83 24 L76 31 C79.5 34.5 82 39 82 44 C82 54 74 62 64 62 H28 V52 H58 V42 H24 C16.5 42 10.5 48 10.5 55.5 C10.5 64.5 16.5 72 26 72 H64 Z"
        />
      </svg>

      {/* Brand Typography matching reference */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-base sm:text-lg tracking-[0.14em] text-white leading-tight font-sans">
            SIMPLIFIED
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-gray-300 font-normal uppercase -mt-0.5">
            HOME REMODELING
          </span>
        </div>
      )}
    </div>
  );
}
