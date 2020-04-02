import React from 'react';
import './Result.scss'

const Result = props => {

    const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather;
    let content = null;

    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        content = (
            <>
                <h2 className="result__intro">Wyniki wyszukiwania dla <span className="result__parameter">{city} ({date}</span>)</h2>
                <p className="result__details">Temperatura: <span className="result__parameter">{temp} &#176;C</span></p>
                <p className="result__details">Wschód słońca: <span className="result__parameter">{sunriseTime}</span></p>
                <p className="result__details">Zachód słońca: <span className="result__parameter">{sunsetTime}</span></p>
                <p className="result__details">Siła wiatru: <span className="result__parameter">{wind} m/s</span></p>
                <p className="result__details">Ciśnienie: <span className="result__parameter">{pressure} hPa</span></p>
                <h2 style={{ marginTop: 20 }} className="result__intro">Prognoza na najbliższe godziny</h2>
                <p className="result__details">Temperatura: <span className="result__parameter">{props.weather.forecast.temp} &#176;C</span></p>
            </>
        )

    }

    return (
        <section className="result">
            {err && city.length > 0 ? <h2 className="result__intro">Nie mamy w bazie {city}</h2> : content}
        </section>
    );
}

export default Result;