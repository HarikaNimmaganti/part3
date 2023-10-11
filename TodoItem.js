import React from 'react';

function TodoItem({ todo, onToggle }) {
  return (
    <li className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id)} 
      />
      <span>{todo.title}</span>
    </li>
  );
}

export default TodoItem;
