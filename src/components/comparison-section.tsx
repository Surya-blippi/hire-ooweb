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
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground"
                    >
                        Why Smart Companies <br className="hidden md:block" />
                        Choose <span className="text-indigo-500">Hireoo</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-xl mx-auto"
                    >
                        The old way of hiring is broken. We built the operating system for modern engineering teams.
                    </motion.p>
                </div>

                {/* Comparison Table */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Desktop View */}
                    <div className="hidden lg:grid grid-cols-4 gap-0">
                        {/* Headers */}
                        <div className="p-6 flex items-end pb-8">
                            <span className="text-xl font-bold text-muted-foreground">Comparison</span>
                        </div>
                        <div className="relative p-6 pb-8 text-center border-b border-border">
                            <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-t-2xl border-x border-t border-indigo-500/20 -z-10 translate-y-2"></div>
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Hireoo</h3>
                            <p className="text-xs text-indigo-500/80 font-medium mt-1">The Modern Standard</p>
                        </div>
                        <div className="p-6 pb-8 text-center border-b border-border opacity-50">
                            <h3 className="text-xl font-semibold text-foreground">Agencies</h3>
                            <p className="text-xs text-muted-foreground mt-1">Traditional Staffing</p>
                        </div>
                        <div className="p-6 pb-8 text-center border-b border-border opacity-50">
                            <h3 className="text-xl font-semibold text-foreground">Outsourcing</h3>
                            <p className="text-xs text-muted-foreground mt-1">Project Shops</p>
                        </div>

                        {/* Rows */}
                        {comparisonData.map((row, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="contents group"
                            >
                                {/* Feature Label */}
                                <div className="p-6 flex items-center border-b border-border text-sm font-medium text-foreground">
                                    {row.feature}
                                </div>

                                {/* Hireo Cell (Highlighted) */}
                                <div className="relative p-6 flex items-center justify-center border-b border-indigo-500/10 bg-indigo-500/5 dark:bg-indigo-500/5">
                                    <div className="absolute inset-y-0 left-0 w-px bg-indigo-500/20"></div>
                                    <div className="absolute inset-y-0 right-0 w-px bg-indigo-500/20"></div>

                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <row.hireo.icon className="w-5 h-5 text-indigo-500" />
                                        <span className="font-bold text-foreground text-sm">{row.hireo.text}</span>
                                    </div>
                                </div>

                                {/* Agency Cell */}
                                <div className="p-6 flex items-center justify-center border-b border-border opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <row.agency.icon className="w-5 h-5 text-muted-foreground" />
                                        <span className="text-muted-foreground text-sm">{row.agency.text}</span>
                                    </div>
                                </div>

                                {/* Outsourcing Cell */}
                                <div className="p-6 flex items-center justify-center border-b border-border opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <row.outsourcing.icon className="w-5 h-5 text-muted-foreground" />
                                        <span className="text-muted-foreground text-sm">{row.outsourcing.text}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Bottom Cap for Hireo Column */}
                        <div className="col-start-2 relative h-4">
                            <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-b-2xl border-x border-b border-indigo-500/20"></div>
                        </div>
                    </div>

                    {/* Mobile View (Cards) */}
                    <div className="lg:hidden space-y-8">
                        {comparisonData.map((row, idx) => (
                            <div key={idx} className="bg-card border border-border rounded-xl p-6">
                                <h4 className="font-bold text-lg mb-4 text-foreground text-center border-b border-border pb-2">{row.feature}</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                                        <div className="bg-indigo-500 rounded-full p-1">
                                            <row.hireo.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Hireoo</div>
                                            <div className="text-sm font-semibold text-foreground">{row.hireo.text}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 px-4 opacity-70">
                                        <row.agency.icon className="w-4 h-4 text-muted-foreground" />
                                        <div>
                                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Agencies</div>
                                            <div className="text-sm text-muted-foreground">{row.agency.text}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 px-4 opacity-70">
                                        <row.outsourcing.icon className="w-4 h-4 text-muted-foreground" />
                                        <div>
                                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Outsourcing</div>
                                            <div className="text-sm text-muted-foreground">{row.outsourcing.text}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
}
