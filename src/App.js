import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const showAccordion = () => {
    if (window.location.pathname === '/'){
        return <Accordion items={items} />
    }
}

const showList = () => {
    if (window.location.pathname === '/list'){
        return <Search items={items} />
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown'){
        return <Dropdown  />
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate'){
        return <Translate />
    }
}

const App = () => {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search items={items} />
            </Route>
            <Route path="/dropdown">
                <Dropdown objectOfSelecting="color" selected={selected} onSelectedChanged={setSelected} options={colors}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;