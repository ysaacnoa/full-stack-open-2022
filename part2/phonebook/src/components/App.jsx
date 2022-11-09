import React,{useState, useEffect} from 'react'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'
import { Persons } from './Persons'
import axios from 'axios'

const App = () => {
	const [persons, setPersons] = useState([])

	useEffect(() => {
	  console.log('insertando datos');
		axios
			.get('http://localhost:3001/persons')
			.then(persons=>{
				console.log('rellenando array personas');
				setPersons(persons.data)
			})
	  }, [])
	

	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filterQuery, setFilterQuery] = useState('')


	const handleChange=(setValue)=>(event)=>setValue(event.target.value);
	
	const addPerson=(event)=>{
		event.preventDefault();
		if (persons.find(person=>person.name===newName)) {
			alert(`${newName} is already added to PhoneBook`)
		}else{
			const personObject={
				id: persons.length+1,
				name: newName, 
				number:newNumber}
			setPersons(persons.concat(personObject));
			setNewName('');
			setNewNumber('')
		}
		
	}
	return (
	<>
		<h2>PhoneBook</h2>
		<Filter 
		query={filterQuery} 
		setFilter={handleChange(setFilterQuery)}
		/>
		<h2>Add to Number</h2>
		<PersonForm 
		addPerson={addPerson} 
		name={newName} 
		number={newNumber} 
		handleChangeName={handleChange(setNewName)} 
		handleChangeNumber={handleChange(setNewNumber)}
		/>
		<h2>Numbers</h2>
		<Persons 
		persons={persons} 
		filterQuery={filterQuery}
		/>
	</>
	)
}

export default App;
