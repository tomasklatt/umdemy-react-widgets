import React, {useState, useEffect} from "react";

const Convert = ({ languageCode, text}) => {
    useEffect(() => {
        console.log(`${languageCode} - ${text}`)
    }, [languageCode, text]);

    return (
        <div>{text}</div>
    );
}

export default Convert;