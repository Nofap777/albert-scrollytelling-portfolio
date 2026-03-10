"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Albert has an incredible eye for detail. The scrolling experience he built elevated our brand to standard we never expected.",
        author: "Creative Director"
    },
    {
        quote: "Fast, reliable, and deeply understands modern web motion. The codebase was clean and the result was stunning.",
        author: "Lead Engineer"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 px-6 md:px-20 bg-black relative z-10 text-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-sm font-syne text-white/50 uppercase tracking-widest mb-20">Client Feedback</h2>

                <div className="grid md:grid-cols-2 gap-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="flex flex-col items-center justify-center p-10 bg-white/5 rounded-3xl border border-white/10"
                        >
                            <p className="text-2xl md:text-3xl font-syne leading-relaxed mb-10">&quot;{t.quote}&quot;</p>
                            <h4 className="text-white/40 font-manrope uppercase tracking-widest">{t.author}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
