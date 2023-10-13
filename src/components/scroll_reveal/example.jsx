//"use client";

import clsx from "clsx";
import { ScrollReveal } from "./scroll_reveal";
import { MotionText } from "../motion_text/motion.text";

const text = "How you design and build matters.";

export default function ExampleScrollReveal() {
  return (
    <div className="min-h-screen w-screen pt-12">
      <div className="h-screen text-center text-sm text-white/30">
        Scroll down
      </div>

      <ScrollReveal
        mode="middle"
        className="mx-auto flex h-screen max-w-2xl items-center"
      >
        {(isActive) => (
          <MotionText body={text} mode="word">
            {(tokens) => (
              <h1 className="max-w-xl text-left text-3xl font-bold md:text-4xl">
                {tokens.map((token, index) => (
                  <span
                    key={index}
                    style={{
                      "--delay": `${index * 100}ms`,
                    }}
                    className={clsx(
                      {
                        "translate-y-8 opacity-0": !isActive,
                        "delay-[--delay]": isActive,
                      },
                      "inline-block whitespace-pre-wrap transition-[transform,opacity] duration-300"
                    )}
                  >
                    {token}
                  </span>
                ))}
              </h1>
            )}
          </MotionText>
        )}
      </ScrollReveal>
    </div>
  );
}
