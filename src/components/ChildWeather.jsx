import { useState, useEffect } from 'react'

export const ChildWeather = ({ weatherInfo }) => {
    const [weatherCase, setWeatherCase] = useState('');
    const {
        temp,
        pressure,
        humidity,
        weatherCondition,
        name,
        speed,
        country,
        sunset,
    } = weatherInfo

    useEffect(() => {
        if (weatherCondition) {
            switch (weatherCondition) {
                case "Clouds":
                    setWeatherCase("fas fa-cloud-sun");
                    break;
                case "Smoke":
                    setWeatherCase('fas fa-smog');
                    break;
                case "Clear":
                    setWeatherCase('fas fa-cloud-sun-rain');
                    break;
                case "Clouds":
                    setWeatherCase('fas fa-cloud-sun');
                    break;
                default:
                    setWeatherCase('fas fa-cloud');
                    break;
            }
        }
    }, [weatherCondition])

    // Converting time :---->
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeString = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <div className="clouds-degree">
                <h1 className="weatherIcon">
                    <i className={`fas ${weatherCase}`} ></i>
                </h1>

                <h1 className="temperature">
                    <span>{temp}&deg;</span>
                </h1>
            </div>
            <div className="content">
                <div className="description">
                    <div className="weatherCondition">
                        {weatherCondition}
                    </div>
                    <h2 className="city">
                        {name}, {country}
                    </h2>
                </div>

                <div className="date">
                    {new Date().toLocaleString()}
                </div>

                <div className="sunset">
                    sunset: {timeString}pm
                </div>

                <div className="humidity">
                    humidity:{humidity}
                </div>

                <div className="pressure">
                    pressure:{pressure}
                </div>

                <div className="speed">
                    speed: {speed}
                </div>
            </div>
        </>
    )
}
