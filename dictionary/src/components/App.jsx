import "../App.css";
import { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import magIcon from "../images/icon-search.svg";
import play from "../images/icon-play.svg";
import elink from "../images/icon-new-window.svg";
import axios from "axios";

function App() {
  const [trange, setRange] = useState(true);
  const [font, setFont] = useState("font-sanse");
  const [menus, setMenu] = useState(false);

  const range = trange ? "1" : "2";

  const themeImg = range === "1" ? moon : sun;

  function handleChange() {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark");
    setRange(!trange);
  }

  function fontChange(e) {
    setFont(e.target.value);
  }

  function menuChange() {
    setMenu(!menus);
  }
  const [words, setWords] = useState("");
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;

      try {
        const response = await axios(apiUrl);
        setData(response.data);
        console.log(response.data);
        console.log(response.data[0].meanings[0].definitions[0].definition);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    if (words !== "") {
      fetchData();
      // setWords('');
    }
  }, [words]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWords(word);
  };

  function onSchnage(e) {
    setWord(e.target.value);
  }

  return (
    <>
      <div
        className={`pt-10 pb-1 px-[5vw] ${font} min-h-screen bg-white dark:bg-black dark:text-white`}
      >
        <div className="max-w-[920px] mx-auto flex justify-between items-center flex-wrap">
          <img src={logo} alt="logo" id="logo" className="" />
          <div className="flex items-center gap-[26px]">
            <div className="flex items-center gap-3 relative ">
              <button
                id="cbut"
                onClick={menuChange}
                className="border-none bg-none m-0 p-0 flex items-center justify-end w-[110px] gap-3 "
              >
                <p className="text-[18px] font-bold min-w-[35px]">
                  {font === "font-sanse"
                    ? "San-serif"
                    : font === "font-serife"
                    ? "Serif"
                    : "Mono"}
                </p>
                <img src={arrow} alt="arrow_down" />
              </button>
              <div
                id="menu"
                className={`bg-white absolute w-[140px] ${
                  !menus ? "show" : ""
                } flex flex-col gap-4 text-[15px] py-[12px] border-grey border-2 rounded-md px-6  text-black dark:text-black font-medium`}
              >
                <button
                  value="font-sanse"
                  className="font-sanse hover:text-darkPur bg-none border-none p-0 m-0 text-left"
                  onClick={fontChange}
                >
                  Sans-serif
                </button>
                <button
                  value="font-serife"
                  className="font-serife hover:text-darkPur bg-none border-none p-0 m-0 text-left"
                  onClick={fontChange}
                >
                  Serif
                </button>
                <button
                  value="font-monoe"
                  className="font-monoe hover:text-darkPur bg-none border-none p-0 m-0 text-left"
                  onClick={fontChange}
                >
                  Mono
                </button>
              </div>
            </div>
            <hr className="h-[25px] w-[2px] bg-grey border-none dark:bg-white" />
            <div className="flex items-center gap-[19px] sint">
              <div
                onClick={handleChange}
                className={`flex 
                } w-[40px] h-[20px] bg-grey dark:bg-darkPur rounded-[50px] transition-all duration-300`}
              >
                <span
                  className={`h-full w-[20px] ${
                    !trange ? "ml-[20px]" : ""
                  } bg-gray-800 dark:bg-white rounded-[50%] transition-all duration-300 shadow-lg`}
                />
              </div>
              <img src={themeImg} alt="theme_logo" className="w-[25px]" />
            </div>
          </div>
        </div>
        <div className="mt-[35px] max-w-[920px] mx-auto ">
          <Search word={word} submit={handleSubmit} ichange={onSchnage} />
        </div>
        <div className="max-w-[920px] mx-auto">
          {data ? <Body data={data} /> : null}
        </div>
      </div>
    </>
  );
}

function Body({ data }) {
  return (
    <>
      <div className="flex justify-between items-center mt-[30px] md:mt-[30px] lg:mt-[35px]  mb-[30px]">
        <div className="max-w-[70vw] lg:max-w-[700px]">
          <MainWord word={data[0].word} />
          <Trans text={data[0].phonetic} />
        </div>
        <Audio />
      </div>
      <div className=" mb-[28px]">
        {data[0].meanings.map((item, index) => (
          <Noun
            key={index}
            definitionst={item.definitions}
            psp={item.partOfSpeech}
            syn={item.synonyms ? item.synonyms : undefined}
          />
        ))}
      </div>
      <hr className="w-full  h-[1px] bg-input border-none" />
      <div className="flex mt-[20px] flex-wrap mb-[70px] items-start ">
        <h4 className="whitespace-nowrap text-[14px] text-grey font-[400] mr-[20px]">
          Source :
        </h4>
        <div className="flex items-center">
          <a
            id="ftlnk"
            className="text-[14px] font-bold  mr-[5px] text-grey "
            href={`${data[0].sourceUrls}`}
          >
            {`wikipedia/${data[0].word}`}
          </a>
          <img src={elink} alt="link" className="w-[17px]" />
        </div>
      </div>
    </>
  );
}
function Search({ word, submit, ichange }) {
  return (
    <div>
      <form className="w-full relative" onSubmit={submit}>
        <input
          id="search"
          autoComplete="off"
          type="text"
          value={word}
          onChange={ichange}
          placeholder="Search for any word.."
          className="w-full h-[60px] rounded-[20px] outline-none text-[20px] pl-[20px] pb-[5px] pr-[55px] font-medium text-black dark:text-white bg-input dark:bg-input2"
        />
        <button
          type="submit"
          id="submit"
          className="absolute right-[18px] top-[53%] border-none transform translate-y-[-50%]"
        >
          <img src={magIcon} alt="search" className="w-[22px]" />
        </button>
      </form>
    </div>
  );
}

function MainWord({ word }) {
  let fsize = "";
  if (word.length > 15) {
    fsize = "text-[28px] lg:text-[50px]";
  } else {
    fsize = "text-[30px] lg:text-[60px]";
  }
  return (
    <div className="mb-[10px] max-w-[70vw]">
      <h1
        className={`text-left block font-bold mainWord text-black dark:text-white whitespace-normal capitalize ${fsize} md:text-[45px]`}
      >
        {word}
      </h1>
    </div>
  );
}

function Trans({ text }) {
  const texts = text;
  let fsize = "text-[18px]";
if (text){
  if (text.length > 15) {
    fsize = "text-[14px]";
  } else {
    fsize = "text-[18px]";
  }
}
  return (
    <div className="text-left">
      <p className={`text-darkPur ${fsize} md:text-[19px]`}>{texts}</p>
    </div>
  );
}

function Audio() {
  return (
    <div>
      <button className="border-none bg-none p-0 m-0">
        <img src={play} alt="play_audio" className="w-[50px] sm:w-[64px]" />
      </button>
    </div>
  );
}

function Noun({ definitionst, psp, syn }) {
  const edDef = definitionst.slice(0, 6);
  return (
    <div className="mb-[48px]">
      <div className="flex w-full flex-row justify-between items-center mb-[28px]">
        <h4 className="text-black lowercase italic mr-[20px] dark:text-white text-[20px] font-bold">
          {psp}
        </h4>
        <div className="w-full h-[1px] bg-input"></div>
      </div>
      <div>
        <h3 className="text-[17px] text-grey mb-[20px] font-[400] text-left">
          Meaning
        </h3>
        <ul className="ml-[2rem] list-none tlis">
          {edDef.map((item, index) => (
            <Point
              key={index}
              definitions={item.definition}
              exam={item.example ? item.example : undefined}
            />
          ))}
        </ul>
      </div>
      <Synonym words={syn} />
    </div>
  );
}

function Point({ definitions, exam }) {
  return (
    <li>
      <div className="flex flex-col gap-[10px]">
        <p className="">{definitions}</p>
        {exam ? (
          <span className="text-[15px] text-grey font-medium">{exam}</span>
        ) : null}
      </div>
    </li>
  );
}

function Synonym({ words }) {
  console.log(words);
  if (!words.length) {
    return null;
  }
  const preWord = words.slice(0, 10);
  const word = preWord.join(", ");
  // const fullWords = words.join(' ');
  return (
    <>
      <div className="flex gap-x-[20px] gap-y-[5px] mt-[40px] mb-[43px]">
        <h1 className="text-[17px] whitespace-nowrap  text-grey mb-[0px] font-[400] text-left">
          Synonyms :
        </h1>
        <div className="flex gap-x-[10px] gap-y-[0px] flex-wrap">
          <h4 className="text-darkPur font-bold whitespace-normal wspc">
            {word}
          </h4>
        </div>
      </div>
    </>
  );
}

export default App;
