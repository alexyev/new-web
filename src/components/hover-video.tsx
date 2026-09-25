'use client';

import { useEffect, useRef } from 'react';

interface HoverVideoProps {
  src: string;
  className?: string;
}

// A muted demo clip layered over a card's image. It plays while the enclosing
// `.group` card is hovered or keyboard-focused and rewinds when it is left, so
// the still image is what shows at rest and on touch devices.
export default function HoverVideo({ src, className }: HoverVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const card = video?.closest('.group');
    if (!video || !card) return;

    const play = () => {
      video.play().catch(() => {});
    };
    const stop = () => {
      video.pause();
      video.currentTime = 0;
    };

    card.addEventListener('mouseenter', play);
    card.addEventListener('mouseleave', stop);
    card.addEventListener('focusin', play);
    card.addEventListener('focusout', stop);
    return () => {
      card.removeEventListener('mouseenter', play);
      card.removeEventListener('mouseleave', stop);
      card.removeEventListener('focusin', play);
      card.removeEventListener('focusout', stop);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      className={className}
    />
  );
}
