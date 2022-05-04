import React, {useEffect, useRef, useState} from "react";

const Dropdown =  ( {options, selected, onSelectedChanged}) => {
    const [active, setActive] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setActive(false);
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const values = options.map(( option) => {
        if(option.value === selected.value){
            return null;
        }
        return <div key={option.value} className="item" onClick={() => {onSelectedChanged(option)}}>{option.label}</div>
    });
    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">Select a color</label>
                <div
                    onClick={() => setActive(!active)}
                    className={`ui selection dropdown${active ? ' visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">
                        {selected.label}
                    </div>
                    <div className={`menu ${active ? ' transition visible' : ''}`}>
                        {values}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;