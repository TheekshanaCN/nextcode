"use client";
import { motion } from "framer-motion";
import { FaMoneyBillAlt, FaUsers, FaShippingFast } from "react-icons/fa"; // Importing icons

const Benefits = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#0a0a0a' }}>
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
          Our Benefits
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1: Affordable Pricing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
          >
            <div className="flex justify-center mb-4">
              <FaMoneyBillAlt className="text-4xl" style={{ color: '#ffffff' }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>
              Affordable Pricing
            </h3>
            <p className="text-neutral-300">
              Our prices are highly competitive, ensuring that your purchases are
              always worthwhile.
            </p>
          </motion.div>

          {/* Benefit 2: Experienced Team */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
          >
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl" style={{ color: '#ffffff' }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>
              Experienced Team
            </h3>
            <p className="text-neutral-300">
              Our team is made up of young professionals with vast experience in
              the industries they work in.
            </p>
          </motion.div>

          {/* Benefit 3: Fast Delivery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="bg-black p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
          >
            <div className="flex justify-center mb-4">
              <FaShippingFast className="text-4xl" style={{ color: '#ffffff' }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff' }}>
              Fast Delivery
            </h3>
            <p className="text-neutral-300">
              We strive to deliver your orders as quickly as we can, prioritizing
              your convenience and efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;