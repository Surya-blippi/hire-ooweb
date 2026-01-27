"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Briefcase, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const profiles = [
    {
        name: "Rahul Purohit",
        role: "Staff Software Engineer",
        exp: "10 years",
        company: "Uber",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/experience-ic.svg",
        university: "IIT Kanpur",
        skills: ["JavaScript", "Java", "Python", "SQL", "C", "Spring", "C++", "AngularJs"],
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/rahul-purohit.jpg",
        bio: "Skilled in Java, Python, JavaScript, SQL, C++, Spring, and AngularJS, I specialize in building scalable backend systems...",
        category: "Software Engineers"
    },
    {
        name: "Sumit Jha",
        role: "Senior Software Development Engineer",
        exp: "12 years",
        company: "Atlassian",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/experience-ic.svg",
        university: "IIT",
        skills: ["C++", "Java", "JavaScript"],
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/sumit-jha.jpg",
        bio: "Experienced in building products from the ground up and scaling systems used by over 100 million users...",
        category: "Software Engineers"
    },
    {
        name: "Meghna Srivastava",
        role: "Software Development Engineer",
        exp: "5 years",
        company: "Microsoft",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/experience-ic.svg",
        university: "IIT",
        skills: ["Java", "Backend", "Algorithms", "Data Modelling", "Spark", "Scala", "SQL", "MySQL"],
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/meghna-srivastava.jpg",
        bio: "I am a backend engineer passionate about building scalable and impactful systems...",
        category: "Software Engineers"
    },
    {
        name: "Aaryan Popli",
        role: "Software Engineer 2",
        exp: "3.9 years",
        company: "Amazon",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/experience-ic.svg",
        university: "Unknown",
        skills: ["AWS", "Python", "Django", "Next.js", "React", "MicroServices"],
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/aaryan-popli.jpeg",
        bio: "I am a collaborative software engineer and data scientist with a can-do attitude...",
        category: "AI/ML Engineers"
    },
    {
        name: "Mohan KRK",
        role: "Head Software Development Engineer",
        exp: "19 years",
        company: "Google",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/experience-ic.svg",
        university: "IIT Hyderabad",
        skills: ["JavaScript", "Java", "Python", "SQL", "C", "Spring", "C++", "AngularJs"],
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/mohan-krk.jpg",
        bio: "I am an engineering leader with experience in both engineering and product management...",
        category: "Software Engineers"
    },
    {
        name: "Ashish Naidu",
        role: "Head Software Development Engineer",
        exp: "16 years",
        company: "Oracle",
        logo: "https://d233vxkpujhe36.cloudfront.net/images/home/experience-ic.svg",
        university: "Unknown",
        skills: ["AWS", "Docker", "MicroServices", "Mean Stack"],
        image: "https://d233vxkpujhe36.cloudfront.net/images/home/talents/ashish-naidu.jpeg",
        bio: "I am a technology leader with 15+ years of experience, including 6+ years in management...",
        category: "DevOps"
    }
];

export function TalentGrid() {
    const [activeTab, setActiveTab] = useState("Software Engineers");

    const filteredProfiles = profiles.filter(p => p.category === activeTab || activeTab === "Software Engineers" && !p.category);
    const displayProfiles = filteredProfiles.length > 0 ? filteredProfiles : profiles;

    return (
        <section className="py-20 bg-zinc-950 border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Elite Talent, Curated.</h2>
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {["Software Engineers", "AI/ML Engineers", "Full Stack Developers", "Data Scientist", "DevOps", "Solutions Architect", "QA Engineer"].map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${activeTab === cat ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {displayProfiles.map((profile) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={profile.name}
                            >
                                <SpotlightCard className="bg-zinc-900/50 border-zinc-800/50 group">
                                    <div className="flex flex-col md:flex-row gap-6 p-6">
                                        <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                                            <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                                <Image src={profile.image} alt={profile.name} fill className="object-cover" />
                                            </div>
                                            <Button variant="outline" size="sm" disabled className="w-full text-xs hidden md:flex items-center gap-1 border-zinc-700 text-zinc-600 cursor-not-allowed">
                                                Profile <ExternalLink className="h-3 w-3" />
                                            </Button>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{profile.name}</h3>
                                                    <div className="text-xs font-medium text-zinc-500 mt-1 uppercase tracking-wide">
                                                        {profile.role} <span className="mx-2 text-zinc-700">•</span> <span className="text-zinc-300">{profile.exp}</span>
                                                    </div>
                                                </div>
                                                <span className="hidden md:block text-zinc-800 cursor-not-allowed">
                                                    <Linkedin className="h-5 w-5" />
                                                </span>
                                            </div>

                                            <div className="bg-zinc-950/50 rounded border border-zinc-800 p-3 grid grid-cols-2 gap-4 mb-4 text-xs text-zinc-400">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="h-3 w-3 text-zinc-600" />
                                                    <span className="font-medium">{profile.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <GraduationCap className="h-3 w-3 text-zinc-600" />
                                                    <span className="font-medium">{profile.university}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {profile.skills.slice(0, 5).map((skill, idx) => (
                                                    <span key={idx} className="bg-zinc-800/50 text-zinc-400 px-2 py-1 rounded text-[10px] font-medium border border-zinc-700/50">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                                                {profile.bio}
                                            </p>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


            </div>
        </section>
    );
}
