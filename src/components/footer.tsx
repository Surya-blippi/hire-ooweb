"use client";

import Link from "next/link";
import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const footerLinks = {
    About: ["How it Works", "Why Uplers", "Pricing", "Contact"],
    Resources: ["Blog", "Success Stories", "Knowledge Base"],
    "For Talents": ["Find a Job", "Knowledge Base", "FAQ"],
    "Software Engineers": ["Full stack", "Java", "Python", ".Net", "Flutter", "React", "Angular", "Node", "AI", "ML"],
    Marketers: ["SEO", "Programmatic", "SEM & PPC"],
    Designers: ["Web designers", "UI/UX designers", "Graphic designers"]
};

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-24 pb-12 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h5 className="font-bold text-foreground mb-6 text-sm tracking-wide">{category}</h5>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground group">
                            hire<span className="text-muted-foreground group-hover:text-foreground transition-colors">o.</span>
                        </Link>
                        <div className="flex flex-col md:flex-row gap-4 text-sm text-center md:text-left">

                            <a href="mailto:hello@uplers.com" className="text-muted-foreground hover:text-foreground transition-colors">hello@hireo.com</a>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[Linkedin, Youtube, Twitter, Instagram].map((Icon, i) => (
                            <Link key={i} href="#" className="p-3 bg-muted rounded-full text-muted-foreground hover:bg-foreground hover:text-background transition-all">
                                <Icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12 text-sm text-muted-foreground">
                    &copy; 2025 Hireo Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
