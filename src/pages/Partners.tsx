import React from "react";
import { Award, Handshake } from "lucide-react";

const Partners = () => {
  const sponsors = [
    {
      name: "Sponsor 1",
      image: "https://ik.imagekit.io/logicsync/the%20dopamine%20store.png?updatedAt=1762982903129",
      tier: "Platinum",
    },
    {
      name: "Sponsor 2",
      image: "https://ik.imagekit.io/logicsync/abhibus.jpeg?updatedAt=1762982986424",
      tier: "Gold",
    },
    {
      name: "Sponsor 3",
      image: "https://ik.imagekit.io/logicsync/aptos%20.jpeg?updatedAt=1762982769979",
      tier: "Gold",
    },
    {
      name: "Sponsor 4",
      image: "https://ik.imagekit.io/logicsync/Screenshot%202025-11-13%20030519.png?updatedAt=1762983367673",
      tier: "Silver",
    },
    {
      name: "Sponsor 5",
      image: "https://ik.imagekit.io/logicsync/fizzico.jpeg?updatedAt=1762982770870",
      tier: "Silver",
    },
    {
      name: "Sponsor 6",
      image: "https://ik.imagekit.io/logicsync/lazer%20crazer.png?updatedAt=1762982771347",
      tier: "Silver",
    },
    {
      name: "Sponsor 7",
      image: "https://ik.imagekit.io/logicsync/sata.jpeg?updatedAt=1762982770935",
      tier: "Silver",
    },
    {
      name: "Sponsor 8",
      image: "https://ik.imagekit.io/logicsync/rise%20in%20.jpeg?updatedAt=1762984171098",
      tier: "Silver",
    },
    {
      name: "Sponsor 9",
      image: "https://ik.imagekit.io/logicsync/duality%20.jpeg?updatedAt=1762984382166",
      tier: "Silver",
    },
    {
      name: "Sponsor 9",
      image: "https://ik.imagekit.io/logicsync/runanywhere.png?updatedAt=1762984618403",
      tier: "Silver",
    },
  ];

  const communityPartners = [
    {
      name: "Partner 1",
      image: "https://ik.imagekit.io/logicsync/hacking%20vidya.jpg?updatedAt=1762984842499",
    },
    {
      name: "Partner 2",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.17%20PM%20(2).jpeg?updatedAt=1763056155086",
    },
    {
      name: "Partner 3",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.44%20PM%20(1).jpeg?updatedAt=1763056156540",
    },
    {
      name: "Partner 4",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.14%20PM.jpeg?updatedAt=1763056154562",
    },
    {
      name: "Partner 5",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.45%20PM%20(1).jpeg?updatedAt=1763056156909",
    },
    {
      name: "Partner 6",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.14%20PM.jpeg?updatedAt=1763056154562",
    },
    {
      name: "Partner 7",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.15%20PM.jpeg?updatedAt=1763056157474",
    },
    {
      name: "Partner 8",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.48%20PM.jpeg?updatedAt=1763056156640",
    },
    {
      name: "Partner 9",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.16%20PM.jpeg?updatedAt=1763056157138",
    },
    {
      name: "Partner 10",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.18%20PM.jpeg?updatedAt=1763056157862",
    },
    {
      name: "Partner 11",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.23%20PM.jpeg?updatedAt=1763056157851",
    },
    {
      name: "Partner 12",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.20%20PM.jpeg?updatedAt=1763056157653",
    },
    {
      name: "Partner 13",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.50%20PM.jpeg?updatedAt=1763056157657",
    },
    {
      name: "Partner 14",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.52%20PM%20(1).jpeg?updatedAt=1763056158181",
    },
    {
      name: "Partner 15",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.19%20PM.jpeg?updatedAt=1763056158170",
    },
    {
      name: "Partner 16",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.19%20PM%20(1).jpeg?updatedAt=1763056158163",
    },
    {
      name: "Partner 17",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.51%20PM.jpeg?updatedAt=1763056158107",
    },
    {
      name: "Partner 18",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.52%20PM%20(2).jpeg?updatedAt=1763056157523",
    },
    {
      name: "Partner 19",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.45%20PM.jpeg?updatedAt=1763056157511",
    },
    {
      name: "Partner 20",
      image: "https://ik.imagekit.io/logicsync/WhatsApp%20Image%202025-11-13%20at%2010.56.53%20PM.jpeg?updatedAt=1763056157449",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Our Sponsors Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">OUR SPONSORS</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powered by industry leaders who believe in our mission to shape the future of technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-yellow-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center h-32">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
      <section className="relative py-20 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-12 h-12 text-green-400 mr-3" />
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">COMMUNITY PARTNERS</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Collaborating with amazing communities to create a stronger tech ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPartners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center h-32">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Become a <span className="text-yellow-400">Partner</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join us in shaping the future of technology. Partner with Code Rangers to empower the next generation of innovators.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-500 transition-all duration-300 font-mono inline-block"
            >
              PARTNER WITH US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
