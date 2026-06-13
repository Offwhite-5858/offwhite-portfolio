"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Node.js", "MySQL", "PostgreSQL", "REST APIs", "Supabase"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Responsive Design", "SEO", "Framer Motion"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#F7F7F5] dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 0.2}>
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100 dark:border-dark-700">
                <h3 className="text-xl font-bold text-gold-500 mb-6 text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#F7F7F5] dark:bg-dark-700 text-dark-600 dark:text-dark-200 rounded-full text-sm font-medium hover:bg-gold-500 hover:text-dark-900 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}