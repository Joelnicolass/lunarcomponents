"use client";

import clsx from "clsx";
import { ScrollReveal } from "./scroll_reveal";

const Card = ({ className, style, ...props }) => (
  <div
    className={clsx(
      "bg-transparent rounded-2xl p-8 transition duration-300 hover:bg-white/10",
      className
    )}
    style={style}
    {...props}
  >
    <div className="font-epilogue text-4xl font-bold">REACT DEVELOPER</div>

    <div className="mt-4 text-lg">
      I&apos;m a React developer with 5 years of experience.
    </div>
  </div>
);

const items = [Card, Card, Card, Card, Card, Card, Card, Card, Card, Card];

export default function ExampleScrollReveal2() {
  return (
    <div className="min-h-screen w-screen px-8 py-12">
      <ScrollReveal
        offset={200}
        className="mx-auto max-w-2xl [--duration:500ms]"
      >
        {(isActive) => (
          <>
            <div
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "flex justify-center transition-[transform,opacity] duration-[--duration]"
              )}
            >
              <div className="rounded-full border border-sky-400 px-4 py-0.5 text-xs text-white">
                Features
              </div>
            </div>

            <h2
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "text-dark mt-6 text-center font-display text-xl font-medium transition-[transform,opacity] duration-[--duration] md:text-3xl"
              )}
            >
              FlowTone does it all (and more)
            </h2>

            <h3
              className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "mt-4 text-center text-white/75 transition-[transform,opacity] duration-[--duration]"
              )}
            >
              Drop your file onto FlowTone and we&apos;ll enhance it.
              <br className="hidden md:block" />
              No need to separate audio from video.
            </h3>

            <div className="mt-6 transition-[transform,opacity] duration-[--duration] md:mt-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 md:gap-y-8">
                {items.map((Item, index) => (
                  <Item
                    style={{ "--delay": `${(index + 1) * 200}ms` }}
                    className={clsx(
                      isActive ? "delay-[--delay]" : "translate-y-8 opacity-0",
                      "transition-[transform,opacity] duration-[--duration]"
                    )}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </ScrollReveal>
    </div>
  );
}
