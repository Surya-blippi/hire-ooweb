"use client"

// Inspired by shadcn/ui toast component

import * as React from "react"

type ToastProps = {
    title?: string
    description?: string
    variant?: "default" | "destructive"
}

const ToastContext = React.createContext<{
    toast: (props: ToastProps) => void
}>({
    toast: () => { },
})

export const useToast = () => {
    const context = React.useContext(ToastContext)
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider")
    }
    return context
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = React.useState<ToastProps[]>([])

    const toast = React.useCallback((props: ToastProps) => {
        setToasts((prev) => [...prev, props])
        setTimeout(() => {
            setToasts((prev) => prev.slice(1))
        }, 3000)
    }, [])

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
                {toasts.map((t, i) => (
                    <div
                        key={i}
                        className={`p-4 rounded-lg shadow-lg border ${t.variant === "destructive"
                                ? "bg-red-600 border-red-700 text-white"
                                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white"
                            } min-w-[300px] animate-in slide-in-from-right-full fade-in duration-300`}
                    >
                        {t.title && <div className="font-semibold">{t.title}</div>}
                        {t.description && <div className="text-sm opacity-90">{t.description}</div>}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}
