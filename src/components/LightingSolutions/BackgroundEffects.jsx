export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 20px)",
        }}
      />

      {/* Golden glows */}
      <div className="absolute left-[10%] top-[15%] w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px]" />
      <div className="absolute right-[8%] top-[55%] w-[500px] h-[500px] bg-[#d4af37]/6 rounded-full blur-[150px]" />
      <div className="absolute left-[40%] bottom-[5%] w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-[180px]" />

      {/* Gold lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
    </div>
  );
}
