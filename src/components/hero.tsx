"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ResumeUploader } from "@/components/resume-uploader";

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-20">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 px-4 flex flex-col items-center text-center">



                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-foreground/40 mb-8"
                >
                    Talent, <br />
                    Elevated.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed font-light"
                >
                    The operating system for elite engineering teams. Access pre-vetted talent with the precision of AI and the nuance of human expertise.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mb-16"
                >
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold transition-colors">
                        Start Hiring
                    </Button>
                    <Button size="lg" variant="outline" className="text-muted-foreground border-border bg-transparent hover:text-foreground hover:bg-muted/50 rounded-full px-8 h-12 text-base font-medium transition-colors">
                        Join Network
                    </Button>
                </motion.div>

                {/* Gemini Resume Uploader */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full max-w-2xl relative z-20"
                >
                    <ResumeUploader />
                </motion.div>
            </div>

            {/* Concept Visuals - Floating Spotlight Cards */}
            <div className="absolute inset-x-0 bottom-0 h-[400px] overflow-hidden pointer-events-none select-none mask-image-gradient-b">
                <div className="flex justify-center gap-6 opacity-80 translate-y-1/3">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="w-72 h-96 -rotate-6 mt-12"
                    >
                        <SpotlightCard className="h-full bg-card border-border border">
                            <div className="p-6 h-full flex flex-col">
                                <div className="h-12 w-12 rounded-full bg-muted mb-4 border border-border"></div>
                                <div className="h-4 w-24 bg-muted rounded mb-2"></div>
                                <div className="h-3 w-32 bg-muted/50 rounded"></div>
                                <div className="mt-auto space-y-2">
                                    <div className="h-2 w-full bg-muted/50 rounded"></div>
                                    <div className="h-2 w-2/3 bg-muted/50 rounded"></div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Card 2 - Main */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="w-80 h-[450px] z-10"
                    >
                        <SpotlightCard className="h-full bg-card border-border border shadow-2xl dark:shadow-indigo-500/10 shadow-indigo-500/5">
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-background"></div>
                                    <div className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-mono border border-green-500/20">VERIFIED</div>
                                </div>
                                <div className="h-6 w-32 bg-muted rounded mb-2"></div>
                                <div className="h-4 w-48 bg-muted/50 rounded mb-8"></div>

                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="h-8 bg-muted/30 rounded border border-border"></div>)}
                                </div>

                                <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                                    <div className="h-3 w-20 bg-muted rounded"></div>
                                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">→</div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="w-72 h-96 rotate-6 mt-12"
                    >
                        <SpotlightCard className="h-full bg-card border-border border">
                            <div className="p-6 h-full flex flex-col">
                                <div className="h-12 w-12 rounded-full bg-muted mb-4 border border-border"></div>
                                <div className="h-4 w-24 bg-muted rounded mb-2"></div>
                                <div className="h-3 w-32 bg-muted/50 rounded"></div>
                                <div className="mt-auto space-y-2">
                                    <div className="h-2 w-full bg-muted/50 rounded"></div>
                                    <div className="h-2 w-2/3 bg-muted/50 rounded"></div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
