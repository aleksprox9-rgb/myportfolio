import { useRef, type PropsWithChildren } from "react";
import { motion, useInView, type MotionProps } from "framer-motion";

type PropsReveal = PropsWithChildren & MotionProps;

export function Reveal({ children, ...props }: PropsReveal) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
