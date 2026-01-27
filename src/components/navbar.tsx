"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
    const [visible, setVisible] = useState(true);
    const { scrollY } = useScroll();
    const [lastScrollY, setLastScrollY] = useState(0);

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
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="pointer-events-auto flex items-center gap-6 px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-2xl dark:shadow-black/50 shadow-black/5"
            >
                <Link href="/" className="flex items-center gap-1 group">
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        hire<span className="text-muted-foreground group-hover:text-primary transition-colors">o.</span>
                    </span>
                </Link>

                <div className="h-4 w-[1px] bg-border hidden md:block" />

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    {["Companies", "Talents", "Stories", "Pricing"].map((item) => (
                        <Link key={item} href="#" className="hover:text-foreground transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    <Link href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground hidden md:block">
                        Login
                    </Link>
                    <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 h-9">
                        Get Started
                    </Button>
                </div>
            </motion.nav>
        </div>
    );
}
