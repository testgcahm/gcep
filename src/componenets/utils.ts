export const ClassNames = (...inputs: (string | undefined | null | { [key: string]: boolean })[]): string => {
    let result = '';
    for (const input of inputs) {
        if (input) {
            if (typeof input === 'string') {
                result += input + ' ';
            } else if (typeof input === 'object') {
                for (const key in input) {
                    if (input[key]) {
                        result += key + ' ';
                    }
                }
            }
        }
    }
    return result.trim();
};

// Filename: utils.ts
import { useState } from 'react';

const useCopyToClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            setCopied(false); // Ensure copied is false on error
        });
    };

    return { copied, copyToClipboard };
};

export { useCopyToClipboard };
