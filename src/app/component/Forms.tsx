"use client";
import React, { useState } from "react";
import axios from "axios";
import TypingAnimationWithCursor from "./helpers/Typing";

// Define the Forms component
function Forms(): JSX.Element {
  // Define state variables
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let timeOfDay;
  
  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [translation, setTranslation] = useState<string>(
    `Good ${timeOfDay} ! I'm an AI translator`
  ); // Default value
  const [textareaValue, setTextareaValue] = useState<string>(""); // State to store textarea content
  const [disableTyping, setDisableTyping] = useState<boolean>(false);

  // Handle change event for select element
  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedOption(event.target.value);
  };

  // Handle change event for textarea element
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTextareaValue(event.target.value);

    // Disable typing animation and translation
    setDisableTyping(true);
  };

  // Handle form submit
  const handleSubmit = async (): Promise<void> => {
    // Create messages object
    const messages = {
      system: "system",
      systemContent:
        "You are now a translator, translate user prompt to " + selectedOption,
      user: "user",
      userContent: textareaValue,
    };

    try {
      // Send API request to "/api/chatgpt/" using axios
      const apiResponse = await axios.post("/api/chatgpt/", messages);
      console.log(apiResponse.data);

      // Update the translation state with the API response data
      setTranslation(apiResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      // Enable typing animation after translation is complete
      setDisableTyping(false);
    }
  };

  // Render the Forms component
  return (
    <>
      <div className="self-auto">
        <div className="mt-5">
          <div className="flex justify-center">
            {/* Select element */}
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelectChange}
              defaultValue={selectedOption}
            >
              <option value="" disabled>
                Select a language
              </option>
              <option value="EN">English</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="VI">Vietnam</option>
              <option value="TH">Thai</option>
            </select>

            {/* Button element */}
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover-bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleSubmit}
              disabled={
                textareaValue.length === 0 || selectedOption.length === 0
              }
            >
              Submit
            </button>
          </div>

          <div className="w-full mt-5 p-4 text-center">
            {/* Textarea element */}
            <textarea
              id="large-input"
              className="text-center block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={textareaValue}
              onChange={handleTextareaChange}
            />

            <div className="w-full mt-5 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[100px] h-[auto]">
              {/* Display the translation */}
              <span>
                {disableTyping ? (
                  "Wait for translation..."
                ) : (
                  <TypingAnimationWithCursor words={[translation]} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
