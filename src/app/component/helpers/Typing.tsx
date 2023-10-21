import React, { useState, useEffect, useCallback } from "react";

const TypingAnimationWithCursor = ({ words }: { words: string[] }) => {
  // Initialize state variables
  const [index, setIndex] = useState(0); // Index of the current word
  const [text, setText] = useState(""); // The text to display
  const [showCursor, setShowCursor] = useState(true); // Whether to show the cursor

  // Function to reset the animation
  const resetAnimation = useCallback(() => {
    setIndex(0); // Reset to the first word
    setText(""); // Clear the text
    setShowCursor(true); // Show the cursor
  }, []);

  // Effect to reset the animation when the words prop changes
  useEffect(() => {
    resetAnimation();
  }, [words, resetAnimation]);

  useEffect(() => {
    // This effect runs when dependencies (index, text, words) change

    // Create a timer that adds one character to the text every 50 milliseconds
    const timer = setInterval(() => {
      setText(words[index].slice(0, text.length + 1));
    }, 50);

    if (text === words[index]) {
      // When the current word is fully typed

      clearInterval(timer); // Clear the timer to stop typing

      setTimeout(() => {
        setShowCursor(false); // Hide the cursor after a delay
      }, 500);
    }

    // Return a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [index, text, words]);

  return (
    <span style={{ color: "white" }}>
      {text}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

export default TypingAnimationWithCursor;
