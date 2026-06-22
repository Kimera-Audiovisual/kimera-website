'use client';

import Image from 'next/image';
import { useState } from 'react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Tabs from '@/components/ui/Tabs';
import PosterCard from '@/components/ui/PosterCard';
import { IC } from '@/components/icons';
import { GENRES, POSTERS, type PosterGenre } from '@/lib/data';

export default function CatalogoPage() {
  const [genre, setGenre] = useState(0);
  const selectedGenre = GENRES[genre];
  const filtered = selectedGenre === 'Tudo' ? POSTERS : POSTERS.filter((p) => p.genre === (selectedGenre as PosterGenre));
  const visible = filtered.length ? filtered : POSTERS;

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--ink-950)' }}>
      <div style={{ position: 'relative', height: 280, overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80"
          alt="Destaque"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(12,15,21,0.95) 0%, rgba(12,15,21,0.5) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 32, left: 40 }}>
          <Badge variant="terracotta" style={{ marginBottom: 10 }}>DESTAQUE</Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 800, letterSpacing: '0.06em', color: 'var(--papyrus-200)', lineHeight: 1.1, marginBottom: 10 }}>
            O Mar de Dentro
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--ink-300)', lineHeight: 1.6, maxWidth: 420, marginBottom: 18 }}>
            Uma viagem documental pelo Mediterrâneo em busca de memórias que o oceano guarda.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button icon={IC.play(16)} size="md">Assistir agora</Button>
            <Button variant="outline" size="md" style={{ borderColor: 'rgba(233,216,166,0.35)', color: 'var(--papyrus-300)' }}>
              + Minha lista
            </Button>
          </div>
        </div>
      </div>

      <div style={{ padding: '28px 32px' }}>
        <div style={{ marginBottom: 24 }}>
          <Tabs
            tabs={GENRES.map((g) => ({ label: g }))}
            activeIndex={genre}
            onChange={setGenre}
            variant="line"
            style={{ borderBottomColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {visible.map((p) => (
            <PosterCard key={p.title} title={p.title} genre={p.genre} year={p.year} duration={p.dur} rating={p.rating} src={p.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
