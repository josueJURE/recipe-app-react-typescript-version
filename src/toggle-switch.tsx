import React, {useState} from "react";
var Toggle = require('react-toggle')

interface IProps {
    id: string | undefined;
}


const ToggleSwitch: React.FC<IProps> = (props) => {
    const [isToggled, setisToggled] = useState(false);

    

    const handleToggle = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
      }) => {
        // setisToggled(event.target.checked);
        console.log(event.target.checked);

      };

      
      const toggle = (event: any) => {
        // setisToggled(event.target.checked);
        console.log(event);

      };



    return (
      <>
          <div className="switch"
           onClick={toggle}>
      
            <input type="checkbox" 
            checked={isToggled}
            id={props.id}

           
        className="dark-light-button" />
        <span className="slider round"></span> 
       
    
      </div>

      </>
        
    
    
    

    )
}

export default ToggleSwitch;