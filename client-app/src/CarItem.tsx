import React from "react";
import { Icar, cars } from "./demo";

interface IProps {
  Car: Icar;
}
export const CarItem: React.FC<IProps> = ({ Car }) => {
  return (
    <div>
      <h1>{Car.color}</h1>
    </div>
  );
};
