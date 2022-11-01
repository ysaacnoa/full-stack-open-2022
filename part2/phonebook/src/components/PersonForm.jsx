import React from 'react'

export const PersonForm = ({addPerson, name, number,handleChangeName,handleChangeNumber}) => {
  console.log(addPerson.addPerson);
  return ( 
    <form onSubmit={addPerson}>
        <div>
					Name: <input 
					value={name}
					onChange={handleChangeName}
					/>
				</div>
				<div>
					Number: <input
					value={number}
					onChange={handleChangeNumber}
					/>
				</div>
				<div>
					<button >
						add
					</button>
				</div>
    </form>
  )
}
