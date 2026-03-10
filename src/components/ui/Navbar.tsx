"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center p-6 md:p-10 mix-blend-difference">
                <Link href="/" className="text-2xl font-syne font-bold text-white tracking-tighter">
                    ALBERT©
                </Link>
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-white hover:opacity-70 transition-opacity"
                >
                    <Menu size={32} />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-50 bg-[#0a0a0a] text-white flex flex-col justify-between p-6 md:p-10"
                    >
                        <div className="flex justify-between items-center">
                            <Link href="/" className="text-2xl font-syne font-bold tracking-tighter">
                                ALBERT©
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:opacity-70 transition-opacity"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between flex-1 mt-10 md:mt-20 gap-10 overflow-y-auto">
                            <div className="flex flex-col gap-4 text-4xl md:text-7xl font-syne font-bold">
                                <Link href="/" className="hover:text-white/70 hover:translate-x-4 transition-all" onClick={() => setIsOpen(false)}>HOME</Link>
                                <Link href="#works" className="hover:text-white/70 hover:translate-x-4 transition-all" onClick={() => setIsOpen(false)}>WORKS</Link>
                                <Link href="#about" className="hover:text-white/70 hover:translate-x-4 transition-all" onClick={() => setIsOpen(false)}>ABOUT</Link>
                                <Link href="#contact" className="hover:text-white/70 hover:translate-x-4 transition-all" onClick={() => setIsOpen(false)}>CONTACT</Link>
                            </div>

                            <div className="flex flex-col justify-end gap-6 md:w-1/3 text-left">
                                <div>
                                    <h3 className="text-sm text-white/50 mb-2 font-syne">CONTACT</h3>
                                    <a href="https://wa.me/62895601325249" target="_blank" className="text-lg hover:text-white/70 block">Whatsapp</a>
                                    <p className="text-lg">Malang, Indonesia</p>
                                </div>
                                <div>
                                    <h3 className="text-sm text-white/50 mb-2 font-syne">SOCIALS</h3>
                                    <div className="flex flex-wrap gap-4 text-lg">
                                        <a href="https://www.instagram.com/albertafriando" target="_blank" className="hover:text-white/70">Instagram</a>
                                        <a href="https://www.tiktok.com/@albertafriando" target="_blank" className="hover:text-white/70">TikTok</a>
                                        <a href="https://www.linkedin.com/in/albert-afriando-santoso-ba49353b3" target="_blank" className="hover:text-white/70">LinkedIn</a>
                                        <a href="https://github.com/Nofap777" target="_blank" className="hover:text-white/70">GitHub</a>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm text-white/50 mb-2 font-syne">ABOUT</h3>
                                    <p className="text-lg text-white/80">
                                        A passionate Web Developer focused on building modern and interactive web experiences. Transforming ideas into smooth digital experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
