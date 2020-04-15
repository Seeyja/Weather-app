import React from 'react';
import './Form.scss';

const Form = props => {
    return (
        <div className="search-city">
            <input className="search-city__input"
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="Wpisz miasto"
            />
        </div>
    )
}

export default Form