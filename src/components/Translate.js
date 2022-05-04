import React from "react";
import Dropdown from "./Dropdown";

const Translate =  ({ languages }) => {
    return (
        <div>
            <Dropdown options={languages} selected={languages[0]} objectOfSelecting={'language'}/>
        </div>
    );
}

export default Translate;