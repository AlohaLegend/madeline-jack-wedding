'use client';

import Image from 'next/image';
import { FormEvent, ReactNode, useEffect, useState } from 'react';

const ACCESS_KEY = 'mj-wedding-access-v1';
const PASSWORD_ENDPOINT = 'https://madeline-jack-wedding-auth.bammediaauth.workers.dev/verify';

type PasswordGateProps = {
  children: ReactNode;
  backgroundImage: string;
  monogram: string;
};

export default function PasswordGate({ children, backgroundImage, monogram }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setUnlocked(window.localStorage.getItem(ACCESS_KEY) === 'granted');
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  async function submitPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChecking(true);
    setError('');

    try {
      const response = await fetch(PASSWORD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const result = await response.json() as { ok?: boolean };

      if (response.ok && result.ok) {
        window.localStorage.setItem(ACCESS_KEY, 'granted');
        setUnlocked(true);
        setPassword('');
        return;
      }
    } catch {
      setError('We couldn’t check the password. Please try again in a moment.');
      setChecking(false);
      return;
    }

    setError('That password doesn’t look quite right. Please try again.');
    setChecking(false);
  }

  if (ready && unlocked) return children;

  return (
    <main className="password-page">
      <div className="password-background" style={{ backgroundImage: `url('${backgroundImage}')` }} aria-hidden="true" />
      <div className="password-overlay" aria-hidden="true" />
      <section className="password-panel" aria-labelledby="password-title">
        <Image src={monogram} alt="Madeline and Jack monogram" width={1300} height={398} priority />
        <p className="eyebrow">Dawnridge · Beverly Hills</p>
        <h1 id="password-title">Madeline <i>&amp;</i> Jack</h1>
        <p>We made this for the people celebrating with us. Enter the password from your invitation to continue.</p>
        <form onSubmit={submitPassword}>
          <label htmlFor="wedding-password">Wedding website password</label>
          <div className="password-field">
            <input
              id="wedding-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              placeholder="Password"
              aria-describedby={error ? 'password-error' : undefined}
              autoFocus
              disabled={checking}
            />
            <button type="submit" disabled={checking}>{checking ? 'Checking…' : 'Enter'}</button>
          </div>
          <p className="password-error" id="password-error" aria-live="polite">{error}</p>
        </form>
      </section>
      <p className="password-footer">Madeline &amp; Jack · Los Angeles</p>
    </main>
  );
}
