import React from "react";

export default function SinceSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-8 md:py-0">

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center w-full">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Since
            <span className="block mt-2 sm:mt-3">2016</span>
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 text-gray-400 max-w-md text-xs sm:text-sm leading-relaxed">
            Environ Lighting has redefined illumination with innovative,
            sustainable designs—transforming spaces and inspiring modern
            living since day one.
          </p>
        </div>

        {/* RIGHT VIDEO + VERTICAL TEXT */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">

            {/* VERTICAL BRAND TEXT - HIDDEN ON MOBILE */}
            <div className="hidden sm:flex items-center">
              <div className="mr-4 w-[1px] h-40 sm:h-52 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent" />
              <div
                className="text-[#d4af37]/70 text-[8px] sm:text-[11px] tracking-[0.35em]
                [writing-mode:vertical-rl] rotate-180 uppercase"
              >
                Innovative • Sustainable • Timeless
              </div>
            </div>

            {/* VIDEO FRAME - RESPONSIVE */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-none md:w-[640px] lg:w-[720px] h-48 sm:h-64 md:h-80 lg:h-[420px] rounded-sm overflow-hidden shadow-2xl">

              <video
                src="/videos/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* GOLDEN GLOW */}
              <div className="absolute inset-0 bg-[#d4af37]/10 blur-3xl -z-10" />

              {/* SOFT BORDER */}
              <div className="absolute inset-0 border border-[#d4af37]/20 pointer-events-none" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
