import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: 'aaaa',
        content: 'bbbb'
    },
    {
        title: 'cccc',
        content: 'dddd'
    },
    {
        title: 'eeee',
        content: 'fffff'
    },
];

const colors = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
];

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
];

const App = () => {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <div>
            <Translate languages={languages}/>
        </div>
    );
}

export default App;