import React, { useEffect, useState } from "react";
import { ExerciseOptions, fetchData } from "../utils/fetchData";

import BodyCategory from "./BodyCategory";

const SearchExercises = ({
  exercises,
  bodyPart,
  setBodyPart,
  setExercises,
}) => {
  const [search, setSearch] = useState("");

  const [bodyCategories, setBodyCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const specificPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExerciseOptions
      );
      setBodyCategories(["all", ...specificPartsData]);
    };
    fetchCategoriesData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <section className="flex flex-col w-full pt-10 pl-0 gap-y-5">
      {exercises.length > 0 ? (
        <>
          {" "}
          <div className="flex justify-center">
            <h2 className="font-bold text-3xl lg:text-[40px]">
              Awesome Exercises for you
            </h2>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="w-8/12 h-10 pl-5 border rounded-tl-lg rounded-bl-lg border-r-0 placeholder:italic placeholder:text-slate-400 focus:outline-none"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
              placeholder="Search Exercises"
            />
            <button
              onClick={handleSearch}
              className="w-20 lg:w-1/12 border rounded-br-lg rounded-tr-lg bg-[#F74527] text-white text-md lg:text-xl"
            >
              Search
            </button>
          </div>
          <BodyCategory
            data={bodyCategories}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default SearchExercises;
