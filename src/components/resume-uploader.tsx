"use client";

import { useState } from "react";
import { parseResume } from "@/app/actions/parse-resume";
import { Upload, Loader2, FileText, CheckCircle2, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function ResumeUploader() {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [parsedData, setParsedData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleFileUpload(file: File) {
        if (!file) return;

        setIsUploading(true);
        setError(null);
        setParsedData(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await parseResume(formData);
            if (result.error) {
                setError(result.error);
            } else {
                setParsedData(result);
            }
        } catch (e) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsUploading(false);
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto my-12">
            <AnimatePresence mode="wait">
                {!parsedData ? (
                    <motion.div
                        key="upload"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full"
                    >
                        <SpotlightCard className="bg-muted/50 border-border/50 overflow-visible">
                            <div
                                className={`p-12 border-2 border-dashed rounded-xl transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer
                  ${isDragging ? "border-indigo-500 bg-indigo-500/10" : "border-border hover:border-foreground/50 hover:bg-muted"}
                `}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setIsDragging(true);
                                }}
                                onDragLeave={() => setIsDragging(false)}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    setIsDragging(false);
                                    const file = e.dataTransfer.files[0];
                                    if (file) handleFileUpload(file);
                                }}
                            >
                                <label className="cursor-pointer w-full h-full flex flex-col items-center">
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleFileUpload(file);
                                        }}
                                    />

                                    <div className="h-20 w-20 rounded-full bg-background border border-border flex items-center justify-center mb-6 text-indigo-500 shadow-xl shadow-indigo-500/10 group-hover:scale-110 transition-transform">
                                        {isUploading ? (
                                            <Loader2 className="h-10 w-10 animate-spin" />
                                        ) : (
                                            <Upload className="h-10 w-10" />
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {isUploading ? "Analysing Resume..." : "Drop your credentials"}
                                    </h3>
                                    <p className="text-muted-foreground max-w-sm mb-6">
                                        {isUploading
                                            ? "Gemini AI is extracting your profile details."
                                            : "Upload your resume (PDF/Image). Our AI will instantly parse skills, experience, and create your profile."}
                                    </p>

                                    {!isUploading && (
                                        <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground hover:bg-muted">
                                            Select File
                                        </Button>
                                    )}

                                    {error && (
                                        <div className="mt-4 flex items-center gap-2 text-destructive text-sm bg-destructive/10 px-3 py-1 rounded-full">
                                            <AlertCircle className="h-4 w-4" /> {error}
                                        </div>
                                    )}
                                </label>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setParsedData(null)}
                            className="absolute -top-4 -right-4 z-10 p-2 bg-muted text-muted-foreground hover:text-foreground rounded-full border border-border shadow-lg hover:bg-background transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 h-6 w-6" />
                                Analysis Complete
                            </h3>
                        </div>

                        <SpotlightCard className="bg-card border-border group">
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                                    <div>
                                        <h3 className="text-4xl font-bold text-foreground mb-2 tracking-tight">{parsedData.name}</h3>
                                        <div className="text-xl font-medium text-indigo-500 dark:text-indigo-400 flex items-center gap-3">
                                            {parsedData.role}
                                            <span className="text-muted-foreground text-sm">●</span>
                                            <span className="text-foreground">{parsedData.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3">
                                        <div className="flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            VERIFIED PROFILE
                                        </div>
                                        <div className="text-muted-foreground text-sm font-medium border border-border px-4 py-1.5 rounded-full bg-muted/50">
                                            Experience: <span className="text-foreground ml-1">{parsedData.exp}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-8">
                                    <div className="md:col-span-2 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Professional Summary</h4>
                                            <p className="text-foreground leading-relaxed text-lg font-light">
                                                {parsedData.bio}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Education</h4>
                                            <div className="flex items-center gap-2 text-foreground">
                                                <div className="p-2 bg-muted rounded-lg">
                                                    <FileText className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
                                                </div>
                                                {parsedData.university}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Top Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {parsedData.skills?.map((skill: string, idx: number) => (
                                                <span key={idx} className="bg-muted/50 text-foreground px-3 py-1.5 rounded-md text-sm font-medium border border-border hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-colors cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
