import React from "react";
import { Link } from "react-router-dom";

const ExerciseCards = ({ exercise }) => {
  return (
    <Link
      className="flex justify-between flex-col pb-2.5 scale-100 transition-all ease-in-out hover:scale-125  w-11/12 h-[430px] bg-white border-t-4 border-t-[rgb(255,38,37)] rounded-bl-md"
      to={`/exercise/${exercise.id}`}
    >
      <div className=" relative h-[326px]">
        <img
          className="h-full object-cover w-screen"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
        />
      </div>

      <div className="flex ">
        <button className="ml-5 p-2 bg-[#ffa9a9] text-sm rounded-2xl capitalize text-white ">
          {exercise.bodyPart}
        </button>
        <button className="ml-5 p-2 bg-[#fcc757] text-sm rounded-2xl capitalize text-white ">
          {exercise.target}
        </button>
      </div>
      <h3 className="ml-5 text-[#000] font-bold mt-2.5 pb-2.5 capitalize">
        {exercise.name}
      </h3>
    </Link>
  );
};

export default ExerciseCards;
