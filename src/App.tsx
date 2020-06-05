import React from 'react';

import Title from './components/Title';
import List from './components/List';
import Options from './components/Options';

import listOfOptions from './options.json';

import './style.css';

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


interface IProps {}
interface IState {
  options: any;
  todaysDate : string;
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

    this.setState( () => ({todaysDate : title}));
  }
//eslint test
  render() {
    const {todaysDate, options} = this.state;
    return (
      <div className="App">
        <Title today={todaysDate} />
        <Options />
        <List listOfOptions={options} />
      </div>
    );
  }
}

export default App;
