import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is item no 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is item no 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is item no 3",
      rating: 7,
    },
  ]);

  //feedback edit contains the item that needs to be edited
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Are your sure bro to delete the ting?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //set the item to be updated//
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);
    setFeedback(feedback.map((item) => ( item.id === id ? {...item,...updItem} : item )))
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
