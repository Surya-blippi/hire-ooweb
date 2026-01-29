"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ResumeUploader } from "@/components/resume-uploader";
import { useState } from "react";
import { HireModal } from "@/components/hire-modal";

const heroProfiles = [
    {
        name: "Meenakshi MS",
        role: "ML Engineer",
        company: "Apple",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/meenakshi-ms.jpg",
        skills: ["Machine Learning", "Python", "PyTorch"],
        exp: "6 years"
    },
    {
        name: "Rahul Purohit",
        role: "Staff Software Engineer",
        company: "Uber",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/rahul-purohit.jpg",
        skills: ["System Design", "Java", "Distributed Systems"],
        exp: "10 years"
    },
    {
        name: "Aditya Patil",
        role: "Senior Engineer",
        company: "Google",
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/aditya-patil.jpg",
        skills: ["Full Stack", "React", "Node.js"],
        exp: "8 years"
    }
];

import { ElegantShape } from "@/components/ui/elegant-shape";

export function Hero() {
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-black selection:bg-indigo-500/30">
            <HireModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />

            {/* Elegant Geometric Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 drop-shadow-2xl"
                    >
                        Global Hiring, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">Done Right.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-300 mb-12 max-w-xl mx-auto leading-relaxed font-light"
                    >
                        AI precision with human judgment.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            onClick={() => setIsHireModalOpen(true)}
                            className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 text-base font-semibold backdrop-blur-md transition-all"
                        >
                            Hire a Talent
                        </Button>
                        <Button size="lg" className="bg-white/10 text-white border border-white/5 hover:bg-white/20 rounded-full px-10 h-14 text-base font-semibold backdrop-blur-md transition-all">
                            Find a job
                        </Button>
                    </motion.div>
                </div>

                {/* Cards Visualization */}
                <div className="relative h-[500px] w-full max-w-5xl mx-auto perspective-1000">
                    {/* Card 1 - Left (Previous Profile) */}
                    <motion.div
                        initial={{ x: -100, opacity: 0, rotateY: 15 }}
                        animate={{ x: 0, opacity: 1, rotateY: 15 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute left-0 top-10 w-72 h-[400px] hidden md:block opacity-40 blur-[1px] transform scale-90"
                    >
                        <div className="h-full w-full bg-zinc-900/80 rounded-2xl border border-white/5 p-6 flex flex-col relative overflow-hidden">
                            <Image
                                src={heroProfiles[0].image}
                                alt={heroProfiles[0].name}
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                            <div className="mt-auto relative z-10">
                                <h3 className="text-lg font-bold text-white">{heroProfiles[0].name}</h3>
                                <p className="text-sm text-zinc-400">{heroProfiles[0].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 - Main (Center) - Featured Profile */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-80 sm:w-96 h-[500px] z-20"
                    >
                        <SpotlightCard className="h-full bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)] ring-1 ring-white/5">
                            <div className="p-8 h-full flex flex-col relative overflow-hidden">
                                {/* Subtle internal gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="relative h-20 w-20 rounded-full p-0.5 shadow-xl overflow-hidden border-2 border-indigo-500/50">
                                        <Image
                                            src={heroProfiles[1].image}
                                            alt={heroProfiles[1].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-1.5 shadow-sm backdrop-blur-md">
                                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                                        <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase">Verified</span>
                                    </div>
                                </div>

                                <div className="space-y-1 relative z-10 mb-6">
                                    <h2 className="text-2xl font-bold text-white">{heroProfiles[1].name}</h2>
                                    <p className="text-indigo-400 font-medium">{heroProfiles[1].role}</p>
                                    <p className="text-sm text-zinc-500">Ex-{heroProfiles[1].company} • {heroProfiles[1].exp} Exp</p>
                                </div>

                                <div className="mt-auto space-y-4 relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {heroProfiles[1].skills.map(skill => (
                                            <span key={skill} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-white/5 rounded-xl border border-white/5 p-4 backdrop-blur-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                            <span className="text-xs font-medium text-zinc-300">Available for hire</span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-indigo-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Card 3 - Right (Next Profile) */}
                    <motion.div
                        initial={{ x: 100, opacity: 0, rotateY: -15 }}
                        animate={{ x: 0, opacity: 1, rotateY: -15 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute right-0 top-10 w-72 h-[400px] hidden md:block opacity-40 blur-[1px] transform scale-90"
                    >
                        <div className="h-full w-full bg-zinc-900/80 rounded-2xl border border-white/5 p-6 flex flex-col relative overflow-hidden">
                            <Image
                                src={heroProfiles[2].image}
                                alt={heroProfiles[2].name}
                                fill
                                className="object-cover opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                            <div className="mt-auto relative z-10">
                                <h3 className="text-lg font-bold text-white">{heroProfiles[2].name}</h3>
                                <p className="text-sm text-zinc-400">{heroProfiles[2].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        </section>
    );
}
