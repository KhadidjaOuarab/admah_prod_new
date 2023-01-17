import React from "react";
import { Button } from "primereact/button";
function ButtonPrimeIcon({label,searchFunction,icon,classname}) {
  return (
    <div>
      <Button label={label} icon={icon} iconPos="left" onClick={searchFunction} className={classname}/>
    </div>
  );
}

export default ButtonPrimeIcon;
