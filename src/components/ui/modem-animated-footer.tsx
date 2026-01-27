"use client";
import React from "react";
import Link from "next/link";
import {
    NotepadTextDashed,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

interface FooterProps {
    brandName?: string;
    brandDescription?: string;
    socialLinks?: SocialLink[];
    navLinks?: FooterLink[];
    creatorName?: string;
    creatorUrl?: string;
    brandIcon?: React.ReactNode;
    className?: string;
}

export const ModemFooter = ({
    brandName = "YourBrand",
    brandDescription = "Your description here",
    socialLinks = [],
    navLinks = [],
    creatorName,
    creatorUrl,
    brandIcon,
    className,
}: FooterProps) => {
    return (
        <section className={cn("relative w-full mt-0 overflow-hidden bg-black", className)}>
            <footer className="relative pt-0 pb-10">
                <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[15rem] relative p-4 z-20">
                    <div className="flex flex-col mb-6 w-full">
                        <div className="w-full flex flex-col items-center">
                            {/* Email Address */}
                            <a
                                href="mailto:founder@hireoo.ai"
                                className="text-muted-foreground hover:text-foreground transition-colors text-lg mb-4"
                            >
                                founder@hireoo.ai
                            </a>

                            {socialLinks.length > 0 && (
                                <div className="flex mb-4 gap-4">
                                    {socialLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="w-6 h-6 hover:scale-110 duration-300">
                                                {link.icon}
                                            </div>
                                            <span className="sr-only">{link.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {navLinks.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground max-w-full px-4">
                                    {navLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            className="hover:text-foreground duration-300 hover:font-semibold"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center justify-center mt-8">
                        <p className="text-sm text-muted-foreground/50 text-center">
                            ©{new Date().getFullYear()} {brandName}. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground/50 text-center flex items-center gap-1">
                            Made with <span className="text-red-500">❤️</span>
                        </p>
                    </div>
                </div>

                {/* Large background text - Lowercase */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] font-extrabold tracking-tighter pointer-events-none select-none text-center px-4 z-0 text-white/[0.1]"
                    style={{
                        fontSize: 'clamp(3rem, 20vw, 25rem)',
                        maxWidth: '100vw',
                        lineHeight: 0.8
                    }}
                >
                    hireoo
                </div>
            </footer>
        </section>
    );
};
