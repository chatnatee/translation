import React from "react";

function Footer() {
  // Array of random messages
  const randomMessages = [
    "Copyright © 2023 Tav College",
    "All rights reserved.",
    "Made with ❤️",
  ];

  // Function to pick a random message from the array
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    return randomMessages[randomIndex];
  };

  return (
    <div className="justify-center text-center">
      <p>{getRandomMessage()}</p>
    </div>
  );
}

export default Footer;
