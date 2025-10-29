"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const STAGES = [1, 2, 4, 8, 16];
const STEP_MS = 1500; // time between expansions
const PAUSE_AT_END = 4000; // how long to pulse before fading
const FADE_DURATION = 1500; // smooth fade before restarting

export default function BeehouseGrowth() {
  const [stageIdx, setStageIdx] = useState(0);
  const [visibleStages, setVisibleStages] = useState<number[][]>([[1]]);
  const [isFading, setIsFading] = useState(false);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isFading) return;

    if (stageIdx < STAGES.length - 1) {
      timerRef.current = setTimeout(() => {
        setStageIdx((i) => i + 1);
        setVisibleStages((prev) => [...prev, [STAGES[stageIdx + 1]]]);
      }, STEP_MS);
    } else {
      timerRef.current = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setStageIdx(0);
          setVisibleStages([[1]]);
          setIsFading(false);
        }, FADE_DURATION);
      }, PAUSE_AT_END);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [stageIdx, isFading]);

  return (
    <section
      aria-label="Beehouse multiplication animation"
      className="py-16 sm:py-24 overflow-hidden transition-all"
      style={{
        background: "var(--color-gum-pale)",
        opacity: isFading ? 0 : 1,
        transition: `opacity ${FADE_DURATION}ms ease-in-out`,
      }}
    >
      <div className="container">
        <div className="kicker mb-2">Growing Hives</div>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Hive Splitting
        </h2>
        <p className="lead mb-10">
          Bee-come a Hive Splitter and multiply your hives.
        </p>

        <div className="flex flex-col gap-8 items-center transition-opacity duration-700">
          {visibleStages.map((stage, rowIndex) => {
            const count = stage[0];
            const cols = Math.min(count, 8);
            const items = Array.from({ length: count }, (_, i) => i);
            const isFinalRow =
              stageIdx === STAGES.length - 1 &&
              rowIndex === visibleStages.length - 1;

            return (
              <div
                key={rowIndex}
                className="grid hive-row gap-4 justify-center"
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                }}
              >
                {items.map((i) => (
                  <div
                    key={`${rowIndex}-${i}`}
                    className={`card hive-card grid place-items-center bg-white ${
                      isFinalRow && !prefersReduced ? "pulse-bg" : ""
                    }`}
                    style={{
                      padding: "1rem",
                      animation:
                        !prefersReduced && rowIndex === visibleStages.length - 1
                          ? "pop-in 0.5s ease-out both"
                          : undefined,
                    }}
                  >
                    <Image
                      src="/beeshouse.svg"
                      alt="Bee house"
                      width={50}
                      height={50}
                      className="beehouse w-10 h-10 md:w-12 md:h-12"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">🐝</div>
      </div>

      <style jsx global>{`
        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          60% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-bg {
          0% {
            background-color: white;
          }
          25% {
            background-color: var(--color-bee-yellow);
          }
          50% {
            background-color: var(--color-bee-dark);
          }
          75% {
            background-color: var(--color-bee-yellow);
          }
          100% {
            background-color: white;
          }
        }

        .pulse-bg {
          animation: pulse-bg 3s ease-in-out 0.5s;
        }

        @media (max-width: 640px) {
          /* shrink houses + tighten spacing on phones */
          .beehouse {
            width: 1.5rem;
            height: 1.5rem;
          } /* 24px */
          .hive-card {
            padding: 0.5rem !important;
          }
          .hive-row {
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
