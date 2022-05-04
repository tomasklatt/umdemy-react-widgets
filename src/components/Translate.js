import React, {useState} from "react";
import Dropdown from "./Dropdown";

const Translate =  ({ languages }) => {
    const [selected, setSelected] = useState(languages[0]);

    return (
        <div>
            <Dropdown options={languages} selected={selected} objectOfSelecting={'language'} onSelectedChanged={setSelected}/>
        </div>
    );
}

export default Translate;