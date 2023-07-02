import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraInfo = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];
  return (
    <section className="flex flex-col lg:flex-row p-5 items-center">
      <div className="w-screen h-[70%] lg:w-7/12 lg:h-[742px]">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-scale-down lg:object-contain "
        />
      </div>

      <div className="flex flex-col space-y-10 ml-6 mb-10">
        {" "}
        <div>
          <h3 className="text-3xl font-bold mb-5 capitalize">{name}</h3>
          <h3 className="mt-3 font-light">
            Working out keeps you fit and healthy. {` `} {name}
            is one of the many <br />
            exercises to target your {target}. it will help you feel great and
            gain energy
          </h3>
        </div>
        {extraInfo.map((item) => (
          <div
            key={item.name}
            className="flex items-center space-x-10 capitalize font-medium text-lg"
          >
            <div className=" bg-[#fff2db] w-20 h-20 rounded-full flex items-center justify-center">
              <img src={item.icon} alt="" />
            </div>

            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
