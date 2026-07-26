import { useEffect, useRef } from 'react';
import Main1 from './sections/Main1';
import Main2 from './sections/Main2';
import Main3 from './sections/Main3';
import Main4 from './sections/Main4';
import Main5 from './sections/Main5';
import Main6 from './sections/Main6';

export default function Main() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return undefined;

    let isMoving = false;
    let animationFrame: number | undefined;

    const moveToSection = (direction: number) => {
      const sections = Array.from(mainElement.querySelectorAll<HTMLElement>('.main-section'));
      if (!sections.length) return;

      const currentIndex = sections.reduce((closestIndex, section, index) => {
        const closestDistance = Math.abs(sections[closestIndex].offsetTop - mainElement.scrollTop);
        const sectionDistance = Math.abs(section.offsetTop - mainElement.scrollTop);
        return sectionDistance < closestDistance ? index : closestIndex;
      }, 0);
      const nextIndex = Math.max(0, Math.min(currentIndex + direction, sections.length - 1));

      if (nextIndex === currentIndex) return;

      isMoving = true;

      const startPosition = mainElement.scrollTop;
      const targetPosition = sections[nextIndex].offsetTop;
      const startTime = performance.now();
      const animationDuration = 720;

      const animateScroll = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / animationDuration, 1);
        const easedProgress = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        mainElement.scrollTop = startPosition + (targetPosition - startPosition) * easedProgress;

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animateScroll);
        } else {
          isMoving = false;
        }
      };

      animationFrame = window.requestAnimationFrame(animateScroll);
    };

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 2) return;

      event.preventDefault();
      if (isMoving) return;

      moveToSection(event.deltaY > 0 ? 1 : -1);
    };

    mainElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      mainElement.removeEventListener('wheel', handleWheel);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main ref={mainRef} className="page page-main">
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
    </main>
  );
}
