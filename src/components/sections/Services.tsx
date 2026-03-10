"use client";

import { motion } from "framer-motion";

const services = [
    {
        num: "01/",
        title: "Front-End Development",
        desc: "Building scalable, performant, and accessible front-end architectures using React and Next.js."
    },
    {
        num: "02/",
        title: "Creative Interactions",
        desc: "Designing and implementing smooth, physics-based animations and WebGL experiences that captivate users."
    },
    {
        num: "03/",
        title: "UI/UX Optimization",
        desc: "Transforming standard interfaces into premium, award-winning designs with high attention to detail."
    }
];

export default function Services() {
    return (
        <section className="py-32 px-6 md:px-20 bg-[#050505] relative z-10 text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
                <div className="md:w-1/3">
                    <h2 className="text-4xl md:text-6xl font-syne font-bold uppercase">
                        Services
                    </h2>
                    <p className="mt-8 text-white/50 font-manrope text-lg max-w-sm">
                        I help brands and companies create outstanding web experiences with modern architecture.
                    </p>
                </div>

                <div className="md:w-2/3 flex flex-col">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group border-b border-white/10 py-10 flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-colors px-6 -mx-6 rounded-xl"
                        >
                            <div className="text-2xl font-syne font-bold text-white/30 group-hover:text-blue-500 transition-colors w-16">
                                {srv.num}
                            </div>
                            <div>
                                <h3 className="text-3xl font-syne font-bold mb-4">{srv.title}</h3>
                                <p className="text-white/60 font-manrope text-lg max-w-lg">{srv.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
