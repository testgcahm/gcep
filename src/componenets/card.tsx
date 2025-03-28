// Filename: Card.tsx
import React, { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        const combinedClass = `bg-white/5 p-2 shadow-tertiary max-w-[420px] dark:bg-gray-950/50 border border-white/10 dark:border-gray-800 shadow-md rounded-lg ${className || ''}`.trim();
        return (
            <div
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => {
        const combinedClass = `space-y-1.5 flex flex-col items-start ${className || ''}`.trim();
        return (
            <div
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...props }, ref) => {
        const combinedClass = `text-2xl font-semibold text-gray-900 dark:text-white text-left ${className || ''}`.trim();
        return (
            <h2
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...props }, ref) => {
        const combinedClass = `text-gray-500 dark:text-gray-400 text-left ${className || ''}`.trim();
        return (
            <p
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => {
        const combinedClass = `${className || ''}`.trim();
        return (
            <div
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => {
        const combinedClass = `flex justify-end ${className || ''}`.trim();
        return (
            <div
                ref={ref}
                className={combinedClass}
                {...props}
            />
        );
    }
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
