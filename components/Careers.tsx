"use client";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaRobot,
  FaDiscord,
  FaGoogle,
  FaChartLine,
  FaPenFancy,
  FaEdit, 
  FaShieldAlt,
  FaUserSecret,
  FaBitcoin,
} from "react-icons/fa"; // Importing icons

const Careers = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const careers = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Website Development",
      description: "Get employed as a website developer at NextSoft!",
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Graphics Design",
      description: "Get employed as a graphics designer at NextSoft!",
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: "Video Editing",
      description: "Get employed as a video editor at NextSoft!",
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Coding",
      description: "Get employed as a coder at NextSoft!",
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Bot Development",
      description: "Get employed as a bot developer at NextSoft!",
    },
    {
      icon: <FaDiscord className="text-4xl" />,
      title: "Discord Setup",
      description: "Get employed as a Discord server creator at NextSoft!",
    },
    {
      icon: <FaGoogle className="text-4xl" />,
      title: "Google Sheets",
      description: "Get employed as a Google Sheets builder at NextSoft!",
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "SEO Specialist",
      description: "Get employed as an SEO specialist at NextSoft!",
    },
    {
      icon: <FaPenFancy className="text-4xl" />,
      title: "Marketer",
      description: "Get employed as a Marketer at NextSoft!",
    },
    {
      icon: <FaEdit className="text-4xl" />,
      title: "Content Creator",
      description: "Get employed as a Content Creator at NextSoft!",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Cybersecurity Expert",
      description: "Get employed as a Cybersecurity Expert at NextSoft!",
    },
    {
      icon: <FaUserSecret className="text-4xl" />,
      title: "Penetration Tester",
      description: "Get employed as a Penetration Tester at NextSoft!",
    },
    {
      icon: <FaBitcoin className="text-4xl" />,
      title: "Blockchain Development Services",
      description: "Get employed as a Blockchain Developer at NextSoft!",
    },
  ];

  return (
    <section id="careers" className="py-16" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: '#ffffff' }}
        >
          Careers
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            Welcome to our team! We're always on the lookout for talented individuals to join us on our exciting journey. If you're passionate, dedicated, and ready to make a meaningful impact, we'd love to hear from you. Explore our current job openings and discover how you can become a part of our dynamic team. Your next career opportunity could be just a click away.
          </p>
          <a href="https://discord.gg/g2m3ExwP" target="_blank" rel="noopener noreferrer">
          <button
            className="px-4 mt-6 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            <FaSearch className="inline-block mr-2" /> Explore vacancies
          </button></a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex justify-center mb-4" style={{ color: '#ffffff' }}>
                {career.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#ffffff' }}>
                {career.title}
              </h3>
              <p className="text-neutral-300 text-center">{career.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;