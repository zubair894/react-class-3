import React from 'react';
function Students(props) {
  return(
      <div className="app">
    <h1 className="heading"><strong>Students Information</strong>
    </h1>
    <ol>
      <li>My Name is <strong>{props.Name}</strong></li>
      <li>my father name is <strong>{props.fatherName}</strong></li>
      <li>i am <strong>{props.age}</strong> years old   </li>
      <li>i am learning <strong> {props.course}</strong></li>

      </ol>
   
        <h1>I am render by child element which is student.js</h1>
        </div>
    )
  
}


export default Students;