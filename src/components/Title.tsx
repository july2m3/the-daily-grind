import React from 'react';

const Title = (props: any) => {
  const { today } = props;
  return (
    <header className="title">
      <h1 className="red">
        {today}
        <i className="fas fa-calendar-times" />
      </h1>
      <h3>The daily Grind</h3>
    </header>
  );
};
export default Title;
