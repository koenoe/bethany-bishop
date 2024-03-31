export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

export const childVariants = {
  hidden: { y: 15, opacity: 0 }, // Starting position off the y-axis
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 0.75, // Duration for opacity transition
        ease: [0.28, 0.44, 0.49, 1], // cubic-bezier for opacity transition
      },
      y: {
        duration: 1, // Duration for y-axis (transform) transition
        ease: [0.42, 0, 0.002, 1], // cubic-bezier for y-axis (transform) transition
      },
    },
  },
};

const buttonTransition = {
  duration: 0.3,
  ease: 'easeInOut',
};

export const buttonVariants = {
  hover: {
    scale: 1.04,
    transition: buttonTransition,
  },
  tap: {
    scale: 0.96,
    transition: buttonTransition,
  },
};
