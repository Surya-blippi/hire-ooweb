"use client";

import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Search, UserCheck, Users, Rocket, Star, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function BentoGridSection() {
    return (
        <section className="py-32 bg-zinc-950 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Engineered for <br /> <span className="text-zinc-500">Maximum Velocity.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-xl">
                        Our process is designed to cut through the noise. We combine AI-driven matching with rigorous human vetting to deliver talent that ships code on day one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

                    {/* Main Large Card - Stats */}
                    <div className="md:col-span-2 md:row-span-2">
                        <SpotlightCard className="h-full bg-zinc-900 border-zinc-800">
                            <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden">
                                <div className="z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-8 w-8 rounded bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                            <Users className="h-4 w-4 text-indigo-400" />
                                        </div>
                                        <span className="text-indigo-400 font-mono text-xs uppercase tracking-wider">Network Scale</span>
                                    </div>
                                    <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-2">3M+</h3>
                                    <p className="text-zinc-400 text-xl">Pre-vetted engineers ready to deploy.</p>
                                </div>

                                {/* Decorative Map/Grid visual */}
                                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/50 via-zinc-900 to-transparent"></div>

                                <div className="grid grid-cols-2 gap-8 mt-12 z-10">
                                    <div>
                                        <h4 className="text-3xl font-bold text-white mb-1">48h</h4>
                                        <p className="text-sm text-zinc-500">Average time to hire</p>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-white mb-1">Top 1%</h4>
                                        <p className="text-sm text-zinc-500">Acceptance Rate</p>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Step 1 */}
                    <div className="md:col-span-1 md:row-span-1">
                        <SpotlightCard className="h-full bg-zinc-900 border-zinc-800 group">
                            <div className="p-6 h-full flex flex-col">
                                <div className="mb-auto flex justify-between items-start">
                                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold border border-white/5">01</div>
                                    <Search className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Discover</h4>
                                    <p className="text-sm text-zinc-400">AI matches your requirements against millions of profiles instantly.</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                    {/* Step 2 */}
                    <div className="md:col-span-1 md:row-span-1">
                        <SpotlightCard className="h-full bg-zinc-900 border-zinc-800 group">
                            <div className="p-6 h-full flex flex-col">
                                <div className="mb-auto flex justify-between items-start">
                                    <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold border border-white/5">02</div>
                                    <UserCheck className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Evaluate</h4>
                                    <p className="text-sm text-zinc-400">Review curated profiles and interview top candidates directly.</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>

                </div>
            </div>
        </section>
    );
}
