import React from 'react'

const Header=({header})=> <h2>{header}</h2>

const Part=({part})=> <p> {part.name} {part.exercises}</p>

const Content=({parts})=> {
  return(
    <div>
      {parts.map(part=>(
        <Part key={part.id} part={part}/>
      )
      )}
    </div>
    
  );
} 
const Total=({parts})=> {
  return(
    <>
    <p>
        <strong>
            Number of exercises {parts.reduce(
            (sum,parts)=>sum+parts.exercises
            ,0)}
        </strong> 
    </p>
    </>
    
  )}

export const Course=({course})=>{
  return(
    <>
    <Header header={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </>
  )
}
