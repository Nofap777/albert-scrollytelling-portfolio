"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const text = "A forward-thinking Web Developer specializing in Next.js, Motion, and creative web interactions. Based in Malang, Indonesia.";
    const words = text.split(" ");

    return (
        <section id="about" className="py-32 px-6 md:px-20 bg-[#050505] relative z-10 text-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2 relative aspect-square w-full md:w-[80%] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    <Image
                        src="/hero.png" // Using the generated portrait here
                        alt="Albert Afriando Santoso"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-sm font-syne text-white/50 uppercase tracking-widest mb-8">About Me</h2>
                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-syne font-bold leading-snug flex flex-wrap gap-x-3 gap-y-2">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h3>
                    <div className="mt-12 flex gap-8">
                        <div>
                            <p className="text-4xl font-syne font-bold">3+</p>
                            <p className="text-white/50 uppercase text-sm mt-2">Years Exp</p>
                        </div>
                        <div>
                            <p className="text-4xl font-syne font-bold">50+</p>
                            <p className="text-white/50 uppercase text-sm mt-2">Projects</p>
                        </div>
                        <div>
                            <p className="text-4xl font-syne font-bold">100%</p>
                            <p className="text-white/50 uppercase text-sm mt-2">Commitment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
