"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendHiringEmail } from "@/app/actions/send-email";
import { useToast } from "@/hooks/use-toast";

interface HireModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function HireModal({ isOpen, onClose }: HireModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        const result = await sendHiringEmail(formData);

        if (result.success) {
            toast({
                title: "Inquiry Sent!",
                description: "We'll get back to you shortly.",
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
                                    <h2 className="text-xl font-bold text-white">Hire Top Talent</h2>
                                    <p className="text-sm text-zinc-400">Tell us who you're looking for.</p>
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
                                <form id="hire-form" onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-sm font-medium text-zinc-300">Company</label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Acme Inc."
                                                required
                                                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">Work Email</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@acme.com"
                                            required
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="role" className="text-sm font-medium text-zinc-300">Role to Hire</label>
                                        <Input
                                            id="role"
                                            name="role"
                                            placeholder="e.g. Senior React Developer"
                                            required
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message (Optional)</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Specific requirements, tech stack, etc."
                                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500 min-h-[100px]"
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
                                    form="hire-form"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[120px]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Request
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
