"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const whatsappNumber = "+1234567890"; // Replace with your number

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Offwhite!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi%20Offwhite!%20I'm%20interested%20in%20your%20work.`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-[#F7F7F5] dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact Me" subtitle="Let's work together" />

        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-dark-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium dark:text-dark-200 text-dark-600 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-[#F7F7F5] dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium dark:text-dark-200 text-dark-600 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-[#F7F7F5] dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-dark-200 text-dark-600 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-[#F7F7F5] dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-dark-200 text-dark-600 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-600 bg-[#F7F7F5] dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
                  >
                    <Send size={18} /> Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={openWhatsAppChat}
                    className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all"
                  >
                    <MessageCircle size={18} /> Chat Now
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}