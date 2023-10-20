import React from "react";

function Forms() {
  return (
    <>
      <div className="self-auto">
        <div className="mt-5">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
          >
            <option selected>Select a language</option>
            <option value="EN">English</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="VI">Vietnam</option>
            <option value="TH">Thai</option>
          </select>

          <textarea
            id="large-input"
            className=" mt-5 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <textarea
            id="large-input"
            placeholder="Translates here"
            className=" mt-5 block w-full p-4 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </>
  );
}

export default Forms;
