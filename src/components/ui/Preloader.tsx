"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 2 seconds total roughly

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
                >
                    <div className="flex flex-col items-center gap-4 text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-syne font-bold">Albert Afriando Santoso</h1>
                        <p className="text-lg md:text-xl font-manrope text-white/70">Web Developer</p>
                        <div className="w-64 h-1 bg-white/20 mt-8 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <p className="mt-2 font-syne">{progress}%</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
