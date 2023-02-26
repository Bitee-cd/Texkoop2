import { motion } from "framer-motion";

export default function NewLanguage(props) {
  const variants = {
    english: {
      x: 0,
      opacity: 1,
    },
    french: {
      x: -20,
      opacity: 0.5,
    },
  };

  const transition = {
    duration: 0.3,
  };

  function handleHover() {
    // toggle the locale and trigger the animation
  }

  return (
    <motion.div
      className="locale-changer"
      variants={variants}
      transition={transition}
      onHoverStart={handleHover}
    >
      <span>{props.locale === "english" ? "EN" : "FR"}</span>
    </motion.div>
  );
}
