import React,{useState, useEffect} from 'react'
import { Description } from './Description'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [showcountry, setShowCountry] = useState({})
  
  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response=>setCountries(response.data.map(({name,capital, population, languages, flags})=>({
          name: name.common, 
          capital, 
          population,
          languages,
          flags,
        }
        ))
      ))
  },[])

  const filteredCountries = countries.filter(country=>country.name.toLowerCase().includes(query));

  const handleChange = e => {
    setQuery(e.target.value)
    setShowCountry({})
  };

  const handleShow= name => () =>{
    /*Demostrate what the parameter name its equaly of country.name*/
    console.log(name);
    setShowCountry(filteredCountries.filter(country=>country.name.includes(name))[0])
  }
  
  return (
    <>
      <h1>Paises</h1>
      <h2>Filtro de busqueda</h2>
      <input
      value={query}
      onChange={handleChange}
      />
      <br/><br/>
      {filteredCountries.length>10 && <div>Too Many matches, please specify another filter</div>}
      {filteredCountries.length<=10 &&
      filteredCountries.length>1 &&
      filteredCountries.map(
        country=>(
        <>
        <div key={country.name}>
          {country.name}
          <button onClick={handleShow(country.name)}>
            show
          </button>
        </div>
        </>
        )
      )}
      {filteredCountries.length === 1 && 
        (<Description country={filteredCountries[0]}/>)
      }
      
      {/*Can use this condition because always is true*/ }
      {showcountry.name && <Description country={showcountry}/>}
      
    </> 
  )
}

export default App;