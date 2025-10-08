import { Twitter, Facebook, Linkedin, Github, Instagram } from 'lucide-react';
import portrait from '../assets/barisua2.png';

export default function About() {
  return (
    <div className="min-h-screen py-12 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm text-gray-400 mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">Barisua Nsaanee</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-emerald-500"></div>
            <div className="h-1 w-2 bg-emerald-500"></div>
            <div className="h-1 w-2 bg-emerald-500"></div>
          </div>
          <p className="text-base sm:text-xl text-emerald-400 italic max-w-4xl mx-auto leading-relaxed">
            "Bridging neuroscience and education to reimagine how African learners grow, think, and thrive."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-16">
          <div className="relative order-2 md:order-1">
            <img
              src={portrait}
              alt="Barisua Nsaanee"
              className="w-full h-56 sm:h-72 md:h-[500px] object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Neuroscientist and community leader passionate about translating brain science into transformative learning experiences for African children and youth. Through programs, research-driven initiatives, and visionary projects, I build spaces where science meets everyday life — empowering communities to learn, thrive, and innovate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-emerald-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors">
                Download CV
              </button>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-emerald-500">My Journey</h3>
          <div className="bg-[#2a2a2a] p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey sits at the intersection of neuroscience, education, and community building. With a foundation in neuroscience and a leadership role at ALX, I've led programs that nurture human potential and build pan-African communities for lifelong learning.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              My "why" is clear: to bridge cutting-edge neuroscience and culturally grounded education, creating ecosystems where children can flourish mentally, emotionally, and socially.
            </p>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Education</h3>

              <div className="relative pl-6 sm:pl-8">
                {/* vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-emerald-500"></div>

                <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-b border-[#2f2f2f]">
                  <div className="absolute -left-1 top-6 h-3 w-3 bg-emerald-500 rotate-45 rounded-sm"></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Bsc Human anatomy</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">2013 - 2017</p>
                </div>

                <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-b border-[#2f2f2f]">
                  <div className="absolute -left-1 top-6 h-3 w-3 bg-emerald-500 rotate-45 rounded-sm"></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Msc Neuroscience</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">2021 - 2024</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Experience</h3>

              <div className="relative pl-6 sm:pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-emerald-500"></div>

                <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-b border-[#2f2f2f]">
                  <div className="absolute -left-1 top-6 h-3 w-3 bg-emerald-500 rotate-45 rounded-sm"></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Community and Operations Manager</h4>
                </div>

                <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-b border-[#2f2f2f]">
                  <div className="absolute -left-1 top-6 h-3 w-3 bg-emerald-500 rotate-45 rounded-sm"></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">ALX Community Ambassador</h4>
                </div>

                <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-b border-[#2f2f2f]">
                  <div className="absolute -left-1 top-6 h-3 w-3 bg-emerald-500 rotate-45 rounded-sm"></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Independent Consultant</h4>
                </div>

                <div className="bg-[#1f1f1f] p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-b border-[#2f2f2f]">
                  <div className="absolute -left-1 top-6 h-3 w-3 bg-emerald-500 rotate-45 rounded-sm"></div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Executive Assistant/Project Manager</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
