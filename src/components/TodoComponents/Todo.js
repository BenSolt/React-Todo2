import React from 'react';

const Todo = props => {
  return (
    <div
      className={`item${props.item1.purchased ? ' purchased' : ''}`}
      onClick={() => props.togglePurchased(props.item1.id)}
    >
      <p>{props.item1.name}</p>
    </div>
  );
};

export default Todo;