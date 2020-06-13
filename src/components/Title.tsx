import React from 'react';

const Title = (props: any) => {
  const { today } = props;
  return (
    <header className="title">
      <h1>The daily Grind</h1>
      <h3 className="red">
        {today}
        <i className="fas fa-calendar-times" />
      </h3>
    </header>
  );
};
export default Title;
