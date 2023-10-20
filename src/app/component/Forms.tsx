"use client"
import React, { useState } from 'react';

function Forms() {
  const [selectedOption, setSelectedOption] = useState('');
  const [translation, setTranslation] = useState('');
  const [textareaValue, setTextareaValue] = useState(''); // State to store textarea content

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(selectedOption); // Log the selected option to the console
    console.log(textareaValue); // Log the content of the textarea
    // You can add translation logic here based on the selected option
    console.log(translation);
  };

  return (
    <>
      <div className="self-auto">
        <div className="mt-5">
          <div style={{ display: "flex", alignItems: "center" }}>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value="" disabled>Select a language</option>
              <option value="EN">English</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="VI">Vietnam</option>
              <option value="TH">Thai</option>
            </select>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-blue-600 dark:hover-bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          <textarea
            id="large-input"
            className="mt-5 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={textareaValue}
            onChange={handleTextareaChange}
          />

          <textarea
            id="large-input"
            placeholder="Translates here"
            className="mt-5 block w-full p-4 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={translation}
          />
        </div>
      </div>
    </>
  );
}

export default Forms;
