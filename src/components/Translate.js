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
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter text</label>
                    <input onChange={(e) => setText(e.target.value)} value={text}></input>
                </div>
            </div>
            <Dropdown options={languages} selected={selected} objectOfSelecting={'language'} onSelectedChanged={setSelected}/>
        </div>
    );
}

export default Translate;