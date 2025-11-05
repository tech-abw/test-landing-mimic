import React from 'react';
import { motion } from 'framer-motion';

const ReusableToolsSection = ({ tools }) => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-gray">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="w-24 h-24 rounded-full bg-[#C4F031] hover:bg-[#D3D3D3] hover:shadow-xl mb-6 flex items-center justify-center overflow-hidden">
                <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-[23px] sm:text-xl font-bold text-gray-900 mb-3">{tool.name}</h3>
              <p className="text-base text-gray-600 px-4">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReusableToolsSection;