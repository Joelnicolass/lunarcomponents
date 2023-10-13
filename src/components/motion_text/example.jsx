//"use client";

import clsx from "clsx";
import { ScrollReveal } from "../scroll_reveal/scroll_reveal";
import { MotionText } from "./motion.text";

export default function ExampleMotionText({ children }) {
  return (
    <div className="min-h-screen w-screen pt-12">
      <ScrollReveal
        mode="middle"
        className="mx-auto flex h-screen w-full align-middle justify-center items-center"
      >
        {(isActive) => (
          <MotionText body={children} mode="symbol">
            {(tokens) => (
              <h1 className="text-center text-3xl font-bold md:text-4xl">
                {tokens.map((token, index) => (
                  <span
                    key={index}
                    style={{
                      "--delay": `${index * 20}ms`,
                    }}
                    className={clsx(
                      {
                        "translate-y-8 opacity-0": !isActive,
                        "delay-[--delay]": isActive,
                      },
                      "inline-block whitespace-pre-wrap transition-[transform,opacity] duration-150"
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
