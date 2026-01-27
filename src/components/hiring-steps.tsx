"use client";

import { Search, UserCheck, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Define",
        subtitle: "Tell us what you need",
        description: "We'll get in touch with you to understand your requirements and preferences.",
        icon: Search,
        color: "bg-blue-50 text-blue-600"
    },
    {
        number: "02",
        title: "Discover",
        subtitle: "Meet the top talent",
        description: "Get 3 to 5 suitable, pre-vetted candidates in 48 hours.",
        icon: Users,
        color: "bg-purple-50 text-purple-600"
    },
    {
        number: "03",
        title: "Evaluate",
        subtitle: "Interview with ease",
        description: "Choose the candidate that aligns with your needs and we'll arrange an interview.",
        icon: UserCheck,
        color: "bg-green-50 text-green-600"
    },
    {
        number: "04",
        title: "Onboard",
        subtitle: "Hire with confidence",
        description: "Once you decide, we'll take care of the onboarding process for you.",
        icon: Rocket,
        color: "bg-orange-50 text-orange-600"
    }
];

export function HiringSteps() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Hire in <span className="text-primary border-b-4 border-primary/20">4 Easy Steps</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-transparent hover:border-gray-100"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                <span className="text-9xl font-bold">{step.number}</span>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-5xl font-bold text-gray-100 group-hover:text-primary transition-colors duration-300">{step.number}</span>
                                    <div className={`p-3 rounded-xl ${step.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                </div>

                                <h3 className="text-gray-500 font-medium uppercase text-sm tracking-wider mb-2">{step.title}</h3>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.subtitle}</h4>
                                <p className="text-gray-600 leading-relaxed">
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
