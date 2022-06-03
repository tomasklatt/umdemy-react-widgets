//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

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
    {
        label: 'English',
        value: 'en'
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
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} languageCode={selected.value}/>
        </div>
    );
}

export default Translate;