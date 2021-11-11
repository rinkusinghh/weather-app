import { useState, useEffect } from 'react'
import { ChildWeather } from './ChildWeather';
import './Weather.css';

export const Weather = () => {

    const [ search, setSearch ] = useState('delhi');
    const [ weatherInfo, setWeatherInfo ] = useState('');

    // https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=b31e89e94a800f8d68e7b07027a1c3a2
    
    const getWeatherData = async () => {

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b31e89e94a800f8d68e7b07027a1c3a2`);

            const data = await response.json();
            const { temp, pressure, humidity } = data.main;
            const { main: weatherCondition } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myWeatherInfo = {
                temp,
                pressure, 
                humidity,
                weatherCondition,
                name,
                speed,
                country,
                sunset,
            };

            setWeatherInfo(myWeatherInfo);

            
        } catch (error) {
            console.error(error);
        }
       
    }
    
    useEffect(() => {

        getWeatherData();
    }, [])
    
    // const onPushButton = () => {

    // }

    return (
        <>

        <div className="card-container">
                <div className="search">
                    <input
                        type="search"
                        id="search"
                        className="search-bar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value) }
                        placeholder="Type here to search"
                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeatherData}
                    >
                    <i class="fas fa-search"></i>
                    </button>
                </div>
                <div className="weather">
                    <ChildWeather weatherInfo={ weatherInfo } />
                </div>
            </div>
           
        </>
    )
}
