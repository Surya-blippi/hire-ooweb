"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
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

import { JobModal } from "@/components/job-modal";

export function Hero() {
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);
    const [isJobModalOpen, setIsJobModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden bg-black selection:bg-indigo-500/30">
            <HireModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
            <JobModal isOpen={isJobModalOpen} onClose={() => setIsJobModalOpen(false)} />

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
                        className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        We help you find the right talent, fast with AI and Human Intelligence.
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
                        <Button
                            size="lg"
                            onClick={() => setIsJobModalOpen(true)}
                            className="bg-white/10 text-white border border-white/5 hover:bg-white/20 rounded-full px-10 h-14 text-base font-semibold backdrop-blur-md transition-all">
                            Find a job
                        </Button>
                    </motion.div>
                </div>


            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        </section>
    );
}
