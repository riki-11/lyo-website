// Maybe can create different "archetypes" of page sections? 
// One with image on left, one with image on right, etc.

import { GreenHomeSectionBtn } from "./home-section-btn";


export function LeftHomeSection({info}) {

  console.log(`Color: ${info.bgColor}`);

  // Make this a global variable then just append the according bgColor?
  const CLASSES = `${info.bgColor} p-5 flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:p-16 space-y-7 lg:space-y-0`;

  return (
    <div className={CLASSES}>
      <div className="flex flex-col space-y-5 lg:w-1/2">
        <h2 className="font-body text-lyo-darkgreen text-5xl text-center lg:text-6xl lg:text-start">{info.title}</h2>
        <p className="font-body text-lyo-darkgreen text-xl md:text-2xl" >{info.text}</p>
        {/** This GreenHomeSectionBtn is not exactly reusable */}
        <GreenHomeSectionBtn text="Learn about FamiLYO" transparentColor="bg-lyo-cream" hoverTextColor="text-lyo-cream"/>
      </div>
      {/** How do I make it so that both divs have the same height regardless of the content inside? */}
      <div className="lg:flex lg:justify-center items-center lg:w-1/2">
        <img src={info.img_1} className="rounded-80 p-5 drop-shadow-2xl max-w-2xl w-full"/>
      </div>
    </div>
  );
};

export function RightHomeSection({info}) {
  return (
    <div className={bgColor}>
      {text}
    </div>
  );
};

