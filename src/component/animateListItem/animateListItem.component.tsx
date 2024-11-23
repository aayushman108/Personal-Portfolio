import { motion } from "framer-motion";

const card = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export function AnimateListItem({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.li
      variants={card}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      {children}
    </motion.li>
  );
}
