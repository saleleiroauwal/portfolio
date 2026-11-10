import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], defaultSection = 'home'): string {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) {
      return;
    }

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-22% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));

    const handleScrollBottom = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
      if (nearBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScrollBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollBottom);
    };
  }, [sectionIds]);

  return activeSection;
}

