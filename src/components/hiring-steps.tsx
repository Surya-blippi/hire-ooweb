"use client";

import { Search, UserCheck, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Define",
        subtitle: "Tell us what you need",
        description: "We'll get in touch with you to understand your requirements and preferences.",
        icon: Search
    },
    {
        number: "02",
        title: "Discover",
        subtitle: "Meet the top talent",
        description: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
        icon: Users
    },
    {
        number: "03",
        title: "Evaluate",
        subtitle: "Interview with ease",
        description: "Choose the candidate that aligns with your needs and we'll arrange an interview.",
        icon: UserCheck
    },
    {
        number: "04",
        title: "Onboard",
        subtitle: "Hire with confidence",
        description: "Once you decide, we'll take care of the onboarding process for you.",
        icon: Rocket
    }
];

export function HiringSteps() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Hire in <span className="text-zinc-500">4 Easy Steps</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm hover:shadow-indigo-500/10 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden group"
                        >
                            {/* Step Number Background */}
                            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <span className="text-9xl font-bold text-white">{step.number}</span>
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-4xl font-bold text-zinc-700 group-hover:text-white transition-colors duration-300">{step.number}</span>
                                    <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <step.icon className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                    {/* Mock Icon to match reference style if needed, utilizing lucide icons for now */}
                                    <div className="p-1 rounded-full bg-zinc-800 border border-zinc-700">
                                        <step.icon className="h-3 w-3 text-zinc-400" />
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-4">{step.subtitle}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed mt-auto">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
