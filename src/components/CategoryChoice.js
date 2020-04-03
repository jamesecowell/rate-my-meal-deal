import React from 'react';

const CategoryChoice = (props) => {
  console.dir(props);
  return (
    <div className="categoryChoice">
      <h2>{props.category}</h2>
      {props.choices.map((choice) => {
        return (
          <li key={choice}>
            <p>{choice}</p>
          </li>
        );
      })}
    </div>
  );
};

export default CategoryChoice;
