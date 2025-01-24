"use client";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaRobot,
  FaDiscord,
  FaGoogle,
  FaChartLine,
  FaPenFancy,
  FaShieldAlt,
  FaUserSecret,
  FaBitcoin,
  FaEdit,
} from "react-icons/fa"; // Importing icons

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Website Development",
      description:
        "Looking for a professional web developer? Look no further! Our team at NextSoft specializes in creating stunning and user-friendly websites that will help your business stand out in the digital landscape.",
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Graphics Design",
      description:
        "Elevate your brand's visual identity with our top-notch graphic design services. At NextSoft, we turn your ideas into captivating visuals that leave a lasting impression on your audience.",
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: "Video Editing",
      description:
        "Bring your ideas to life with our professional video editing services. We create stunning videos that tell your brand's story and leave a lasting impact.",
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Coding",
      description:
        "Transform your ideas into reality with our coding service. We craft code that works for you.",
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Bot Development",
      description:
        "Discord is more than just a chat platform; it's a thriving ecosystem. Make the most of it with our Discord bot development expertise. From game integration to community management, we create bots that enrich the Discord experience for you and your members.",
    },
    {
      icon: <FaDiscord className="text-4xl" />,
      title: "Discord Setup",
      description:
        "Unlock the full potential of Discord effortlessly with our setup service. We handle the details, so you can focus on building your community.",
    },
    {
      icon: <FaGoogle className="text-4xl" />,
      title: "Google Sheets",
      description:
        "Best for businesses, Organize your data, Leverage the power of Google Sheets for your data utilization.",
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "SEO Specialist",
      description:
        "Transform websites into online powerhouses with our SEO specialists at NextSoft! Boost your business with expert strategies and watch your online presence soar!",
    },
    {
      icon: <FaPenFancy className="text-4xl" />,
      title: "Marketer",
      description:
        "Experience marketing magic with NextSoft's expert marketers! Elevate your brand and reach new heights in the digital world.",
    },
    {
      icon: <FaEdit className="text-4xl" />,
      title: "Content Creator",
      description:
        "Unleash your creativity as a content creator at NextSoft! Craft engaging content that captivates audiences and shapes the online narrative.",
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Cybersecurity Expert",
      description:
        "Safeguard your digital realm with NextSoft's cybersecurity expertise. Our team employs cutting-edge measures to protect your online assets, ensuring a fortress-like defense against potential threats.",
    },
    {
      icon: <FaUserSecret className="text-4xl" />,
      title: "Penetration Tester",
      description:
        "Navigate the digital landscape securely with NextSoft's pentesting services. We probe, identify, and fortify vulnerabilities, ensuring your systems are resilient in the face of evolving cyber challenges. Stay ahead in the game with our thorough and strategic penetration testing.",
    },
    {
      icon: <FaBitcoin className="text-4xl" />,
      title: "Blockchain Development Services",
      description:
        "Use our development services to discover more about the industry of blockchain. We develop innovative and safe solutions, including blockchain apps and smart contracts.",
    },
    {
      icon: <FaEdit className="text-4xl" />,
      title: "Writing",
      description:
        "Elevate your written communication with NextSoft's writing expertise. Our team employs insightful strategies to craft compelling content, ensuring your message resonates effectively with your audience. Whether it's creating engaging articles, polished reports, or captivating copy, trust NextSoft to deliver quality writing services that elevate your brand's presence and impact.",
    },
  ];

  return (
    <section id="port" className="py-16" style={{ backgroundColor: '#000000' }}>
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
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#ffffff' }}>
                {service.title}
              </h3>
              <p className="text-neutral-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;