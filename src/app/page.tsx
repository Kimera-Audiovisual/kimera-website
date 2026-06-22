'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { IC } from '@/components/icons';
import { useIsMobile } from '@/hooks/useIsMobile';

const FEATURES = [
  { icon: IC.film(32), title: 'Catálogo', desc: 'Curtas, documentários e obras audiovisuais reunidas em uma plataforma feita para artistas.' },
  { icon: IC.network(32), title: 'Rede', desc: 'Compartilhe ideias, troque referências e conecte-se com a comunidade audiovisual brasileira.' },
  { icon: IC.user(32), title: 'Perfil', desc: 'Apresente seu trabalho e construa sua identidade como artista de forma profissional.' },
] as const;

export default function LandingPage() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const onEnter = () => router.push('/login');
  const onRegister = () => router.push('/home');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--aegean-950)', overflowY: 'auto' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '16px 20px' : '20px 48px',
          borderBottom: '1px solid rgba(233,216,166,0.10)',
        }}
      >
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, letterSpacing: '0.18em', color: 'var(--papyrus-400)' }}>
          KIMERA
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="ghost-dark" size="sm" onClick={onEnter}>Entrar</Button>
          <Button variant="secondary" size="sm" onClick={onRegister}>Criar conta</Button>
        </div>
      </header>

      <div style={{ padding: isMobile ? '40px 20px 40px' : '80px 48px 60px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: isMobile ? 32 : 60, maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--papyrus-600)', marginBottom: 16 }}>
            REDE SOCIAL · AUDIOVISUAL
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 40 : 64, fontWeight: 900, letterSpacing: '0.08em', color: 'var(--papyrus-300)', lineHeight: 1.05, marginBottom: 20 }}>
            Sua obra<br />merece<br />ser vista.
          </h1>
          <div style={{ height: 2, width: 80, background: 'linear-gradient(90deg, var(--papyrus-600), transparent)', marginBottom: 24 }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: isMobile ? 16 : 20, color: 'var(--ink-300)', lineHeight: 1.65, marginBottom: 36, maxWidth: 440 }}>
            A Kimera é a plataforma onde artistas e estudantes de audiovisual compartilham obras, constroem redes e fazem história.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button size="lg" onClick={onRegister}>Criar conta gratuita</Button>
            <Button variant="outline" size="lg" onClick={onEnter} style={{ borderColor: 'rgba(233,216,166,0.4)', color: 'var(--papyrus-400)' }}>
              Explorar catálogo
            </Button>
          </div>
        </div>

        <div
          style={{
            flexShrink: 0,
            width: isMobile ? '100%' : 360,
            maxWidth: 360,
            height: isMobile ? 300 : 400,
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--aegean-800), var(--aegean-900))',
          }}
        >
          <Image
            src="/assets/chimera-winged-lion.jpg"
            alt="Kimera"
            fill
            priority
            sizes="360px"
            style={{ objectFit: 'contain', padding: 32, filter: 'invert(1)', opacity: 0.18 }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 88, fontWeight: 900, letterSpacing: '0.12em', color: 'var(--papyrus-500)', opacity: 0.12, lineHeight: 1 }}>
              K
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--papyrus-400)', lineHeight: 1.5, textAlign: 'center' }}>
              &quot;Assim como a quimera, a arte une o que parecia inconciliável.&quot;
            </div>
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--papyrus-600), transparent)' }} />
        </div>
      </div>

      <div style={{ padding: isMobile ? '0 20px 56px' : '0 48px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(233,216,166,0.2), transparent)', marginBottom: isMobile ? 36 : 56 }} />
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(233,216,166,0.10)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
              }}
            >
              <div style={{ color: 'var(--papyrus-600)', marginBottom: 16 }}>{f.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--papyrus-300)', marginBottom: 10 }}>
                {f.title}
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-300)', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
