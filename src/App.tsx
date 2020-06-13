import React from 'react';

import Title from './components/Title';
import List from './components/List';
import Options from './components/Options';

import listOfOptions from './options.json';

import './style.css';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface IProps {}
interface IState {
  options: any;
  todaysDate: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      options: {},
      todaysDate: '',
    };
  }

  componentDidMount() {
    this.setState(() => ({
      options: listOfOptions,
    }));
    const today = new Date();
    const currentDay = today.getDate();
    const currentWeekDay = days[today.getDay()];
    const currentMonth = months[today.getMonth()];
    const title = `${currentWeekDay}, ${currentMonth} ${currentDay} `;

    this.setState(() => ({ todaysDate: title }));
  }

  toggleChecked = (target: String) => {
    const { options: newOptions } = this.state;
    for (let i = 0; i < newOptions.options.length; i++) {
      Object.keys(newOptions.options[i]).forEach((key: any) => {
        if (key === target) {
          newOptions.options[i][key] = !newOptions.options[i][key];
        }
      });
    }

    this.setState(() => ({ options: newOptions }));
  };

  render() {
    const { todaysDate, options } = this.state;
    return (
      <div className="App">
        <Title today={todaysDate} />
        {/* <Options /> */}
        <List list={options} handleClick={this.toggleChecked} />
      </div>
    );
  }
}

export default App;
