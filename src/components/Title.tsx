import React from 'react';

const Title = (props: any) => {
  const { today } = props;
  return (
    <header className="title">
      <h1 className="red">
        <i className="fas fa-arrow-left space-between"></i>
        {today}
        <i className="fas fa-calendar-times" />
        <i className="fas fa-arrow-right space-between"></i>
      </h1>
      <h3>The daily Grind</h3>
    </header>
  );
};
export default Title;
