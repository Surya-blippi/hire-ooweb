"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { HireModal } from "@/components/hire-modal";

export function Navbar() {
    const [visible, setVisible] = useState(true);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHireModalOpen, setIsHireModalOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const direction = latest > lastScrollY ? "down" : "up";
        if (latest < 100) {
            setVisible(true);
        } else {
            setVisible(direction === "up");
        }
        setLastScrollY(latest);
    });

    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
            <HireModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl dark:shadow-black/50 shadow-black/5"
            >
                <Link href="/" className="flex items-center gap-1 group">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        hireoo<span className="text-muted-foreground group-hover:text-primary transition-colors">.</span>
                    </span>
                </Link>

                <div className="h-4 w-[1px] bg-border hidden md:block" />

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground/50 cursor-not-allowed">
                    {["Companies", "Talents", "Stories", "Pricing"].map((item) => (
                        <span key={item} className="cursor-not-allowed">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 pl-2">
                    {/* Theme Toggle Removed - Dark Mode Enforced */}

                    <Button
                        size="sm"
                        onClick={() => setIsHireModalOpen(true)}
                        className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-5 h-9"
                    >
                        Hire a Talent
                    </Button>
                </div>
            </motion.nav>
        </div>
    );
}
