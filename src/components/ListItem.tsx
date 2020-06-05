import React from 'react';

const ListItem = (props:any) => {
  const { item } = props;
  const itemsToDisplay : any[] = [];

  Object.keys(item).forEach((key) => {
    if (key !== 'title') {
      itemsToDisplay.push(`${key}`);
    }
  });

  const listOfTasks = itemsToDisplay ? itemsToDisplay.map((i:any) => <li key={i} className="tasks">{i} <i className="fas fa-times-circle"></i></li>): null;

  return (
    <>
      <li className='list-titles'>{item.title} <i className="fas fa-caret-right"></i></li>
      {listOfTasks}
    </>
  )};


export default ListItem;
