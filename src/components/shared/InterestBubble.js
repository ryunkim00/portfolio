import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import InterestBubbleModal from "./InterestBubbleModal";

const InterestBubble = ({ size, delay, imgSrc, title }) => {
  const [verticalLength, setVerticalLength] = useState(0);

  useEffect(() => {
    setVerticalLength(-20);
  }, []);

  const bubbleVariants = {
    animate: {
      y: verticalLength,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        delay,
      },
    },
    hover: {
      scale: 1.05,
    },
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <motion.div
      onClick={() => setModalVisible(!modalVisible)}
      title={title}
      className="shadow"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        margin: "1rem 2rem",
        cursor: "pointer",
      }}
      variants={bubbleVariants}
      animate="animate"
      whileHover="hover"
    >
      <img
        src={imgSrc ? imgSrc : "https://picsum.photos/300"}
        alt="placeholder"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <AnimatePresence>
        {modalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InterestBubbleModal size={size} title={title} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InterestBubble;
