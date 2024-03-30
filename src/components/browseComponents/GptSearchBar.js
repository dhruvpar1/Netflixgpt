import { useDispatch, useSelector } from "react-redux";
import { openai } from "../../utils/OpenAi";
import lang from "../../utils/LanguageConst";
import { useRef } from "react";
import { API_OPTION } from "../../utils/const";
import { addGptMoviesResult } from "../../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch=useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB=async(movie)=>{
const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1",API_OPTION )
const json =await data.json();
return json.results;
  }
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)
    const gptQurery =
      "Act as an movie recommandation System and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 Movies, comman seperated like the example result given ahead. Example Result :Gadar,Sholey,Don,Golmal,Koi Mill Gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQurery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies=gptResult.choices?.[0]?.message?.content.split(",");
     const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie))
     const tmdbResults=await Promise.all(promiseArray);
     console.log(tmdbResults)

     const exactMatches = tmdbResults.flatMap(result => {
      return result.filter(movie => gptMovies.includes(movie.original_title));
    });
    dispatch(addGptMoviesResult(exactMatches));
    console.log(exactMatches)
  };

  return (
    <div className=" py-20 flex justify-center items-center sm:">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="bg-black flex-col justify-center items-center p-3 sm: w-1/2  p-2 my-24"
      >
        <input
          ref={searchText}
          type="text"
          name=""
          id=""
          className="w-[100%] p-3 sm:p-2  text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="w-[95%] mt-3 sm:text-white my-1 mx-3  bg-red-700  hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
