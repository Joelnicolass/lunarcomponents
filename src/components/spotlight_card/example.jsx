import { SpotlightCard } from "./spotlight_card";

//"use client";
export default function ExampleSpotlightCard() {
  const items = [
    {
      name: "Boris Lepikhin",
      title: "Product Designer",
      image: "https://picsum.photos/seed/1/400/400",
    },
    {
      name: "Aaron Francis",
      title: "Media Giant",
      image: "https://picsum.photos/seed/2/400/400",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 md:flex-row">
      {items.map((item, index) => (
        <SpotlightCard
          key={index}
          mode="after"
          from="rgba(255,255,255,0.20)"
          size={400}
          className="group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4"
        >
          <div className="relative">
            <img
              className="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
              src={item.image}
            />

            <img
              className="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              src={item.image}
            />

            <div className="mt-4 px-2">
              <div className="font-medium text-white">{item.name}</div>

              <div className="text-white/75">{item.title}</div>
            </div>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
