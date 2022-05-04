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
    const [text, setText] = useState('');

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} value={text}></input>
            <Dropdown options={languages} selected={selected} objectOfSelecting={'language'} onSelectedChanged={setSelected}/>
        </div>
    );
}

export default Translate;