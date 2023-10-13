//"use client";

import clsx from "clsx";
import { ScrollObserver } from "./scroll_observer";

export default function ExampleScrollObserver() {
  const items = [
    {
      title: "REACT DEVELOPER",
      content: "I'm a React developer with 5 years of experience.",
    },
    {
      title: "DESIGNER",
      content: "I'm a designer with 5 years of experience.",
    },
    {
      title: "UI/UX",
      content: "I'm a UI/UX with 5 years of experience.",
    },
  ];

  return (
    <div className="min-h-screen w-screen px-8 py-12 md:px-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollObserver className="relative grid grid-cols-2 gap-32">
          {(isHidden) => (
            <>
              <ScrollObserver.TriggerGroup className="py-[50vh]">
                {items.map((item, index) => (
                  <ScrollObserver.Trigger
                    id={`features-${index}`}
                    key={index}
                    className="relative scroll-mt-[50vh]"
                  >
                    {(isActive) => (
                      <div
                        className={clsx(
                          isActive
                            ? "text-white"
                            : "text-white/10 hover:text-white/30",
                          "relative -mx-8 -mb-4 rounded-2xl p-8 transition duration-300 hover:bg-white/10"
                        )}
                      >
                        <div className="font-epilogue text-4xl font-bold">
                          {item.title}
                        </div>

                        <div className="mt-4 text-lg">{item.content}</div>

                        <a
                          href={`#features-${index}`}
                          className="absolute inset-0"
                        ></a>
                      </div>
                    )}
                  </ScrollObserver.Trigger>
                ))}
              </ScrollObserver.TriggerGroup>

              <div className="sticky top-0 h-[100vh]">
                <div
                  className={clsx(
                    { "opacity-0 delay-100": !isHidden },
                    "absolute inset-0 flex items-center"
                  )}
                >
                  <div className="aspect-square w-full rounded-3xl bg-white/10"></div>
                </div>

                <ScrollObserver.ReactorGroup className="flex items-center justify-center">
                  {items.map((item, index) => (
                    <ScrollObserver.Reactor
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {(isActive) => (
                        <div
                          className={clsx(
                            {
                              "opacity-0 delay-100": !isActive,
                              "opacity-100": isActive,
                              "from-purple-100 to-indigo-300": index == 0,
                              "from-cyan-300 to-sky-400": index == 1,
                              "from-amber-300 to-orange-400": index == 2,
                            },
                            "aspect-square w-full rounded-3xl bg-gradient-to-b transition"
                          )}
                        ></div>
                      )}
                    </ScrollObserver.Reactor>
                  ))}
                </ScrollObserver.ReactorGroup>
              </div>
            </>
          )}
        </ScrollObserver>
      </div>
    </div>
  );
}
