import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://love-calculator.p.rapidapi.com/getPercentage')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {
      
      return (
        <div className="App">

          <ul>
            {items.map(item => (
              <li key={item.id}>
                First Name: {item.fname} | Last Name: {item.sname}
              </li>
            ))};
          </ul>

        </div>
      );
    }
  }
}

export default App;
