import React, { useState } from "react";

interface IProps {
  id: string | undefined;
  name: string | undefined;
}

const CheckboxElements: React.FC<IProps> = (props) => {
  const [isChecked, setisChecked] = useState(false);

  const handleChekboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setisChecked(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        className="dietary-requirements"
        name={props.name}
        checked={isChecked}
        onChange={handleChekboxChange}
      />
      {props.name === "has_other_dietary_requirements" && (
        <input
          id="user-text"
          type="text"
          className={`dietary-requirements ${isChecked ? "on" : "off"}`}
          value=""
          name="what_are_user_other_dietary_requirements"
          placeholder="I don't eat:"
          disabled={!isChecked}
        />
      )}
    </>
  );
};

export default CheckboxElements;
