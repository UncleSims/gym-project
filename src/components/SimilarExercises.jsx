import React from "react";
import HorizontalScroll from './HorizontalScroll'

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <section className="mt-10 lg:mt-[100px] text-3xl font-bold  ">
      <h2>Other Exercises that target the same muscle group</h2>
      <div className="flex ">{targetMuscleExercises.length && <HorizontalScroll data={targetMuscleExercises} /> }</div>
    </section>
  );
};

export default SimilarExercises;
