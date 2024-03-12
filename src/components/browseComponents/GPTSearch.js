import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { useSelector } from "react-redux";
const GPTSearch = () => {
  return (
    <div className="gptSearch h-screen absolute w-screen">
      
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
