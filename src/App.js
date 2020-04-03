import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  state = {
    selectedCategory: '',
    mains: {
      sandwiches: [],
      sushi: [],
      salad: [],
    },
    snacks: {
      crisps: [],
      chocolate: [],
    },
    drinks: {
      still: [],
      fizzy: [],
    },
    userScores: [];
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
