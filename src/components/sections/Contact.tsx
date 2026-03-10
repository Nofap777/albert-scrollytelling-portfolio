"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    return (
        <section id="contact" ref={containerRef} className="py-40 px-6 md:px-20 bg-black relative z-10 text-white overflow-hidden">
            <motion.div style={{ y }} className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-6xl md:text-[9rem] font-syne font-bold uppercase tracking-tighter leading-none mb-10">
                    Let's Talk
                </h2>
                <p className="text-xl md:text-3xl text-white/60 font-manrope max-w-2xl mb-20 leading-relaxed">
                    Got a project in mind? Let's create something extraordinary together.
                </p>

                <a
                    href="https://wa.me/62895601325249"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-syne text-2xl font-bold uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                    <span className="relative z-10">Start a conversation</span>
                    <div className="relative z-10 bg-black text-white p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight size={24} />
                    </div>
                </a>

                <div className="mt-40 pt-10 border-t border-white/10 w-full flex flex-col md:flex-row justify-between gap-10 text-left">
                    <div>
                        <h4 className="font-syne text-white/50 mb-4 uppercase tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-2 text-xl">
                            <a href="https://www.instagram.com/albertafriando" target="_blank" className="hover:text-white/70">Instagram</a>
                            <a href="https://www.tiktok.com/@albertafriando" target="_blank" className="hover:text-white/70">TikTok</a>
                            <a href="https://www.linkedin.com/in/albert-afriando-santoso-ba49353b3" target="_blank" className="hover:text-white/70">LinkedIn</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-syne text-white/50 mb-4 uppercase tracking-widest">Location</h4>
                        <p className="text-xl max-w-xs">
                            Malang, Indonesia
                        </p>
                    </div>
                    <div>
                        <h4 className="font-syne text-white/50 mb-4 uppercase tracking-widest">Local Time</h4>
                        <p className="text-xl">
                            {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
