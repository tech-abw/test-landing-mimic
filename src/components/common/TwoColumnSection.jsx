import React from 'react';
import { motion } from 'framer-motion';
import './TwoColumnSection.css';

const TwoColumnSection = ({ imageSrc, title, text, imageSide = 'left' }) => {
  const imageOrder = imageSide === 'left' ? 'order-1' : 'order-2';
  const textOrder = imageSide === 'left' ? 'order-2' : 'order-1';

  return (
    <section className="two-column-section">
      <div className={`column image-column ${imageOrder}`}>
        <motion.div
          className="section-image"
          style={{ backgroundImage: `url(${imageSrc})` }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        />
      </div>
      <div className={`column text-column ${textOrder}`}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="section-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
};
export default TwoColumnSection;
