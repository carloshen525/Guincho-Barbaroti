import React from 'react';

export default function Logo({ size = 'normal', className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Stylized Tow Truck Icon */}
      <div className={`relative flex-shrink-0 flex items-center justify-center ${isLarge ? 'w-14 h-14' : isSmall ? 'w-9 h-9' : 'w-11 h-11'}`}>
        <svg 
          viewBox="0 0 100 64" 
          className="w-full h-full drop-shadow-md"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Winch Boom / Cab Arm */}
          <path d="M14 38L38 10H46L24 40H14Z" fill="#E51920" />
          <path d="M38 12L56 22" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="56" cy="22" r="3" fill="#E51920" />
          <path d="M56 24V32" stroke="#E51920" strokeWidth="2.5" strokeLinecap="round" />

          {/* Truck Platform / Bed */}
          <path d="M8 40H62V46H8V40Z" fill="#E5E7EB" />
          <path d="M12 40H30L34 46H16L12 40Z" fill="#E51920" />

          {/* Truck Cab */}
          <path d="M60 22H78L88 34V46H60V22Z" fill="#FFFFFF" />
          <path d="M64 26H76L82 34H64V26Z" fill="#111827" />
          <path d="M60 38H86V46H60V38Z" fill="#E51920" />

          {/* Front Bumper & Grill */}
          <rect x="88" y="38" width="4" height="8" rx="1" fill="#9CA3AF" />
          <circle cx="86" cy="36" r="2" fill="#FBBF24" />

          {/* Amber Warning Light on Roof */}
          <rect x="67" y="19" width="10" height="3" rx="1.5" fill="#F59E0B" className="animate-pulse" />

          {/* Wheels */}
          {/* Rear Wheels */}
          <circle cx="26" cy="48" r="9" fill="#1F2937" />
          <circle cx="26" cy="48" r="6" fill="#F3F4F6" />
          <circle cx="26" cy="48" r="3" fill="#E51920" />

          {/* Front Wheels */}
          <circle cx="76" cy="48" r="9" fill="#1F2937" />
          <circle cx="76" cy="48" r="6" fill="#F3F4F6" />
          <circle cx="76" cy="48" r="3" fill="#E51920" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-['Montserrat',sans-serif] font-bold text-white text-[17px] sm:text-[20px] tracking-tight">
            Guincho
          </span>
          <span className="font-['Montserrat',sans-serif] font-black text-[#E51920] text-[18px] sm:text-[22px] tracking-tight uppercase">
            BARBAROTI
          </span>
        </div>
        <span className="font-['Montserrat',sans-serif] font-semibold text-[9.5px] sm:text-[11px] tracking-[0.24em] text-gray-300 uppercase mt-0.5">
          RIBEIRÃO PRETO
        </span>
      </div>
    </div>
  );
}

