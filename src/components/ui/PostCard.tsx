'use client';

import Image from 'next/image';
import { useState, type CSSProperties } from 'react';

type PostCardProps = {
  author: string;
  authorHandle?: string;
  authorSrc?: string;
  content: string;
  timestamp?: string;
  likes?: number;
  comments?: number;
  tags?: string[];
  liked?: boolean;
  onLike?: (liked: boolean) => void;
  onComment?: () => void;
  className?: string;
  style?: CSSProperties;
};

export default function PostCard({
  author,
  authorHandle,
  authorSrc,
  content,
  timestamp,
  likes = 0,
  comments = 0,
  tags = [],
  liked = false,
  onLike,
  onComment,
  className,
  style,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(liked);
  const [count, setCount] = useState(likes);

  const initials = author
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');

  const toggleLike = () => {
    const next = !isLiked;
    setIsLiked(next);
    setCount((c) => (next ? c + 1 : c - 1));
    onLike?.(next);
  };

  return (
    <article
      className={['bg-white rounded-card border border-subtle shadow-xs p-4 font-sans', className ?? '']
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <div className="flex gap-[10px] mb-3">
        <div className="w-10 h-10 rounded-full shrink-0 bg-aegean-700 flex items-center justify-center overflow-hidden relative">
          {authorSrc ? (
            <Image src={authorSrc} alt={author} fill sizes="40px" className="object-cover" />
          ) : (
            <span className="font-display text-[14px] font-bold text-papyrus-200">{initials}</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-px">
          <span className="font-bold text-base text-strong leading-tight">{author}</span>
          <span className="text-sm text-muted">
            {authorHandle ? `@${authorHandle}` : ''}
            {authorHandle && timestamp ? ' · ' : ''}
            {timestamp ?? ''}
          </span>
        </div>
      </div>

      <p className={['text-base text-body leading-relaxed', tags.length ? 'mb-3' : ''].filter(Boolean).join(' ')}>
        {content}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-[6px] mb-3">
          {tags.map((t) => (
            <span key={t} className="text-sm font-semibold text-aegean-500 cursor-pointer">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-5 border-t border-subtle pt-[10px]">
        <button
          onClick={toggleLike}
          className={[
            'flex items-center gap-[5px] bg-none border-0 cursor-pointer text-sm font-semibold transition-colors duration-150 py-[2px]',
            isLiked ? 'text-terracotta-500' : 'text-muted',
          ].join(' ')}
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.8}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {count > 0 && count}
        </button>
        <button
          onClick={onComment}
          className="flex items-center gap-[5px] bg-none border-0 cursor-pointer text-sm font-semibold text-muted py-[2px]"
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {comments > 0 && comments}
        </button>
      </div>
    </article>
  );
}
