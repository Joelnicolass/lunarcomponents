import { SpotlightButton } from "./spotlight_button";

export default function ExampleSpotlightButton() {
  return (
    <div className="mx-auto flex h-screen w-screen max-w-xl items-center justify-center">
      <SpotlightButton>
        <div className="relative inline-flex items-center gap-2">
          <span className="mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent">
            BOTON
          </span>

          <div className="h-5 w-px bg-white/10"></div>

          <div className="group-hover mt-0.5 font-mona text-lg font-medium text-white/50 duration-300 [font-variation-settings:'wdth'_125] group-hover:text-white/60 group-hover:text-shadow-sm">
            COPADO
          </div>
        </div>
      </SpotlightButton>
    </div>
  );
}
