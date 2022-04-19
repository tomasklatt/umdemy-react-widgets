import React from 'react';
import Accordion from "./components/Accordion";

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

const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}

export default App;