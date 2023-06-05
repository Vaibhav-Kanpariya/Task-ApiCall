import React, { useState } from 'react'
import axios from 'axios';
import WeatherData from './WeatherData';

const Home = () => {
    const [cityName, setcityName] = useState("");
    const [cityData, setCityData] = useState({ lat: "", lon: "" })
    const [data, setData] = useState([])
    const handleCityName = (e) => {
        setcityName(e.target.value);
    }
    const handleLocation = async () => {
        console.log(cityName);
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=7&appid=b03058582c77e34b356c79ea8b8764a1`).then((result) => {
            setCityData({ lat: result.data[1].lat, lon: result.data[1].lon })
            console.log(cityData);
        }).catch((error) => {
            console.log(error);
        })
        await axios.get(`https://api.weatherapi.com/v1/current.json?key=42243d28265c4a4d99a70803230506&q=${cityName}&days=7`).then((result) => {
            setData(result.data.current.temp_c);
            console.log(result.data.current.temp_c);
        }).catch((err) => {
            console.log(err);
        })
    }
    setInterval(() => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=42243d28265c4a4d99a70803230506&q=${cityName}&days=7`).then((result) => {
            setData(result.data.current.temp_c);
            console.log(result.data.current.temp_c);
        }).catch((err) => {
            console.log(err);
        })
    }, 20000)
    // setInterval(async () => {
    //     await axios.get(`api.weatherapi.com/v1/current.json?key=42243d28265c4a4d99a70803230506&q=${cityName}`).then((result) => {
    //         // setData(result);
    //         console.log(result);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, 2000)
    // useEffect(() => {
    //     axios.get(`https://api.weatherapi.com/v1/current.json?key=42243d28265c4a4d99a70803230506&q=surat`).then((result) => {
    //         // setData(result);
    //         console.log(result);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, [])

    return (
        <div>
            <div>
                <input placeholder='Enter City name' value={cityName} onChange={handleCityName} />
                <button onClick={handleLocation}>Go</button>
            </div>
            <div>
                <WeatherData temp={data} />
            </div>
        </div>
    )
}

export default Home