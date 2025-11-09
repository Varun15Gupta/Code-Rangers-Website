import React from "react";
import { Camera, Play, Maximize2, Users, Code2, Cpu, Zap } from "lucide-react";
import SM1 from "../assets/StartUp-Mindset/SM1.jpeg";
import sm2 from "../assets/StartUp-Mindset/sm2.jpeg";
import SM3 from "../assets/StartUp-Mindset/SM3.jpeg";
import SM4 from "../assets/StartUp-Mindset/SM4.jpg";
import SM6 from "../assets/StartUp-Mindset/SM6.jpg";
import SM7 from "../assets/StartUp-Mindset/SM7.jpg";
import T1 from "../assets/Techjam/T1.jpg";
import T3 from "../assets/Techjam/T3.jpg";
import T4 from "../assets/Techjam/T4.jpg";
import T5 from "../assets/Techjam/T5.jpg";
import T7 from "../assets/Techjam/T7.jpg";
import T8 from "../assets/Techjam/T8.jpg";
import H1 from "../assets/Hackathon/H1.jpg";
import H2 from "../assets/Hackathon/H2.jpg";
import H3 from "../assets/Hackathon/H3.jpg";
import H4 from "../assets/Hackathon/H4.jpg";
import H5 from "../assets/Hackathon/H5.jpg";
import H6 from "../assets/Hackathon/H6.jpg";
import H7 from "../assets/Hackathon/H7.jpg";
import H8 from "../assets/Hackathon/H8.jpg";
import H9 from "../assets/Hackathon/H9.jpg";
import H10 from "../assets/Hackathon/H10.jpg";
import H11 from "../assets/Hackathon/H11.jpg";
import H12 from "../assets/Hackathon/H12.jpg";
import H13 from "../assets/Hackathon/H13.jpg";
import H14 from "../assets/Hackathon/H14.jpg";
import H16 from "../assets/Hackathon/H16.jpg";
import H17 from "../assets/Hackathon/H17.jpg";
import H18 from "../assets/Hackathon/H18.jpg";
import H19 from "../assets/Hackathon/H19.jpg";
import S1 from "../assets/Sponsor/S1.jpg";
import S2 from "../assets/Sponsor/S2.jpg";
import S3 from "../assets/Sponsor/S3.jpg";
import S4 from "../assets/Sponsor/S4.jpg";
const Gallery = () => {
  const gallery = [
    {
      title: "Winner Code Nakshatra Hackathon",
      image: H2,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Runner-Up Code Nakshatra Hackathon",
      image: H3,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "2nd Runner-Up Code Nakshatra Hackathon",
      image: H4,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Organizing Team Code Nakshatra Hackathon",
      image: H5,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Judges & Mentors",
      image: H14,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Mentors",
      image: H8,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Registraion Desk",
      image: H12,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Trophies & Momentos",
      image: H6,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "5000+ Registrations",
      image: H9,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Code Rangers Team",
      image: H13,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Core Committee",
      image: H11,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Jamming Session",
      image: H7,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Code Nakshatra Banner",
      image: H1,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Banner Preparation",
      image: H10,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Banner Preparation",
      image: H19,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Trio",
      image: H16,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "The Crew",
      image: H17,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Code Nakshatra After Party",
      image: H18,
      category: "Code Nakshatra Hackathon",
    },
    {
      title: "Trinity's TechJam1.0",
      image: T1,
      category: "Trinity's Techjam 1.0",
    },
    {
      title: "Group Photo",
      image: T3,
      category: "Trinity's Techjam 1.0",
    },
    {
      title: "Seminar Hall",
      image: T4,
      category: "Trinity's Techjam 1.0",
    },
    {
      title: "Judging Panel",
      image: T5,
      category: "Trinity's Techjam 1.0",
    },
    {
      title: "Trio",
      image: T7,
      category: "Trinity's Techjam 1.0",
    },
    {
      title: "Winner's Trinity's Techjam 1.0",
      image: T8,
      category: "Trinity's Techjam 1.0",
    },
    { title: "Start-Up Mindset", image: SM1, category: "StartUp-Mindset" },
    { title: "Seminar Hall", image: SM3, category: "StartUp-Mindset" },
    { title: "Mr.Shubham Raj, Faculty & Organizing Team", image: SM4, category: "StartUp-Mindset" },

    { title: "Trophy", image: SM6, category: "StartUp-Mindset" },
    { title: "Group Photo", image: sm2, category: "StartUp-Mindset" },
    { title: "Attendees", image: SM7, category: "StartUp-Mindset" },
    // Sponsorships
    {
      title: "Hack loop (Gurgaon)",
      image: S4,
      category: "Event's Sponsored By Code Rangers",
    },
    {
      title: "Hack Centrix (GLA Mathura)",
      image: S1,
      category: "Event's Sponsored By Code Rangers",
    },
    {
      title: "Tech Inertia (GNIOT)",
      image: S2,
      category: "Event's Sponsored By Code Rangers",
    },
    {
      title: "Hack'O' Clock (IILM)",
      image: S3,
      category: "Event's Sponsored By Code Rangers",
    },
  ];

  const categories = ["All", "Code Nakshatra Hackathon", "Trinity's Techjam 1.0", "StartUp-Mindset", "Event's Sponsored By Code Rangers", "Orientation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredGallery = selectedCategory === "All" ? gallery : gallery.filter((item) => item.category === selectedCategory);

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Active Members", value: "2000+" },
    { icon: <Code2 className="w-6 h-6" />, label: "Projects Built", value: "25+" },
    { icon: <Cpu className="w-6 h-6" />, label: "Events Sponsored", value: "5+" },
    { icon: <Zap className="w-6 h-6" />, label: "Events Hosted", value: "10+" },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">VISION GRID</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Enter our Code Rangers club&#39;s gallery — a showcase of creativity, innovation, and problem-solving. Every moment on display reflects our passion for technology and the ideas shaping tomorrow.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm text-center">
                <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 overflow-hidden">
        <div className="relative h-80">
          {/* Gradient fades on sides */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Animation container */}
          <div className="film-roll flex space-x-6 h-full">
            {[...gallery, ...gallery].map((item, index) => (
              <div key={index} className="relative flex-shrink-0 w-80 h-full group cursor-pointer">
                <div className="relative h-full rounded-2xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500">
                  <span className="absolute top-4 left-4 px-2 py-1 bg-cyan-500/30 text-cyan-300 text-xs rounded-md font-mono z-20">{item.category}</span>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-semibold mb-2 text-cyan-300">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`.film-roll {
  width: max-content;
  animation: scrollLeft 90s linear infinite;
}

.film-roll:hover {
  animation-play-state: paused;
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

`}
      </style>

      {/* Category Filter */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-mono ${selectedCategory === category ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-cyan-500/20"}`}>
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-cyan-500/30 text-cyan-300 text-xs rounded-md font-mono backdrop-blur-sm">{item.category}</span>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Gallery;
