import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  console.log(exerciseVideos);
  return (
    <section className="flex flex-col items-center gap-y-7">
      <h4 className="mt-12 text-2xl px-4 md:px-0  md:text-3xl font-bold">
        Watch similar <span className="text-red-600">{name}</span> videos
      </h4>
      <div className="flex flex-col lg:flex-row flex-wrap gap-x-10 gap-y-6 justify-start lg:items-center ">
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="flex flex-col w-11/12 justify-center lg:justify-start lg:w-[387px] no-underline"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-2xl"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <h2 className="mt-4 ml-3 md:ml-0 font-medium text-black">{item.video.title}</h2>
            <h2 className="mt-2 ml-3 md:ml:0 text-sm font-medium text-black">
              {item.video.channelName}
            </h2>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExerciseVideos;
