//"use client";

import { ColorSwapper } from "./color_swaper";

export default function ExampleColorSwapper() {
  return (
    <div className="w-screen">
      <ColorSwapper>
        <ColorSwapper.Portal />
        <ColorSwapper.Group className="relative px-8">
          <ColorSwapper.Block activeClass="bg-zinc-900">
            <div className="min-h-screen w-screen px-8 py-12 md:px-0">
              <div className="h-screen pb-24 text-center text-sm text-white/30"></div>
              <div className="relative mx-auto h-[150vh] max-w-2xl">
                <div className="max-w-lg space-y-3 text-3xl">
                  <span className="relative">
                    <span>ESTO </span>
                    <span className="bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent transition">
                      ES GENIAL
                    </span>
                    <span> PARA HACER UNA LANDING</span>
                  </span>

                  <span className="relative">
                    <span>Support </span>
                    <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent transition">
                      recurring business
                    </span>
                    <span> models and minimize churn</span>
                  </span>
                </div>
              </div>
            </div>
          </ColorSwapper.Block>

          <ColorSwapper.Block activeClass="bg-[#b6dbd0]">
            <div className="min-h-screen w-screen px-8 py-12 md:px-0">
              <div className="h-screen pb-24 text-center text-sm text-white/30"></div>
              <div className="relative mx-auto h-[150vh] max-w-2xl">
                <div className="max-w-lg space-y-3 text-3xl">
                  <span className="relative">
                    <span>ESTO </span>
                    <span className="bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent transition">
                      ES GENIAL
                    </span>
                    <span> PARA HACER UNA LANDING</span>
                  </span>

                  <span className="relative">
                    <span>Support </span>
                    <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent transition">
                      recurring business
                    </span>
                    <span> models and minimize churn</span>
                  </span>
                </div>
              </div>
            </div>
          </ColorSwapper.Block>

          <ColorSwapper.Block activeClass="bg-[#fbe274]">
            <div className="min-h-screen w-screen px-8 py-12 md:px-0">
              <div className="h-screen pb-24 text-center text-sm text-white/30"></div>
              <div className="relative mx-auto h-[150vh] max-w-2xl">
                <div className="max-w-lg space-y-3 text-3xl">
                  <span className="relative">
                    <span>ESTO </span>
                    <span className="bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent transition">
                      ES GENIAL
                    </span>
                    <span> PARA HACER UNA LANDING</span>
                  </span>

                  <span className="relative">
                    <span>Support </span>
                    <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent transition">
                      recurring business
                    </span>
                    <span> models and minimize churn</span>
                  </span>
                </div>
              </div>
            </div>
          </ColorSwapper.Block>
        </ColorSwapper.Group>
      </ColorSwapper>
    </div>
  );
}
