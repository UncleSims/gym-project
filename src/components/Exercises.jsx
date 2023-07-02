import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { ExerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCards from "./ExerciseCards";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 12;
  const lastExercise = currentPage * exercisePerPage;
  const firstExercise = lastExercise - exercisePerPage;
  const currentExercises = exercises.slice(firstExercise, lastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          ExerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          ExerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <>
      {exercises.length > 0 && (
        <section id="exercises" className="w-screen mt-10 pl-5">
          <h2 className="text-3xl font-bold mb-10">Showing Results</h2>

          <div className="flex lg:gap-20 gap-10 flex-wrap justify-center">
            {currentExercises.map((exercise, index) => (
              <ExerciseCards key={index} exercise={exercise} />
            ))}
          </div>
          <div className="mt-[100px] flex justify-center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisePerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Exercises;
