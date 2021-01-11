import React from 'react';

export const TodoItem = ({text}) => {
  return(
    <li className='todo_item'>
      {text}
    </li>
  )
}
