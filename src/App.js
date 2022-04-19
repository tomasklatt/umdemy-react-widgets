import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const App = () => {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <div>
            <Dropdown options={colors} selected={selected} onSelectedChanged={setSelected}/>
        </div>
    );
}

export default App;