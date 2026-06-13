"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-dark-900" style={{ fontFamily: "var(--font-montserrat)" }}>
        {title} <span className="text-gold-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-dark-400 dark:text-dark-200 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
    </motion.div>
  );
}