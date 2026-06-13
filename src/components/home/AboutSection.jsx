"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-2xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-bold text-gold-500 mb-4">Full Stack Developer</h3>
              <div className="space-y-4 text-dark-500 dark:text-dark-200 leading-relaxed text-lg">
                <p>
                  I am a dedicated full-stack developer with a passion for creating innovative web solutions. 
                  With expertise in both front-end and back-end technologies, I build responsive, user-friendly 
                  applications that deliver exceptional experiences.
                </p>
                <p>
                  My journey in web development started 3 years ago, and I&apos;ve been constantly learning and 
                  adapting to new technologies ever since. I specialize in React, Next.js, Node.js, and modern 
                  database solutions.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new frameworks, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
              <a href="/cv"
                className="inline-block mt-6 px-8 py-3 bg-gold-500 text-dark-900 font-semibold rounded-full hover:bg-gold-400 transition-all"
              >
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}