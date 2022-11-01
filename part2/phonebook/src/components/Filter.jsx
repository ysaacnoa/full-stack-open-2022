import React from 'react'

export const Filter = ({query, setFilter}) => {
  return (
    <p>
        filter shown with 
			<input 
			value={query} 
			onChange={setFilter}
			/>
		</p>
  )
}
