"use client";

import { FormEvent, useState } from "react";
import validateSin from "../actions/validateSin";

export default function SinValidator() {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await validateSin(inputValue);
    setIsValid(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4">
      <div className="mb-4 text-white text-center text-2xl p-[10px]">
        <p className="text-lg">
          Enter a valid 9-digit SIN (Social Insurance Number) with no spaces or
          special characters.
          <br />
          Example: 046454286
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-xl rounded-lg p-8 max-w-sm w-full"
      >
        <h1
          className={`text-2xl font-bold text-white mb-6 text-center transition-all duration-300 ${
            isValid === true ? "scale-110 text-green-400" : ""
          }`}
        >
          {isValid === null
            ? "Check a SIN"
            : isValid
            ? "Valid SIN"
            : "Invalid SIN"}
        </h1>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          type="text"
          placeholder="Enter SIN number"
          className="w-full px-4 py-2 mb-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-white bg-gray-700"
        />

        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-semibold transition-all ${
            isValid === true
              ? "bg-green-600 hover:bg-green-700 scale-105"
              : isValid === false
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          Validate
        </button>
      </form>
    </div>
  );
}
