import React, {useState} from "react";
import Dropdown from "./Dropdown";

const languages = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Czech',
        value: 'cs'
    },
];

const Translate =  () => {
    const [selected, setSelected] = useState(languages[0]);

    return (
        <div>
            <Dropdown options={languages} selected={selected} objectOfSelecting={'language'} onSelectedChanged={setSelected}/>
        </div>
    );
}

export default Translate;