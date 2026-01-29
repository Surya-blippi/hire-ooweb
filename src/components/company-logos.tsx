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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
          Companies we’ve helped hire
        </h2>
        <div className="relative w-full overflow-hidden mask-linear-gradient">
          <div className="flex w-max space-x-16 md:space-x-24 animate-marquee hover:pause">
            {/* Duplicate the logos to create the infinite scroll effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex items-center justify-center min-w-[140px] h-20 relative transition-all duration-300 transform hover:scale-110 cursor-pointer"
              >
                <Image
                  src={`/Logos/${logo}`}
                  alt={`Company logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
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
