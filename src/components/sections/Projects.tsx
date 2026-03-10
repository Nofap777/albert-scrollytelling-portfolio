"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "E-Commerce Experience",
        category: "Web Design / Development",
        image: "/works/ecommerce.png",
    },
    {
        id: 2,
        title: "Scrollytelling Platform",
        category: "Creative Development",
        image: "/works/scrollytelling.png",
    },
    {
        id: 3,
        title: "Fintech Dashboard",
        category: "UI/UX Design",
        image: "/works/fintech.png",
    },
    {
        id: 4,
        title: "Interactive 3D Game",
        category: "Web GL / Three.js",
        image: "/works/game.png",
    },
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="works" ref={containerRef} className="py-32 px-6 md:px-20 bg-[#050505] relative z-10 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <h2 className="text-5xl md:text-8xl font-syne font-bold uppercase">
                        Featured <br /> Works
                    </h2>
                    <p className="text-xl text-white/60 max-w-sm mb-4 font-manrope">
                        A selection of recent projects focused on immersive web experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`group relative flex flex-col gap-6 cursor-pointer ${index % 2 !== 0 ? "md:mt-32" : ""
                                }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-3xl font-syne font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-white/50 font-manrope uppercase tracking-wider">
                                    {project.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 flex justify-center">
                    <button className="px-10 py-5 border border-white/20 rounded-full font-syne text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                        See All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
