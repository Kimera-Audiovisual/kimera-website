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
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-xs)',
        padding: 16,
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            flexShrink: 0,
            background: 'var(--aegean-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {authorSrc ? (
            <Image src={authorSrc} alt={author} fill sizes="40px" style={{ objectFit: 'cover' }} />
          ) : (
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--papyrus-200)' }}>
              {initials}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1 }}>
          <span style={{ fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.2 }}>
            {author}
          </span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            {authorHandle ? `@${authorHandle}` : ''}
            {authorHandle && timestamp ? ' · ' : ''}
            {timestamp ?? ''}
          </span>
        </div>
      </div>

      <p
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--text-body)',
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: tags.length ? 12 : 0,
        }}
      >
        {content}
      </p>

      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
          {tags.map((t) => (
            <span key={t} style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--aegean-500)', cursor: 'pointer' }}>
              #{t}
            </span>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: 20, borderTop: '1px solid var(--border-subtle)', paddingTop: 10 }}>
        <button
          onClick={toggleLike}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: isLiked ? 'var(--terracotta-500)' : 'var(--text-muted)',
            transition: 'color 0.15s',
            padding: '2px 0',
          }}
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.8}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {count > 0 && count}
        </button>
        <button
          onClick={onComment}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: 'var(--text-muted)',
            padding: '2px 0',
          }}
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
