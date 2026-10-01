'use client';

import { useEffect, useState } from 'react';

const storageKey = 'kleinicks-opening-seen';

export default function OpeningMoment() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const skipOpening = window.sessionStorage.getItem(storageKey) === 'yes'
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (skipOpening) {
      window.sessionStorage.setItem(storageKey, 'yes');
      const skipTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(skipTimer);
    }

    const leaveTimer = window.setTimeout(() => setLeaving(true), 2250);
    const hideTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(storageKey, 'yes');
      setVisible(false);
    }, 3050);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem(storageKey, 'yes');
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 650);
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className={`opening-moment${leaving ? ' is-leaving' : ''}`}
      onClick={dismiss}
      aria-label="Enter Madeline and Jack's wedding website"
    >
      <span className="opening-letters" aria-hidden="true">M J</span>
      <span className="opening-center">
        <span>April 10, 2026</span>
        <b>Madeline &amp; Jack</b>
        <i>Beverly Hills</i>
      </span>
      <span className="opening-hint">Enter</span>
    </button>
  );
}
