import { useEffect, useRef } from "react";

const GLYPHS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789<>/\\|=+*";
const FONT_SIZE = 15;
const FRAME_MS = 45;

type MatrixRainProps = {
  className?: string;
};

export function MatrixRain({ className = "" }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const font = `${FONT_SIZE}px "JetBrains Mono", ui-monospace, monospace`;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let raf = 0;
    let lastFrame = 0;

    const drawStatic = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);
      ctx.font = font;

      for (let x = 0; x < columns; x += 1) {
        for (let y = 0; y < height / FONT_SIZE; y += 1) {
          if (Math.random() > 0.22) continue;
          const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          ctx.fillStyle = `rgba(255, 255, 255, ${(Math.random() * 0.35 + 0.05).toFixed(3)})`;
          ctx.fillText(char, x * FONT_SIZE, y * FONT_SIZE);
        }
      }
    };

    const drawFrame = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = font;

      for (let i = 0; i < columns; i += 1) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        ctx.fillStyle = Math.random() > 0.975 ? "#ffffff" : "rgba(255, 255, 255, 0.95)";
        ctx.fillText(char, x, y);

        if (y > height) {
          drops[i] = Math.floor(Math.random() * -12);
        }

        drops[i] += 1;
      }
    };

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (height / FONT_SIZE)),
      );

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      if (reduceMotion) drawStatic();
    };

    const loop = (time: number) => {
      raf = window.requestAnimationFrame(loop);

      if (document.hidden || time - lastFrame < FRAME_MS) return;
      lastFrame = time;
      drawFrame();
    };

    setup();

    if (!reduceMotion) {
      raf = window.requestAnimationFrame(loop);
    }

    const onResize = () => setup();
    const onVisibility = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        raf = window.requestAnimationFrame(loop);
      }
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={`matrix-rain ${className}`} aria-hidden="true" />;
}
