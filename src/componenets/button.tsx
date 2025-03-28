import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        let baseClass = 'rounded-md'; // Consistent rounded corners
        let variantClass = '';
        let sizeClass = '';

        if (variant === 'default') {
            variantClass = 'bg-[#1c458b] text-white hover:bg-[#177ca6]'; // Use primary and secondary
        } else if (variant === 'outline') {
            variantClass = 'text-[#1c458b] border border-[#1c458b] hover:bg-[#cffdfe]/50 hover:text-[#1c458b]'; // Use primary and quaternary
        } else if (variant === 'ghost') {
             variantClass = 'hover:bg-[#cffdfe]/50 hover:text-[#1c458b]';
        }

        if (size === 'sm') {
            sizeClass = 'px-3 py-2 text-sm';
        } else if (size === 'lg') {
            sizeClass = 'px-6 py-3 text-lg';
        } else if (size === 'icon') {
            sizeClass = 'p-2';
        }

        const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className || ''}`.trim();

        return (
            <button
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export default Button;
