import React from "react";

interface IProps {
  country: string;
}

enum EnumSatus {
    active = 1,
    disabled = -1,
    deleted = -2,
}

const CountryDishButton: React.FC<IProps> = ({ country }) => {
  const selectCountry = () => {
    console.log("country", country, EnumSatus.deleted);
  };

  return (
    <button
      onClick={selectCountry}
      className="recipe-button"
      name="recipe_country_of_origin"
      value="china"
    >
      {country}
    </button>
  );
};

export default CountryDishButton;
