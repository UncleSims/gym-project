import React from "react";
import HorizontalScroll from "./HorizontalScroll";

const BodyCategory = ({ data, bodyPart, setBodyPart }) => {
  return (
    <section className="w-full p-5">
      <HorizontalScroll
        data={data}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </section>
  );
};

export default BodyCategory;
