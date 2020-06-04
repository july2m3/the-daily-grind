import React from 'react';

import Title from './components/Title';
import List from './components/List';
import Options from './components/Options';

import listOfOptions from './options.json';

import './style.css';

interface IProps {}
interface IState {
  options: any;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      options: {},
    };
  }

  componentDidMount() {
    this.setState(() => ({
      options: listOfOptions,
    }));
  }

  render() {
    return (
      <div className="App">
        <Title today={'thu jun 04'} />
        <Options />
        <List listOfOptions={this.state.options} />
      </div>
    );
  }
}

export default App;
