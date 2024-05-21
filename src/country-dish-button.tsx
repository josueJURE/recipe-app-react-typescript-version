import React from "react";

interface IProps {
  country_name: string;
  origin: string;

}

// enum EnumSatus {
//     active = 1,
//     disabled = -1,
//     deleted = -2,
// }

const CountryDishButton: React.FC<IProps> = ( props) => {
  const selectCountry = () => {
    console.log(props.country_name)
    // console.log("country", country, EnumSatus.deleted);
  };

  return (
    <button
      onClick={selectCountry}
      className="recipe-button"
      name={props.country_name}
      value={props.origin}
    >
      {props.country_name}
    </button>
  );
};

export default CountryDishButton;
