import React, {useState} from "react";

interface IProps {

}

const CheckboxElements: React.FC<IProps> = () => {
    const [isChecked, setisChecked] = useState(false);

    const handleChekboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setisChecked(event.target.checked);
        console.log(event.target.checked)
    }
   

    return (
        <input
        type="checkbox"
        id="lactose-intolerant"
        className="dietary-requirements"
        name="is_lactose_intolerant"
        checked={isChecked}
        onChange={handleChekboxChange}
      />
    )

}


export default CheckboxElements