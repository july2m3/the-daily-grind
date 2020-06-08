import React from 'react';

import ListItem from './ListItem';

function List(props: any) {
  const { list, handleClick } = props;
  const listItems = list.options ? list.options.map((eachItem:any) => <ListItem item={eachItem} key={eachItem.title} handleClick={handleClick} />) : null;

  return (
    <div className='list'>
      {listItems}
    </div>
  );
}

export default List;
