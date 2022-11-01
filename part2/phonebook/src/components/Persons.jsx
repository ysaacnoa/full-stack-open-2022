import React from 'react'

export const Persons = ({persons,filterQuery}) => {
  return (
    <ul>
			{persons
			.filter(person=>person.name.toLowerCase().includes(filterQuery))
			.map(person=><p key={person.id}>{person.name} {person.number}</p> )}  
		</ul>
  )
}
