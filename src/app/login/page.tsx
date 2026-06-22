'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function LoginPage() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onLogin = () => router.push('/home');

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', background: 'var(--surface-page)' }}>
      <div
        style={{
          display: isMobile ? 'none' : 'flex',
          background: 'linear-gradient(160deg, var(--aegean-900) 0%, var(--aegean-700) 100%)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/assets/chimera-winged-lion.jpg"
          alt=""
          fill
          priority
          sizes="50vw"
          style={{ objectFit: 'cover', filter: 'invert(1)', opacity: 0.06 }}
        />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 900, letterSpacing: '0.18em', color: 'var(--papyrus-400)', lineHeight: 1 }}>
            KIMERA
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--aegean-300)', marginTop: 6 }}>
            AUDIOVISUAL
          </div>
          <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--papyrus-600), transparent)', margin: '28px 0' }} />
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: 'var(--papyrus-300)', lineHeight: 1.7, maxWidth: 320 }}>
            &quot;O cinema é a verdade vinte e quatro vezes por segundo.&quot;
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--papyrus-600)', letterSpacing: '0.1em', marginTop: 12 }}>
            - JEAN-LUC GODARD
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? 24 : 48 }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--aegean-900)', marginBottom: 6 }}>
            Bem-vindo de volta
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)', marginBottom: 32 }}>
            Entre na sua conta para continuar.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20 }}>
            <Input label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Senha" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <Checkbox label="Lembrar de mim" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <a style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-link)', cursor: 'pointer' }}>Esqueceu a senha?</a>
          </div>

          <Button fullWidth size="lg" onClick={onLogin}>Entrar</Button>

          <div style={{ textAlign: 'center', marginTop: 20, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)' }}>
            Não tem conta?{' '}
            <a onClick={() => router.push('/')} style={{ color: 'var(--aegean-600)', fontWeight: 700, cursor: 'pointer' }}>
              Criar agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
