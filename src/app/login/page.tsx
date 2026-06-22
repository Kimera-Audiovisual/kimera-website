'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onLogin = () => router.push('/home');

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-page">
      <div className="hidden md:flex bg-[linear-gradient(160deg,var(--aegean-900)_0%,var(--aegean-700)_100%)] flex-col items-center justify-center p-12 relative overflow-hidden">
        <Image src="/assets/quimera.png" alt="" fill priority sizes="50vw" className="object-cover invert opacity-[0.06]" />
        <div className="relative z-10 text-center">
          <div className="font-display text-[52px] font-black tracking-[0.18em] text-papyrus-400 leading-none">
            KIMERA
          </div>
          <div className="font-sans text-[11px] tracking-[0.2em] text-aegean-300 mt-[6px]">AUDIOVISUAL</div>
          <div className="h-px bg-[linear-gradient(90deg,transparent,var(--papyrus-600),transparent)] my-7" />
          <p className="font-serif italic text-[18px] text-papyrus-300 leading-[1.7] max-w-[320px]">
            &quot;O cinema é a verdade vinte e quatro vezes por segundo.&quot;
          </p>
          <p className="font-sans text-[11px] text-papyrus-600 tracking-[0.1em] mt-3">- JEAN-LUC GODARD</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[380px]">
          <h2 className="font-display text-[28px] font-bold tracking-[0.06em] text-aegean-900 mb-[6px]">
            Bem-vindo de volta
          </h2>
          <p className="font-sans text-[14px] text-muted mb-8">Entre na sua conta para continuar.</p>

          <div className="flex flex-col gap-4 mb-5">
            <Input label="E-mail" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Senha" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="flex items-center justify-between mb-6">
            <Checkbox label="Lembrar de mim" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <a className="font-sans text-[13px] text-link cursor-pointer">Esqueceu a senha?</a>
          </div>

          <Button fullWidth size="lg" onClick={onLogin}>Entrar</Button>

          <div className="text-center mt-5 font-sans text-[14px] text-muted">
            Não tem conta?{' '}
            <a onClick={() => router.push('/')} className="text-aegean-600 font-bold cursor-pointer">
              Criar agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
