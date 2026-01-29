"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/app/actions/send-email";

export function FooterContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    async function onSubmit(formData: FormData) {
        setIsLoading(true);
        try {
            const result = await sendContactEmail(formData);
            if (result.success) {
                toast({
                    title: "Message sent!",
                    description: "We'll get back to you within 24 hours.",
                });
                // Reset form
                const form = document.getElementById("footer-contact-form") as HTMLFormElement;
                form?.reset();
            } else {
                toast({
                    title: "Something went wrong.",
                    description: "Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form
            id="footer-contact-form"
            action={onSubmit}
            className="flex flex-col gap-3 w-full"
        >
            <div className="grid grid-cols-2 gap-3">
                <Input
                    name="name"
                    placeholder="Name"
                    required
                    className="bg-zinc-900/50 border-zinc-800 focus:border-indigo-500 text-white placeholder:text-zinc-500"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-zinc-900/50 border-zinc-800 focus:border-indigo-500 text-white placeholder:text-zinc-500"
                />
            </div>
            <div className="relative">
                <Textarea
                    name="message"
                    placeholder="How can we help?"
                    required
                    className="min-h-[80px] bg-zinc-900/50 border-zinc-800 focus:border-indigo-500 text-white placeholder:text-zinc-500 resize-none pr-12"
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    size="icon"
                    className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                    {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="h-4 w-4" />
                    )}
                </Button>
            </div>
        </form>
    );
}
