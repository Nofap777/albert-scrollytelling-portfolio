"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const frameCount = 192;

const currentFrame = (index: number) =>
    `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function SequenceScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            const index = Math.min(
                frameCount - 1,
                Math.max(0, Math.floor(frameIndex.get()) - 1)
            );

            if (images[index]) {
                const canvas = canvasRef.current!;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const img = images[index];
                const canvasRatio = canvas.width / canvas.height;
                const imgRatio = img.width / img.height;

                let renderWidth, renderHeight, x, y;

                if (canvasRatio > imgRatio) {
                    renderWidth = canvas.width;
                    renderHeight = canvas.width / imgRatio;
                    x = 0;
                    y = (canvas.height - renderHeight) / 2;
                } else {
                    renderWidth = canvas.height * imgRatio;
                    renderHeight = canvas.height;
                    x = (canvas.width - renderWidth) / 2;
                    y = 0;
                }

                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, renderWidth, renderHeight);
            }
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [frameIndex, images]);

    const sec1Op = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0, 0]);
    const sec2Op = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const sec3Op = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
    const sec4Op = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);

    const sec1Y = useTransform(scrollYProgress, [0, 0.05], [50, 0]);
    const sec2Y = useTransform(scrollYProgress, [0.25, 0.3], [50, 0]);
    const sec3Y = useTransform(scrollYProgress, [0.55, 0.6], [50, 0]);
    const sec4Y = useTransform(scrollYProgress, [0.85, 0.9], [50, 0]);

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 bg-black/40 w-full h-full pointer-events-none" />

                <motion.div
                    style={{ opacity: sec1Op, y: sec1Y }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <h2 className="text-5xl md:text-8xl font-syne font-bold text-white mb-4 tracking-tighter mix-blend-difference">
                        My Name is Albert Afriando Santoso.
                    </h2>
                    <p className="text-xl md:text-3xl font-manrope text-white/80 uppercase tracking-widest mt-2">
                        Web Developer
                    </p>
                </motion.div>

                <motion.div
                    style={{ opacity: sec2Op, y: sec2Y }}
                    className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 lg:px-40"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold text-white max-w-5xl leading-[1.1] tracking-tight mix-blend-difference">
                        A passionate Web Developer focused on building modern and interactive web experiences.
                    </h2>
                </motion.div>

                <motion.div
                    style={{ opacity: sec3Op, y: sec3Y }}
                    className="absolute inset-0 flex flex-col items-end justify-center px-6 md:px-20 lg:px-40 text-right"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold text-white max-w-5xl leading-[1.1] tracking-tight mix-blend-difference">
                        Transforming ideas into smooth digital experiences.
                    </h2>
                </motion.div>

                <motion.div
                    style={{ opacity: sec4Op, y: sec4Y }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                >
                    <h2 className="text-6xl md:text-8xl font-syne font-bold text-white mb-10 tracking-tighter mix-blend-difference">
                        Let's build something amazing together.
                    </h2>
                    <Link
                        href="#contact"
                        className="px-10 py-5 bg-white text-black font-syne font-bold rounded-full text-xl hover:scale-105 transition-transform uppercase tracking-wider"
                    >
                        Start a Project
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
