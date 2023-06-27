import React, { useState } from "react";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import bgHero from "../assets/images/bg-hero.jpg";
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <main>
      <div
        className="bg-cover bg-center   pt-5 h-screen  m-auto"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <Navbar />
        <HeroBanner />
      </div>

      <SearchExercises
        exercises={exercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </main>
  );
};

export default Home;
