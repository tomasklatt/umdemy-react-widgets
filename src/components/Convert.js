import React, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({ languageCode, text}) => {
    useEffect(() => {
        console.log(`${languageCode} - ${text}`)
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: languageCode,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
    }, [languageCode, text]);

    return (
        <div>{text}</div>
    );
}

export default Convert;