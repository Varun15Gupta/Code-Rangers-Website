import React from "react";
import { Github, Linkedin, Twitter, Mail, Code2, Zap, Brain, Shield, Database, Globe } from "lucide-react";

import VarunImage from "../assets/Team/varun.jpg";
import DhruvImage from "../assets/Team/dhruv.jpg";
import AashishImage from "../assets/Team/aashish.jpg";
import SnehaImage from "../assets/Team/sneha.jpg";
import VarshiniImage from "../assets/Team/varshini.jpg";
import AakashImage from "../assets/Team/aakash.jpg";
import AnkitImage from "../assets/Team/ankit.jpg";
import NadishImage from "../assets/Team/nadish.jpg";
import ManiImage from "../assets/Team/mani.jpg";
import PunitImage from "../assets/Team/punit.jpg";

const Team = () => {
  const leadership = [
    {
      name: "Harshit Gupta",
      role: "President",
      specialization: "Full-Stack Developer",
      image: HarshitImage,
      skills: ["JavaScript", "Web3", "React", "Node.js", "Java", "Kotlin"],
      social: {
        github: "https://github.com/harshitg20",
        linkedin: "https://www.linkedin.com/in/harshit-gupta-361574285/",
        twitter: "https://x.com/_harshit2005",
        email: "harshitgupta2025@gmail.com",
      },
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Dhruv Chaurasiya",
      role: "Vice-President",
      specialization: "AI & ML",
      image: DhruvImage,
      skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "Machine Learning"],
      social: {
        github: "https://github.com/dhruv108dstar",
        linkedin: "https://www.linkedin.com/in/dhruv-kumar-337012256/",
        twitter: "https://x.com/dhruv108dstar",
        email: "dhruv108star@gmail.com",
      },
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Varun Gupta",
      role: "Secretary",
      specialization: "Full-Stack Developer",
      image: VarunImage,
      skills: ["JavaScript", "React", "Node.js", "DSA", "Java", "Python"],
      social: {
        github: "https://github.com/Varun15Gupta",
        linkedin: "https://www.linkedin.com/in/varun-gupta-3b5779239/",
        twitter: "https://x.com/VarunGu32047180",
        email: "15varungupta@gmail.com",
      },
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-red-500 to-orange-500",
    },
  ];

  const coreTeam = [
    {
      name: "Punit Kumar",
      role: "Devlopment Lead",
      specialization: "Embedded Systems",
      image: PunitImage,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Mani Goel",
      role: "Design Lead",
      specialization: "Embedded Systems",
      image: ManiImage,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="https://www.linkedin.com/in/mani-goel-8709b6327/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "K Varshini",
      role: "Event Coordinator Lead",
      specialization: "UI/UX & Performance",
      image: VarshiniImage,
      skills: ["React", "TypeScript", "Three.js", "WebGL"],
      icon: (
        <a href="https://www.linkedin.com/in/varshini-kota-85a8082b0/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Sneha Santra",
      role: "Devlopment Co-Lead",
      specialization: "Embedded Systems",
      image: SnehaImage,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Akshara Pathak",
      role: "Design Co-Lead",
      specialization: "Cloud Infrastructure",
      image: T25,
      icon: (
        <a href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Aashish Dagar",
      role: "Event Coordinator Co-Lead",
      specialization: "Embedded Systems",
      image: AashishImage,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="https://www.linkedin.com/in/aashish-dagar-aaba451b3/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },

    {
      name: "Akash Yadav",
      role: "Devlopment Member",
      specialization: "Analytics & Visualization",
      image: AakashImage,
      icon: (
        <a href="https://www.linkedin.com/in/saksham-chauhan-b18bb5277/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Divina Khattar",
      role: "Design Member",
      specialization: "Distributed Systems",
      image: ,
      skills: ["Go", "PostgreSQL", "Docker", "AWS"],
      icon: (
        <a href="https://www.linkedin.com/in/divina-khattar-555939360/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Srishti",
      role: "Event Coordinator Member",
      specialization: "Embedded Systems",
      image: ,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Bhumi Sharma",
      role: "Event Coordinator Member",
      specialization: "Embedded Systems",
      image: ,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Nadish",
      role: "Event Coordinator Member",
      specialization: "Embedded Systems",
      image: NadishImage,
      skills: ["Arduino", "Raspberry Pi", "C++", "MQTT"],
      icon: (
        <a href="" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
    {
      name: "Ankit Kumar",
      role: "Event Coordinator Member",
      specialization: "Smart Contracts & DeFi",
      image: AnkitImage,
      icon: (
        <a target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      ),
      gradient: "",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Committee</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Meet the digital architects, problem solvers, and tech innovators who drive Coder Rangers. Each member brings unique expertise, united in shaping the future of technology.</p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">COMMAND CENTER</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {leadership.map((member, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors duration-300">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center border-2 border-black`}>{member.icon}</div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">{member.name}</h3>
                    <p className="text-cyan-400 font-medium text-sm mb-1 font-mono">{member.role}</p>
                    <p className="text-gray-400 text-xs font-mono">{member.specialization}</p>
                  </div>

                  {/* Bio */}

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-md font-mono border border-cyan-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Team */}
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">CORE OPERATORS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-cyan-500/20 mb-4">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{member.name}</h3>
                      <p className="text-cyan-400 text-md font-mono">{member.role}</p>
                    </div>
                    <div className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-lg flex items-center justify-center`}>{member.icon}</div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <Code2 className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join<span className="text-cyan-400"> Code Rangers</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">We're always looking for passionate developers, designers, and tech enthusiasts to join our elite team. Bring your skills to the Squad.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/1JYbtSHaowKCnAit9" 
                target="_blank"
                rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 font-mono">APPLY NOW</button>
              </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

