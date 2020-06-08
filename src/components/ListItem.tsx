/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const ListItem = (props:any) => {
  const { item, handleClick } = props;
  const itemsToDisplay : any[] = [];

  Object.keys(item).forEach((key) => {
    if (key !== 'title') {
      itemsToDisplay.push(`${key}`);
    }
  });

  const listOfTasks = !itemsToDisplay ? null :
    itemsToDisplay.map((i:any) => (
      <li
        key={i}
        className='tasks'
        onClick={() => {
          handleClick(i);
        }}
      >
        <i className={item[i] ? ' fa fa-check-square' : 'far fa-square'} />
        {i}
      </li>
    ));
  return (
    <>
      <li className='list-titles'>
        {item.title}
        {' '}
        <i className='fas fa-caret-right' />
      </li>
      {listOfTasks}
    </>
  );
};


export default ListItem;
