import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = true }) => {
  const alignmentClass = className.includes('items-start') ? 'items-start' : 'items-center';
  
  return (
    <div className={`flex flex-col gap-3 group ${alignmentClass} ${className}`}>
      {/* JB Monogram Box */}
      <div className={`w-10 h-10 flex items-center justify-center border ${light ? 'border-white bg-white text-editorial-black' : 'border-editorial-black bg-editorial-black text-white'} font-serif font-bold text-sm transition-all duration-700 group-hover:bg-gold group-hover:border-gold`}>
        JB
      </div>
      
      <div className={`flex flex-col ${alignmentClass}`}>
        {/* James Boswell Name */}
        <div className={`text-xl md:text-2xl font-serif tracking-tight uppercase ${light ? 'text-white' : 'text-editorial-black'}`}>
          James Boswell
        </div>
        
        {/* Hair Design with Lines */}
        <div className={`flex items-center gap-3 w-full mt-1`}>
          <div className={`flex-1 h-[0.5px] min-w-[20px] ${light ? 'bg-white/40' : 'bg-editorial-black/20'}`} />
          <span className={`text-[9px] tracking-[0.4em] font-sans uppercase whitespace-nowrap ${light ? 'text-white' : 'text-editorial-black/60'}`}>
            Hair Design
          </span>
          <div className={`flex-1 h-[0.5px] min-w-[20px] ${light ? 'bg-white/40' : 'bg-editorial-black/20'}`} />
        </div>
      </div>
    </div>
  );
};
