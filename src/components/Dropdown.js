import React from "react";

const Dropdown =  ( {options}) => {
    const values = options.map(( {label, value}) => {
        return <div key={value} className="item">{label}</div>
    });
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">
                        Select Color
                    </div>
                    <div className="menu visible transition">
                        {values}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;