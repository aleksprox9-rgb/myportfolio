import { memo, useRef, type PropsWithChildren } from "react";
import {
  motion,
  useInView,
  type MotionProps,
  type Variants,
} from "framer-motion";

type PropsReveal = PropsWithChildren & MotionProps;

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const defaulTransition = { duration: 0.5, delay: 0.25 };

export const Reveal = memo(({ children, ...props }: PropsReveal) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        variants={defaultVariants}
        transition={defaulTransition}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
});

Reveal.displayName = "Reveal";
