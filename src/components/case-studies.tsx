"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const testimonials = [
    {
        company: "Zeals",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/logo-zeals.svg",
        description: "$47M funded Japanese startup",
        quote: "We are very happy with the talents’ consistent output and strong communication. They have become a natural part of our organization.",
        person: "Or Perlman",
        role: "Tech Lead, Zeals",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/or-perlman.png"
    },
    {
        company: "GitLab",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/gitlab-new-ic.svg",
        description: "$8B publicly listed DevOps platform",
        quote: "However, Uplers quickly found three suitable profiles for us and we hired the first candidate we interviewed.",
        person: "Wayne Haber",
        role: "Director of Engineering, GitLab",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/wayne-haber.png"
    },
    {
        company: "Tripadvisor",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/tripadvisor-ic.png",
        description: "Global travel review platform",
        quote: "We needed professionals who not only had the technical efficiency but could also seamlessly integrate into our team.",
        person: "Tarun Garg",
        role: "Sr. Eng Manager, Tripadvisor",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/tarun_garg.png"
    }
];

export function CaseStudies() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 bg-zinc-950 border-t border-zinc-900 border-b relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Trusted by <span className="text-zinc-500">Industry Leaders.</span>
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <SpotlightCard className="bg-zinc-900/50 border-zinc-800">
                                        <div className="p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                                            {/* Photo & Logo */}
                                            <div className="flex-shrink-0 flex flex-col items-center gap-6">
                                                <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
                                                    <Image src={item.image} alt={item.person} fill className="object-cover" />
                                                </div>
                                                <div className="flex flex-col items-center gap-2">
                                                    <div className="relative h-6 w-24 invert opacity-70">
                                                        <Image src={item.logo} alt={item.company} fill className="object-contain" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 relative">
                                                <Quote className="absolute -top-4 -left-4 text-zinc-800 fill-zinc-800 h-10 w-10 opacity-50 hidden md:block" />
                                                <p className="text-2xl md:text-3xl font-serif text-zinc-100 leading-relaxed mb-8 italic opacity-90">
                                                    &quot;{item.quote}&quot;
                                                </p>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white">{item.person}</h4>
                                                    <p className="text-sm text-indigo-400 font-medium">{item.role}</p>
                                                    <p className="text-xs text-zinc-500 mt-1">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={scrollPrev}
                            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
