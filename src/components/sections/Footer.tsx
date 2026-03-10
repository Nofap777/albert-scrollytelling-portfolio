"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <footer ref={containerRef} className="bg-black text-white relative z-10 overflow-hidden border-t border-white/20 pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-20 h-full flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between w-full mb-32 items-start mt-10">
                    <div className="text-xl max-w-sm mb-10 md:mb-0">
                        <h3 className="font-syne font-bold text-2xl mb-4">Let's craft the Web</h3>
                        <p className="text-white/60 font-manrope">Focused on creating digital experiences that leave a lasting impression.</p>
                    </div>
                    <div className="flex justify-between w-full md:w-auto gap-20">
                        <div className="flex flex-col gap-4 font-manrope text-white/50">
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#works" className="hover:text-white transition-colors">Works</a>
                            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                        </div>
                        <div className="flex flex-col gap-4 font-manrope text-white/50">
                            <a href="https://wa.me/62895601325249" target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
                            <a href="https://www.linkedin.com/in/albert-afriando-santoso-ba49353b3" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="https://github.com/Nofap777" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-end px-4 mb-4 overflow-hidden mt-10">
                <motion.h1
                    style={{ y: textY }}
                    className="text-[12vw] font-syne font-bold leading-[0.8] tracking-tighter uppercase text-center w-full"
                >
                    ALBERT©2026
                </motion.h1>
            </div>
        </footer>
    );
}
