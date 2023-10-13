//"use client"

import clsx from "clsx";
import { TextReveal } from "./text_reveal";

export default function ExampleTextReveal({ children }) {
  return (
    <div className="min-h-screen w-screen px-8 py-12 md:px-0">
      <TextReveal
        body={children}
        className="relative mx-auto h-[200vh] w-full max-w-lg"
      >
        {(tokens) => (
          <div className="sticky left-0 top-0 flex h-1/2 items-center text-3xl font-medium leading-tight text-white">
            <div>
              {tokens.map((token, index) => (
                <TextReveal.Token key={index} index={index}>
                  {(isActive) => (
                    <span
                      className={clsx(
                        {
                          "opacity-10": !isActive,
                        },
                        "transition"
                      )}
                    >
                      {token}
                    </span>
                  )}
                </TextReveal.Token>
              ))}
            </div>
          </div>
        )}
      </TextReveal>
    </div>
  );
}
