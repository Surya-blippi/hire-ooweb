"use client";

import { CheckCircle2, XCircle, Zap, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const comparisonData = [
    {
        feature: "Top Vetted Talent",
        hireo: { text: "Startup-experienced, top 1%", icon: CheckCircle2, status: "good" },
        agency: { text: "No standardized vetting", icon: XCircle, status: "bad" },
        outsourcing: { text: "Generalist, mixed quality", icon: XCircle, status: "bad" },
    },
    {
        feature: "Speed of Hiring",
        hireo: { text: "48-hour matching", icon: Zap, status: "good" },
        agency: { text: "Slow & manual process", icon: Clock, status: "bad" },
        outsourcing: { text: "Weeks to months", icon: Clock, status: "bad" },
    },
    {
        feature: "Control & Collaboration",
        hireo: { text: "Direct access, full control", icon: Shield, status: "good" },
        agency: { text: "No post-hiring involvement", icon: XCircle, status: "bad" },
        outsourcing: { text: "Limited control, external PMs", icon: XCircle, status: "bad" },
    },
    {
        feature: "Time Zone Alignment",
        hireo: { text: "100% Aligned with your team", icon: Users, status: "good" },
        agency: { text: "Candidate dependent", icon: XCircle, status: "bad" },
        outsourcing: { text: "Significant time zone gaps", icon: XCircle, status: "bad" },
    },
    {
        feature: "Post-Hiring Support",
        hireo: { text: "Lifetime free replacement", icon: CheckCircle2, status: "good" },
        agency: { text: "Limited, paid replacements", icon: XCircle, status: "bad" },
        outsourcing: { text: "No guaranteed support", icon: XCircle, status: "bad" },
    },
];

export function ComparisonSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-zinc-950">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white"
                    >
                        Why Smart Companies <br className="hidden md:block" />
                        Choose <span className="text-indigo-600 dark:text-indigo-400">Hireoo</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        The old way of hiring is broken. We built the operating system for modern engineering teams.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {/* Labels Column (Desktop only) */}
                    <div className="hidden lg:flex flex-col gap-4 py-32">
                        {comparisonData.map((row) => (
                            <div key={row.feature} className="h-20 flex items-center text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                                {row.feature}
                            </div>
                        ))}
                    </div>

                    {/* Hireoo Column - Highlighted */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                        <div className="p-8 text-center border-b border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/50 dark:bg-indigo-500/5">
                            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl mb-4 text-indigo-600 dark:text-indigo-400">
                                <Zap className="w-6 h-6 fill-current" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">Hireoo</h3>
                            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">The Modern Standard</p>
                        </div>
                        <div className="flex flex-col">
                            {comparisonData.map((row, idx) => (
                                <div key={idx} className="h-20 p-4 flex flex-col items-center justify-center border-b last:border-0 border-indigo-50 dark:border-zinc-800">
                                    <div className="flex items-center gap-2 mb-1">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-500 fill-indigo-100 dark:fill-indigo-900" />
                                        <span className="font-bold text-zinc-900 dark:text-white text-sm text-center">{row.hireo.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Agencies Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-1 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950/50"
                    >
                        <div className="p-8 text-center border-b border-zinc-200 dark:border-zinc-800">
                            <div className="inline-flex items-center justify-center p-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl mb-4 text-zinc-500">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Agencies</h3>
                            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Traditional Staffing</p>
                        </div>
                        <div className="flex flex-col">
                            {comparisonData.map((row, idx) => (
                                <div key={idx} className="h-20 p-4 flex flex-col items-center justify-center border-b last:border-0 border-zinc-200 dark:border-zinc-800 text-center">
                                    <span className="lg:hidden text-xs font-medium text-zinc-400 mb-1">{row.feature}</span>
                                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                                        {row.agency.status === 'good' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4" />}
                                        <span className="text-sm">{row.agency.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Outsourcing Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-950/50"
                    >
                        <div className="p-8 text-center border-b border-zinc-200 dark:border-zinc-800">
                            <div className="inline-flex items-center justify-center p-3 bg-zinc-200 dark:bg-zinc-800 rounded-xl mb-4 text-zinc-500">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1">Outsourcing</h3>
                            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Project Shops</p>
                        </div>
                        <div className="flex flex-col">
                            {comparisonData.map((row, idx) => (
                                <div key={idx} className="h-20 p-4 flex flex-col items-center justify-center border-b last:border-0 border-zinc-200 dark:border-zinc-800 text-center">
                                    <span className="lg:hidden text-xs font-medium text-zinc-400 mb-1">{row.feature}</span>
                                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                                        {row.outsourcing.status === 'good' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4" />}
                                        <span className="text-sm">{row.outsourcing.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
