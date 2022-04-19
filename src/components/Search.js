import React, {useState, useEffect} from "react";
import axios, {Axios} from "axios";

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('https://cs.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
        };
        search();
    }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter searched term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;