import React, { useRef, useState } from 'react';

/**
 * Swipe carousel on mobile, normal grid on tablet / desktop.
 *
 * - Below 768px: cards sit in one row, snap to centre, and the next card peeks in. Dots show the position.
 * - 768px and up: it becomes a grid. Pass the column classes in `desktopClassName`,
 *   for example "md:grid-cols-2 lg:grid-cols-3".
 *
 * Same behaviour as the plan cards on Home.
 */
interface MobileCarouselProps {
  children: React.ReactNode;
  /** Grid column classes used from 768px up, e.g. "md:grid-cols-2 lg:grid-cols-3" */
  desktopClassName?: string;
  /** Width of each card on mobile. Smaller values show more of the next card. */
  itemWidth?: string;
  /** Dot colours: pick ones that show up on the section's background */
  dotActive?: string;
  dotInactive?: string;
}

const CSS = `
  .hl-car {
    display: flex;
    gap: 12px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    /* bleed to the screen edges inside a 16px-padded parent */
    margin: 0 -16px;
    padding: 4px 16px 12px;
    scroll-padding: 0 16px;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
  }
  .hl-car::-webkit-scrollbar { display: none; }
  .hl-car > * {
    flex: 0 0 var(--car-item, 82%);
    max-width: 340px;
    scroll-snap-align: center;
  }
  @media (min-width: 768px) {
    .hl-car {
      display: grid;
      overflow: visible;
      margin: 0;
      padding: 0;
      gap: 24px;
      scroll-snap-type: none;
    }
    .hl-car > * { flex: initial; max-width: none; }
  }
`;

export const MobileCarousel: React.FC<MobileCarouselProps> = ({
  children,
  desktopClassName = '',
  itemWidth = '82%',
  dotActive = '#F9CE69',
  dotInactive = 'rgba(255,255,255,0.4)',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = React.Children.count(children);

  const onScroll = () => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;

    // At the far right the last card may not reach the centre, so count it as the last one
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
      setIndex(count - 1);
      return;
    }
    const gap = parseFloat(getComputedStyle(el).columnGap) || 12;
    const i = Math.round(el.scrollLeft / (first.offsetWidth + gap));
    setIndex(Math.min(count - 1, Math.max(0, i)));
  };

  return (
    <>
      <style>{CSS}</style>

      <div
        ref={ref}
        onScroll={onScroll}
        className={`hl-car ${desktopClassName}`}
        style={{ '--car-item': itemWidth } as React.CSSProperties}
      >
        {children}
      </div>

      {/* Position dots (mobile only) */}
      <div className="flex justify-center gap-2 mt-1 md:hidden" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className="h-2 rounded-full transition-all"
            style={{ width: index === i ? 24 : 8, background: index === i ? dotActive : dotInactive }}
          />
        ))}
      </div>
    </>
  );
};
