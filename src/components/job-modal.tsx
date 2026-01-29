"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendJobInquiryEmail } from "@/app/actions/send-email";
import { useToast } from "@/hooks/use-toast";

interface JobModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function JobModal({ isOpen, onClose }: JobModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        const result = await sendJobInquiryEmail(formData);

        if (result.success) {
            toast({
                title: "Application Sent!",
                description: "Good luck! We'll be in touch.",
            });
            onClose();
        } else {
            toast({
                title: "Something went wrong.",
                description: "Please try again later.",
                variant: "destructive",
            });
        }
        setIsSubmitting(false);
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-900/50">
                                <div>
                                    <h2 className="text-xl font-bold text-white">Find Your Dream Job</h2>
                                    <p className="text-sm text-zinc-400">Join our talent network.</p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onClose}
                                    className="text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Form */}
                            <div className="p-6 overflow-y-auto">
                                <form id="job-form" onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Jane Doe"
                                            required
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="jane@example.com"
                                            required
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="role" className="text-sm font-medium text-zinc-300">Desired Role</label>
                                        <Input
                                            id="role"
                                            name="role"
                                            placeholder="e.g. Product Designer"
                                            required
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="linkedin" className="text-sm font-medium text-zinc-300">LinkedIn / Portfolio URL</label>
                                        <Input
                                            id="linkedin"
                                            name="linkedin"
                                            type="url"
                                            placeholder="https://linkedin.com/in/jane..."
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message (Optional)</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about yourself..."
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-emerald-500 min-h-[100px]"
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-zinc-900 bg-zinc-900/30 flex justify-end gap-3">
                                <Button variant="ghost" onClick={onClose} className="text-zinc-400 hover:text-white hover:bg-zinc-800">
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    form="job-form"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[120px]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Apply Now
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
