import React from 'react'
import "../App.css"
const WeatherData = (props) => {
    return (
        <div className='Container'>
            <p>Tempreature</p>
            <p>{props.temp}</p>
        </div>
    )
}

export default WeatherData