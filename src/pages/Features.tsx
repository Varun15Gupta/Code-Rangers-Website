import React from "react";
import { Monitor, Wifi, MessageCircle, Terminal, Users, Cpu, Shield, Database, Globe, Zap, Coffee, Share2, Code, BookOpen, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Learning",
      description: "Join study groups, pair programming sessions, and collaborative projects with fellow developers.",
      specs: [],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Active Forums",
      description: "Engage in technical discussions ask questions and share knowledge with the community.",
      specs: [],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Knowledge Sharing",
      description: "Share your projects, get feedback, and learn from others experiences.",
      specs: [],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source Projects",
      description: "Contribute to real-world projects and build your portfolio with meaningful contributions.",
      specs: [],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Mentorship Program",
      description: "Connect with experienced developers who can guide your learning journey.",
      specs: [],
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitions & Challenges",
      description: "Participate in coding competitions and hackathons to test your skills.",
      specs: [],
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">CORE STRENGTH</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Our core strength is the driving force behind every initiative we undertake. Through a mix of teamwork, innovation, and real-world application, we transform raw talent into industry-ready skill. At Code Rangers, every project is a new opportunity to push boundaries, learn fearlessly, and build solutions that matter.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-60"></div>
                        <span className="text-gray-400 font-mono">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <Coffee className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to <span className="text-cyan-400">Join</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">Step into our elite club and unlock cutting-edge resources, unmatched collaboration and the power to shape the future of technology.</p>
            <a href="https://forms.gle/1JYbtSHaowKCnAit9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 font-mono inline-block">
              REQUEST ACCESS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
