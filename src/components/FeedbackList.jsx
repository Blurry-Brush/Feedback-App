import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function Feedbacklist() {
  
  //takes anything from the value params of the context provider
  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p> No Feedback yet.</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            
            <FeedbackItem key={index} item={item}/>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feedbacklist;
