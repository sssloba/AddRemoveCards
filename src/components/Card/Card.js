import React from 'react';
import './Card.css';

const Card = (props) => (

      <div className="card" onClick={props.removeCard}>
        <span>Name: {props.item.name}</span>
        <span>Age: {props.item.age}</span>
        <span>Gender: {props.item.gender}</span>
      </div>
)

export {Card};