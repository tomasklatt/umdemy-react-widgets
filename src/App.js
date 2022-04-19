import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
            <Search/>
        </div>
    );
}

export default App;