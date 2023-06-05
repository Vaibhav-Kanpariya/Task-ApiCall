import axios from "axios"
const LocationAPI = (props) => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${props.cityName}&limit=7&appid=b03058582c77e34b356c79ea8b8764a1`).then((res) => {
        props.setCityData({ lat: res.city.coord.lat, lon: res.city.coord.lon })
    }).catch((error) => {
        console.log(error);
    })
}

export default LocationAPI