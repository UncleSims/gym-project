import React from "react";
import Icon from "../assets/icons/gym.png";

const Card = ({item, bodyPart, setBodyPart}) => {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-y-4 scale-100 transition-all ease-in-out hover:scale-125 ${
        bodyPart === item ? "hover:border-t-4 hover:border-t-[rgb(255,38,37)] border-t-4 border-t-[rgb(255,38,37)]" : ""
      } bg-white w-40 h-40 rounded-bl-[20px] md:w-[200px] md:h-[200px] p-3 md:p-6 inline-block`}
      onClick={() => {setBodyPart(item)
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img
        src={Icon}
        alt="dumbell"
        className={`${
          bodyPart === item
            ? "bg-white"
            : ""
        }w-10 h-10`}
      />
      <h3 className="text-xl font-bold text-[#3A1212] capitalize">{item}</h3>
    </button>

  );
};

export default Card;
