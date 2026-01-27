import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={props.disabled || isLoading}
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                    {
                        'bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary-hover hover:to-purple-700 shadow-md hover:shadow-lg': variant === 'primary',
                        'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm': variant === 'secondary',
                        'border-2 border-gray-200 bg-transparent hover:bg-gray-50 hover:text-gray-900': variant === 'outline',
                        'hover:bg-gray-100/50 hover:text-gray-900': variant === 'ghost',
                        'text-primary underline-offset-4 hover:underline': variant === 'link',
                        'h-9 px-3 text-sm': size === 'sm',
                        'h-11 px-6 py-2 text-base': size === 'md', // Adjusted to match generic big buttons
                        'h-12 px-8 text-lg': size === 'lg',
                        'h-10 w-10': size === 'icon',
                    },
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
