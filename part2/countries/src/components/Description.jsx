import React,{useState} from 'react'
import axios from 'axios'

export const Description = ({country}) => {
  const [temperature, setTemperature] = useState([])
  const [wheater, setWheater] = useState([])
  const [windSpeed, setWindSpeed] = useState([])
  const [windDirection, setWindDirection] = useState([])

  axios.get(
    `http://api.weatherstack.com/current?access_key=a5e72c2690fac1483ee3634ba80eb6fc&query=${country.capital[0]}`
  ).then(
    response=>
      ((setTemperature(response.data.current.temperature),
      setWheater(response.data.current.weather_icons),
      setWindSpeed(response.data.current.wind_speed),
      setWindDirection(response.data.current.wind_dir)
      ))
    )
  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population:  {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map(language=>(<li key={language}>{language}</li>))}
      </ul>
      <img 
      src={country.flags.svg} 
      alt={country.name} 
      width="300px"
      />
      <h1>Wheater on {country.capital[0]}</h1>
      <p><strong>Temperature:</strong> {temperature}</p>
      <img 
      src={wheater} 
      alt={country.capital[0]}
      />
      <p><strong>Wind: </strong>{windSpeed} mph direction {windDirection}</p>
    </>
  )
}
