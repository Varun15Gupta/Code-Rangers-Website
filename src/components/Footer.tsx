import React from "react";
import { Link } from "react-router-dom";
import { Code2, Github, Twitter, Instagram, Mail, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-cyan-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg blur-md opacity-50 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Code Rangers</span>
            </div>
            <p className="text-gray-400 max-w-md font-mono text-sm leading-relaxed">
              Blending creativity with code, <br /> Turning problems into possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-300 font-semibold mb-4 font-mono">Quick Access</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/features", label: "Features" },
                { path: "/events", label: "Events" },
                { path: "/partners", label: "Partners" },
                { path: "/team", label: "Team" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 font-mono text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-cyan-300 font-semibold mb-4 font-mono">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: MessageCircle, href: "https://chat.whatsapp.com/DsGykbdRTXG2gISvrW2EgJ", color: "hover:text-green-500" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/code-rangerss/", color: "hover:text-blue-600" },
                { icon: Instagram, href: "https://www.instagram.com/code_rangerss/", color: "hover:text-pink-400" },
                { icon: Twitter, href: "https://x.com/code_rangers/", color: "hover:text-blue-400" },
                { icon: Mail, href:  "mailto:coderangerss@gmail.com", color: "hover:text-cyan-400" },
              ].map((social, index) => (
                <a key={index} href={social.href} className={`text-gray-400 ${social.color} transition-colors duration-200`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left font-mono text-sm">© 2025 Code Rangers. Built with ❤️ by our community.</p>
            <p className="text-gray-500 text-center md:text-right font-mono text-xs mt-2 md:mt-0">Powered by Snacks & Caffeine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
