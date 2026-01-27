"use client";

import { ModemFooter } from "@/components/ui/modem-animated-footer";
import { Mail, Hexagon, Github } from "lucide-react";

export function Footer() {
    const socialLinks = [
        {
            icon: <Mail className="w-6 h-6" />,
            href: "mailto:founder@hireoo.ai",
            label: "Email",
        },
    ];

    return (
        <ModemFooter
            brandName="Hireoo"
            brandDescription="The operating system for elite engineering teams."
            socialLinks={socialLinks}
            navLinks={[]}
            brandIcon={<Hexagon className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg fill-current" />}
        />
    );
}
