'use client';

import React, { useEffect, useState } from "react";

declare global {
    interface Window {
        deferredPWAInstallPrompt?: any;
    }
}

export default function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstall, setShowInstall] = useState(false);
    const [userOS, setUserOS] = useState<string>("Unknown");
    const [showIOSInstructions, setShowIOSInstructions] = useState(false);

    useEffect(() => {
        // Detect mobile OS
        const ua = navigator.userAgent;
        if (/iPad|iPhone|iPod/.test(ua)) {
            setUserOS("iOS");
        } else {
            setUserOS("Other");
        }

        window.deferredPWAInstallPrompt = null;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            window.deferredPWAInstallPrompt = e;
            setDeferredPrompt(e);
            setShowInstall(true);
        });

        window.addEventListener("appinstalled", () => {
            setShowInstall(false);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', () => { });
            window.removeEventListener("appinstalled", () => { });
        };
    }, []);

    const handleInstallClick = async () => {
        const promptEvent = deferredPrompt || window.deferredPWAInstallPrompt;
        if (promptEvent) {
            promptEvent.prompt();
            const { outcome } = await promptEvent.userChoice;
            if (outcome === "accepted") {
                setShowInstall(false);
            }
            setDeferredPrompt(null);
            window.deferredPWAInstallPrompt = null;
        }
    };

    const installButton = () => {
        if (!showInstall) return null;

        // iOS instructions button
        if (userOS === "iOS") {
            return !showIOSInstructions ? (
                <button
                    className="fixed cursor-pointer bottom-4 right-4 z-50 p-2 rounded-full shadow-lg bg-secondary text-white hover:bg-secondary/90 focus:outline-none transition flex items-center justify-center"
                    aria-label="Show iOS Install Instructions"
                    onClick={() => setShowIOSInstructions(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-9 6h10" /></svg>
                </button>
            ) : (
                <div className="fixed bottom-0.5 -right-4 z-[60] flex items-end justify-end px-6 pb-3">
                    <div className="max-w-xs bg-secondary text-white focus:outline-none transition rounded shadow-lg pr-6 pl-3 py-4 flex items-center justify-center gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V4m0 0l4 4m-4-4l-4 4M4 20h16" /></svg>
                        <span className="text-sm font-medium">To install this app, tap <span className="font-bold">Share</span> then <span className="font-bold">Add to Home Screen</span>.</span>
                        <button
                            className="absolute cursor-pointer top-2 right-1 text-white hover:text-tertiary/90 focus:outline-none transition rounded w-6 h-6 flex items-center justify-center"
                            aria-label="Close"
                            onClick={() => setShowIOSInstructions(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-white stroke-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            );
        }

        // Non-iOS install button
        return (
            <button
                className="fixed bottom-4 cursor-pointer right-3 z-50 px-2 py-2 rounded shadow-lg font-semibold bg-secondary text-white hover:bg-secondary/90 focus:outline-none transition"
                onClick={handleInstallClick}
                type="button"
            >
                <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-9 6h10" /></svg>
                    Install App
                </span>
            </button>
        );
    }

    return <>
        <div className={`${showInstall ? 'h-16' : 'h-0'}`}></div>
        {installButton()}
    </>
}
