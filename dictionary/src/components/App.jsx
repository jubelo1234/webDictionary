import "../App.css";
import { useState } from "react";
import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import magIcon from "../images/icon-search.svg";
import play from "../images/icon-play.svg";
import elink from "../images/icon-new-window.svg";

function App() {
  const [range, setRange] = useState("1");
  const [font, setFont] = useState("font-sanse");
  const [menus, setMenu] = useState(false);

  const themeImg = range === "1" ? moon : sun;

  function handleChange(e) {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark");
    setRange(e.target.value);
  }

  function fontChange(e) {
    setFont(e.target.value);
  }

  function menuChange() {
    setMenu(!menus);
  }

  return (
    <>
      <div
        className={`pt-10 pb-4 px-[5vw] ${font} min-h-screen bg-white dark:bg-black dark:text-white`}
      >
        <div className="max-w-[920px] mx-auto flex justify-between items-center flex-wrap">
          <img src={logo} alt="logo" className="" />
          <div className="flex items-center gap-[26px]">
            <div className="flex items-center gap-3 relative ">
              <p className="text-[18px] font-bold min-w-[35px]" onClick={menuChange}>
                {font === "font-sanse"
                  ? "San-serif"
                  : font === "font-serife"
                  ? "Serif"
                  : "Mono"}
              </p>
              <img src={arrow} alt="arrow_down" onClick={menuChange} />
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
              <input
                type="range"
                id="slider"
                name="slider"
                min="1"
                max="2"
                step="1"
                value={range}
                onChange={handleChange}
                className="w-[40px] themeRange rangeThumb bg-grey dark:bg-darkPur"
              />
              <img src={themeImg} alt="theme_logo" className="w-[25px]" />
            </div>
          </div>
        </div>
        <div className="mt-[35px] max-w-[920px] mx-auto ">
          <Search />
        </div>
        <div className="flex justify-between items-center mt-[20px] md:mt-[30px] lg:mt-[35px] max-w-[920px] mx-auto mb-[30px]">
          <div>
            <MainWord />
            <Trans />
            <Trans />
          </div>
          <Audio />
        </div>
        <div className="max-w-[920px] mx-auto mb-[28px]">
          <Noun />
          <Verb />
        </div>
        <hr className="w-full max-w-[920px] mx-auto h-[1px] bg-input border-none" />
        <div className="flex mt-[20px] flex-wrap mb-[70px] items-start max-w-[920px] mx-auto">
          <h4 className="whitespace-nowrap text-[14px] text-grey font-[400] mr-[20px]">
            Source :
          </h4>
          <div className="flex items-center">
            <a
              id="ftlnk"
              className="text-[14px] font-bold  mr-[5px] text-grey "
              href="https://en.wiktionary.org/wiki/keyboard"
            >
              https://en.wiktionary.org/wiki/keyboard
            </a>
            <img src={elink} alt="link" className="w-[17px]" />
          </div>
        </div>
      </div>
    </>
  );
}

function Search() {
  return (
    <div>
      <form className="w-full relative">
        <input
          id="search"
          autoComplete="off"
          type="text"
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

function MainWord() {
  return (
    <div className="mb-[10px]">
      <h1 className="text-left block font-bold text-black dark:text-white text-[32px] md:text-[45px] lg:text-[60px]">
        Keyboard
      </h1>
    </div>
  );
}

function Trans() {
  const text = "/ˈkiːbɔːd/";
  return (
    <div className="text-left">
      <p className="text-darkPur text-[18px] md:text-[19px]">{text}</p>
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

function Noun() {
  return (
    <div>
      <div className="flex w-full flex-row justify-between items-center mb-[34px]">
        <h4 className="text-black lowercase italic mr-[20px] dark:text-white text-[20px] font-bold">
          Noun
        </h4>
        <div className="w-full h-[1px] bg-input"></div>
      </div>
      <div>
        <h3 className="text-[17px] text-grey mb-[20px] font-[400] text-left">
          Meaning
        </h3>
        <ul className="ml-[2rem] list-none tlis">
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>
      <div className="flex gap-x-[20px] gap-y-[5px] mt-[40px] mb-[43px]">
        <h1 className="text-[17px] whitespace-nowrap  text-grey mb-[0px] font-[400] text-left">
          Synonyms :
        </h1>
        <div className="flex gap-x-[10px] gap-y-[0px] flex-wrap">
          <h4 className="text-darkPur font-bold">electronic keyboard</h4>
        </div>
      </div>
    </div>
  );
}
function Verb() {
  return (
    <div>
      <div className="flex w-full flex-row justify-between items-center mb-[34px]">
        <h4 className="text-black lowercase italic mr-[20px] dark:text-white text-[20px] font-bold">
          verb
        </h4>
        <div className="w-full h-[1px] bg-input"></div>
      </div>
      <div>
        <h3 className="text-[17px] text-grey mb-[20px] font-[400] text-left">
          Meaning
        </h3>
        <ul className="ml-[2rem] list-none tlis">
          <li>
            <p className="pb-[10px]">
              To type on a computer keyboard.<br/>
              <span className="text-[15px] text-grey font-medium mt-[10px]">{`"Keyboarding is the part of this job I hate the most."`}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
