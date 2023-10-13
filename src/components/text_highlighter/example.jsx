//"use client"

import clsx from "clsx";
import { ScrollObserver } from "../scroll_observer/scroll_observer";

export default function ExampleTextHighlighter() {
  return (
    <div className="min-h-screen w-screen px-8 py-12 md:px-0">
      <div className="h-screen pb-24 text-center text-sm text-white/30"></div>

      <ScrollObserver className="relative mx-auto h-[150vh] max-w-2xl">
        <ScrollObserver.TriggerGroup className="max-w-lg space-y-3 text-3xl">
          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-white transition"
                  )}
                >
                  <span>ESTO </span>
                  <span className="bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent transition">
                    ES GENIAL
                  </span>
                  <span> PARA HACER UNA LANDING</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-white/20 transition"
                  )}
                >
                  Este es el texto grisado Este es el texto grisado Este es el
                  texto grisado
                </span>
              </>
            )}
          </ScrollObserver.Trigger>

          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-white transition"
                  )}
                >
                  <span>Support </span>
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent transition">
                    recurring business
                  </span>
                  <span> models and minimize churn</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-white/20 transition"
                  )}
                >
                  Support recurring business models and minimize churn
                </span>
              </>
            )}
          </ScrollObserver.Trigger>

          <ScrollObserver.Trigger className="relative">
            {(isActive) => (
              <>
                <span
                  className={clsx(
                    { "opacity-0": !isActive },
                    "absolute inset-0 text-white transition"
                  )}
                >
                  <span>Ship </span>
                  <span className="bg-gradient-to-r from-lime-300 to-green-400 bg-clip-text text-transparent transition">
                    more quickly
                  </span>
                  <span> with powerful and easy-to-use APIs</span>
                </span>

                <span
                  className={clsx(
                    { "opacity-0": isActive },
                    "relative text-white/20 transition"
                  )}
                >
                  Ship more quickly with powerful and easy-to-use APIs
                </span>
              </>
            )}
          </ScrollObserver.Trigger>
        </ScrollObserver.TriggerGroup>
      </ScrollObserver>
    </div>
  );
}
