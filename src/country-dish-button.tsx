import React from "react";
import { generateCountryRecipe } from "./api-calls";

interface IProps {
  country_name: string;
  origin: string;
  selectCountry: () => void;
}

const CountryDishButton: React.FC<IProps> = (props) => {
  return (
    <button
      onClick={props.selectCountry}
      className="recipe-button"
      name={props.country_name}
      value={props.origin}
    >
      {props.country_name}
    </button>
  );
};

export default CountryDishButton;
