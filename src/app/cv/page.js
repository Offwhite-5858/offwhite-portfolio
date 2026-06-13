"use client";

import { ArrowLeft, Download, Mail, Phone, MapPin, Globe, Calendar, Briefcase, GraduationCap, Wrench, Code, Database, Palette, Server, GitBranch, Smartphone } from "lucide-react";
import Link from "next/link";
import siteConfig from "@/data/siteConfig";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] dark:bg-dark-900 pt-24 pb-16">
      {/* Print-friendly CV */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8 no-print">
          <Link href="/" className="flex items-center gap-2 text-dark-500 dark:text-dark-200 hover:text-gold-500 transition-colors">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <button onClick={handlePrint} className="flex items-center gap-2 px-6 py-2 bg-gold-500 text-dark-900 rounded-full font-semibold hover:bg-gold-400 transition-all">
            <Download size={18} /> Download PDF
          </button>
        </div>

        {/* CV Content */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 md:p-12 print:shadow-none print:rounded-none print:p-0">
          {/* Header */}
          <div className="text-center mb-10 pb-10 border-b border-gray-200 dark:border-dark-700">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
              OFFWHITE TECH
            </h1>
            <p className="text-xl text-gold-500 font-semibold mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-dark-500 dark:text-dark-200">
              <span className="flex items-center gap-1"><Mail size={14} /> {siteConfig.email}</span>
              <span className="flex items-center gap-1"><Phone size={14} /> {siteConfig.whatsapp}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Lagos, Nigeria</span>
              <span className="flex items-center gap-1"><Globe size={14} /> {siteConfig.social.github}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-3 flex items-center gap-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              <Briefcase size={20} className="text-gold-500" /> Professional Summary
            </h2>
            <p className="text-dark-500 dark:text-dark-200 leading-relaxed">
              Dedicated Full Stack Developer with 3+ years of experience building modern, responsive web applications. 
              Proficient in front-end and back-end technologies including React, Next.js, PHP, Node.js, and various database systems. 
              Passionate about creating clean, efficient code and delivering exceptional user experiences. 
              Proven track record of developing complete web solutions for businesses, from eCommerce platforms to content management systems.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              <Wrench size={20} className="text-gold-500" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-gold-500 mb-2 flex items-center gap-2"><Code size={16} /> Frontend</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200">HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Bootstrap, Framer Motion</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-gold-500 mb-2 flex items-center gap-2"><Server size={16} /> Backend</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200">PHP, Node.js, REST APIs, Express.js</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-gold-500 mb-2 flex items-center gap-2"><Database size={16} /> Database</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200">MySQL, PostgreSQL, Supabase, MongoDB</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-gold-500 mb-2 flex items-center gap-2"><Palette size={16} /> Design</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200">Responsive Design, UI/UX, Figma, Mobile-First</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-gold-500 mb-2 flex items-center gap-2"><GitBranch size={16} /> Tools</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200">Git, GitHub, VS Code, Vercel, npm, Terminal</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-gold-500 mb-2 flex items-center gap-2"><Smartphone size={16} /> Other</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200">SEO, Performance Optimization, WhatsApp API, Supabase Storage</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              <Briefcase size={20} className="text-gold-500" /> Work Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="flex items-center gap-2 text-gold-500 text-sm mb-1">
                  <Calendar size={14} /> 2023 - Present
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white">Full Stack Developer — Freelance</h3>
                <p className="text-dark-500 dark:text-dark-200 text-sm mt-1">
                  Developing full-stack web applications for businesses including eCommerce platforms, 
                  portfolio websites, and custom content management systems. Built a complete bakery website 
                  with admin dashboard, database integration, and WhatsApp ordering system.
                </p>
              </div>
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="flex items-center gap-2 text-gold-500 text-sm mb-1">
                  <Calendar size={14} /> 2022 - 2023
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white">Frontend Developer — Digital Agency</h3>
                <p className="text-dark-500 dark:text-dark-200 text-sm mt-1">
                  Created responsive web interfaces using React and modern CSS frameworks. 
                  Worked closely with UX/UI designers to implement pixel-perfect designs.
                </p>
              </div>
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="flex items-center gap-2 text-gold-500 text-sm mb-1">
                  <Calendar size={14} /> 2021 - 2022
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white">Junior Web Developer — Tech Solutions</h3>
                <p className="text-dark-500 dark:text-dark-200 text-sm mt-1">
                  Developed and maintained client websites using HTML, CSS, JavaScript, and PHP. 
                  Collaborated with senior developers on larger projects.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              <GraduationCap size={20} className="text-gold-500" /> Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="flex items-center gap-2 text-gold-500 text-sm mb-1">
                  <Calendar size={14} /> 2022 - 2023
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white">Full Stack Development Bootcamp</h3>
                <p className="text-dark-500 dark:text-dark-200 text-sm mt-1">
                  Intensive training in modern web development technologies including React, Node.js, and database management.
                </p>
              </div>
              <div className="border-l-2 border-gold-500 pl-4">
                <div className="flex items-center gap-2 text-gold-500 text-sm mb-1">
                  <Calendar size={14} /> 2018 - 2022
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white">Bachelor&apos;s Degree — Computer Science</h3>
                <p className="text-dark-500 dark:text-dark-200 text-sm mt-1">
                  University of Technology — Focus on web technologies and software engineering principles.
                </p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              <Code size={20} className="text-gold-500" /> Key Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-dark-900 dark:text-white">Sweet Delights Bakery</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200 mt-1">
                  Full-stack website with admin dashboard, Supabase, image uploads, WhatsApp ordering.
                </p>
                <p className="text-xs text-gold-500 mt-2">Next.js • Tailwind CSS • Supabase • Vercel</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-dark-900 dark:text-white">Tech eCommerce Store</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200 mt-1">
                  Gadget store with admin dashboard for products, orders, and customer management.
                </p>
                <p className="text-xs text-gold-500 mt-2">PHP • Bootstrap • MySQL • JavaScript</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-dark-900 dark:text-white">Real Estate Website</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200 mt-1">
                  Property listings with search, filters, and WhatsApp contact integration.
                </p>
                <p className="text-xs text-gold-500 mt-2">PHP • MySQL • JavaScript • Bootstrap</p>
              </div>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-xl p-4">
                <h3 className="font-semibold text-dark-900 dark:text-white">Portfolio Website</h3>
                <p className="text-sm text-dark-500 dark:text-dark-200 mt-1">
                  Personal developer portfolio with dark/light mode, animations, and WhatsApp integration.
                </p>
                <p className="text-xs text-gold-500 mt-2">Next.js • Tailwind CSS • Framer Motion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}