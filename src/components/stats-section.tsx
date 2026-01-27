"use client";

import { Linkedin, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    // A simple counter implementation or use a library like react-countup if installed.
    // For now, we will just animate the entry opacity/scale as a proxy for "counting" visual interest.
    return <span>{to}</span>;
}

export function StatsSection() {
    return (
        <section className="bg-black text-white py-12 border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center justify-center text-center p-4 hover:bg-white/5 transition-colors rounded-lg"
                    >
                        <h3 className="text-4xl font-bold mb-2">3 Million+</h3>
                        <p className="text-gray-400 font-medium">Talent Network</p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center justify-center text-center p-4 hover:bg-white/5 transition-colors rounded-lg"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Linkedin className="h-6 w-6 text-[#0077b5]" />
                            <h3 className="text-4xl font-bold">1 Million+</h3>
                        </div>
                        <p className="text-gray-400 font-medium">Followers</p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center justify-center text-center p-4 hover:bg-white/5 transition-colors rounded-lg"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center bg-gray-800 rounded px-2 py-1">
                                <span className="text-yellow-400 font-bold mr-1">4.9</span>
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                            <h3 className="text-4xl font-bold">126+</h3>
                        </div>
                        <p className="text-gray-400 font-medium">Clutch Reviews</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
