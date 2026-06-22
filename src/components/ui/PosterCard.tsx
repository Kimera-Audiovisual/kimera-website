'use client';

import Image from 'next/image';
import type { CSSProperties, MouseEventHandler } from 'react';

type PosterCardProps = {
  title?: string;
  genre?: string;
  year?: string;
  duration?: string;
  src?: string;
  rating?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
};

export default function PosterCard({ title, genre, year, duration, src, rating, onClick, className, style }: PosterCardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        'group relative rounded-poster overflow-hidden cursor-pointer w-full aspect-[2/3] bg-ink-800',
        'shadow-cinema-md hover:shadow-poster transition-[transform,box-shadow] duration-[220ms] ease-out',
        'hover:-translate-y-2 hover:scale-[1.03]',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {src && <Image src={src} alt={title ?? ''} fill sizes="(max-width: 768px) 50vw, 220px" className="object-cover" />}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,15,21,0.92)_0%,rgba(12,15,21,0.4)_50%,transparent_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-[220ms]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.18] backdrop-blur-[6px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-[220ms]">
        <svg width={20} height={20} viewBox="0 0 24 24" fill="white">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
      {rating && (
        <div className="absolute top-2 right-2 bg-papyrus-600 text-aegean-950 font-sans text-[10px] font-extrabold px-[7px] py-[2px] rounded-sm tracking-[0.06em]">
          ★ {rating}
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 px-[10px] pt-3 pb-[10px]">
        {genre && (
          <div className="font-sans text-[9px] font-extrabold tracking-[0.12em] text-papyrus-600 uppercase mb-[3px]">
            {genre}
          </div>
        )}
        {title && (
          <div className="font-display text-[13px] font-bold tracking-wide text-papyrus-100 leading-snug">
            {title}
          </div>
        )}
        {(year || duration) && (
          <div className="font-sans text-[10px] text-ink-300 mt-[3px]">
            {[year, duration].filter(Boolean).join(' · ')}
          </div>
        )}
      </div>
    </div>
  );
}
