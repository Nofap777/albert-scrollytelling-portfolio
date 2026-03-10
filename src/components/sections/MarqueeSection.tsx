"use client";

import { motion } from "framer-motion";

const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "WebGL", "GSAP", "Creative UI", "Awwwards"
];

export default function MarqueeSection() {
    return (
        <section className="py-20 bg-black text-white relative z-10 overflow-hidden border-y border-white/10">
            <div className="flex w-[200vw] sm:w-[150vw] md:w-[120vw]">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex whitespace-nowrap gap-10 lg:gap-20 items-center px-10"
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-10 lg:gap-20">
                            <h3 className="text-4xl md:text-6xl font-syne font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                                {skill}
                            </h3>
                            <div className="w-4 h-4 rounded-full bg-blue-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
