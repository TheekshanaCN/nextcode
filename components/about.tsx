"use client";
import { motion } from "framer-motion";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"; // Importing icons

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#ffffff' }}>
            About
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
            Need a reliable hand for your project? Look no further. Our freelancing service connects you with skilled professionals ready to tackle anything from design to development. Quality work, on your terms.
          </p>
          <div className="flex justify-center">
          <a href="https://discord.gg/g2m3ExwP" target="_blank" rel="noopener noreferrer">
            <button
              className="px-4 mt-6 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
            >
              <FaDiscord className="inline-block mr-2" /> Discord
            </button></a>
            <a href="https://t.me/NextSoftGroup" target="_blank" rel="noopener noreferrer">
            <button
              className="px-4 mt-6 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md mr-4"
            >
              <FaTelegramPlane className="inline-block mr-2" /> Telegram
            </button></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;