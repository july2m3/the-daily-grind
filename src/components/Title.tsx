import React from 'react';

const Title = (props: any) => {
  const { today } = props;
  return (
    <header className='title'>
      <h1>☕The Daily Grind☕</h1>
      <h3 className='red'>
        {today}
      </h3>
    </header>
  );
};
export default Title;
