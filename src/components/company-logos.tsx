"use client";

import Image from "next/image";

const logos = [
  "1.svg",
  "2.webp",
  "3.png",
  "Ixigo_logo.svg.png",
  "Logo_OculusIT-widthwise-1.jpg",
  "Manhattan-Associates-Inc.-logo.jpg",
  "Stryker_logo.svg.png",
  "TADigital_Logo.jpg",
  "final-full-logo_datahash.png",
  "images.png", // This filename is generic, checking if it is a logo or valid
  "kloud9-logo.png",
  "lets-transport-logo.svg",
  "salesintel.webp",
  "squarefeet_logo.jpeg",
  "trantor-OG-TAG-LOGO.png",
];

export function CompanyLogos() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          Companies we’ve helped hire
        </h2>
        <div className="relative w-full overflow-hidden mask-linear-gradient">
          <div className="flex w-max space-x-8 md:space-x-12 animate-marquee hover:pause py-4">
            {/* Duplicate the logos to create the infinite scroll effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex items-center justify-center min-w-[160px] h-24 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm relative group"
              >
                {/* For dark logos (like Amazon) on dark bg, we need a specific strategy. 
                      Since we can't detect image content easily, simpler to use a light card 
                      OR inverted filter for specific logos if known. 
                      But user wanted "grey effect". 
                      Let's try a white card for ALL logos?
                      User said "pitch black" was bad.
                      Maybe "grey effect" means the section background?
                      
                      Let's try: 
                      Logos in white cards looks clean.
                   */}
                <div className="absolute inset-0 bg-white rounded-2xl opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src={`/Logos/${logo}`}
                    alt={`Company logo ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .mask-linear-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
