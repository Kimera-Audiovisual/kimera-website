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
    <div className="flex-1 overflow-y-auto bg-ink-950">
      <div className="relative h-[220px] md:h-[280px] overflow-hidden">
        <Image
          src="/assets/destaque.png"
          alt="Destaque"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,15,21,0.95)_0%,rgba(12,15,21,0.5)_60%,transparent_100%)]" />
        <div className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-10 md:right-auto">
          <Badge variant="terracotta" className="mb-[10px]">DESTAQUE</Badge>
          <h1 className="font-display text-[26px] md:text-[38px] font-extrabold tracking-[0.06em] text-papyrus-200 leading-[1.1] mb-[10px]">
            Olho por Olho
          </h1>
          <p className="font-serif italic text-[14px] md:text-[16px] text-ink-300 leading-relaxed max-w-full md:max-w-[420px] mb-[18px]">
            “Quando a urgência do agora anula o seus sentidos de pensamento, uma jovem não se vê em outra posição a não ser vender tudo o que lhe resta - dignidade”.
          </p>
          <div className="flex gap-[10px] flex-wrap">
            <Button icon={IC.play(16)} size="md">Assistir agora</Button>
            <Button variant="outline" size="md" style={{ borderColor: 'rgba(233,216,166,0.35)', color: 'var(--papyrus-300)' }}>
              + Minha lista
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 md:px-8 md:py-7">
        <div className="mb-6 overflow-x-auto md:overflow-visible">
          <Tabs
            tabs={GENRES.map((g) => ({ label: g }))}
            activeIndex={genre}
            onChange={setGenre}
            variant="line"
            className="w-max min-w-full md:w-auto"
            style={{ borderBottomColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px]">
          {visible.map((p) => (
            <PosterCard key={p.title} title={p.title} genre={p.genre} year={p.year} duration={p.dur} rating={p.rating} src={p.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
