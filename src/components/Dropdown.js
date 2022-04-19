import React from "react";

const Dropdown =  ( {options}) => {
    const values = options.map(( {label, value}) => {
        return <option value={value} key={value}>{label}</option>
    });
    return (
        <select id="Dropdown">{values}</select>
    );
}

export default Dropdown;