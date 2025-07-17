// components/animations/FadeInUp.js
import { motion } from "framer-motion";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FadeInUp = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUpVariant}
  >
    {children}
  </motion.div>
);

export default FadeInUp;
