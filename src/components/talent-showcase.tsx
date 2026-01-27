"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const talents = [
    {
        name: "Meenakshi MS",
        role: "ML Engineer",
        company: "Apple",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/meenakshi-ms.jpg",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/ic-apple-black.png",
    },
    {
        name: "Aditya Patil",
        role: "ML Engineer",
        company: "Google",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/aditya-patil.jpg",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/ic_google_new.png",
    },
    {
        name: "Bhavik Ambani",
        role: "SDE II",
        company: "Amazon",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/bhavik-ambani.jpg",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/ic_amazon_new.png",
    },
    {
        name: "Meenakshi MS",
        role: "ML Engineer",
        company: "Apple",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/meenakshi-ms.jpg",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/ic-apple-black.png",
    },
    {
        name: "Aditya Patil",
        role: "ML Engineer",
        company: "Google",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/aditya-patil.jpg",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/ic_google_new.png",
    },
    {
        name: "Bhavik Ambani",
        role: "SDE II",
        company: "Amazon",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/bhavik-ambani.jpg",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/ic_amazon_new.png",
    },
];

export function TalentShowcase() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        World-Class <span className="text-zinc-500">Talent Profiles.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Browse through our selection of pre-vetted senior engineers from top-tier tech companies.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {talents.map((talent, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] min-w-0 pl-6">
                                    <SpotlightCard className="h-full bg-zinc-900 border-zinc-800">
                                        <div className="p-6 h-full flex items-center gap-5">
                                            <div className="relative h-20 w-20 flex-shrink-0">
                                                <Image
                                                    src={talent.image}
                                                    alt={talent.name}
                                                    fill
                                                    className="object-cover rounded-full border-2 border-zinc-700 grayscale hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-lg text-white truncate">{talent.name}</h3>
                                                <p className="text-sm text-zinc-400 mb-2 truncate">{talent.role}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-wider">Ex</span>
                                                    <div className="relative h-4 w-12 opacity-50 hover:opacity-100 transition-opacity">
                                                        {/* Invert logo for dark mode if needed, assuming these logos are colored/black */}
                                                        <Image src={talent.logo} alt={talent.company} fill className="object-contain invert" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Controls */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={scrollPrev}
                            className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all active:scale-95"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all active:scale-95"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
