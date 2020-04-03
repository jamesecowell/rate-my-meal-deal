import React from 'react';
import './App.css';
import Header from './components/Header';
import CategoryChoice from './components/CategoryChoice';

class App extends React.Component {
  state = {
    selectedCategory: '',
    category: 'mains',
    showCategoryChoice: true,
    showImages: false,
    categoryChoices: {
      mains: ['Sandwiches', 'Sushi', 'Salad'],
      snacks: ['Crips', 'Chocolate'],
      drinks: ['Still', 'Fizzy'],
    },
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
    userScores: [],
  };

  render() {
    const category = this.state.category;
    const categoryChoices = this.state.categoryChoices[this.state.category];

    let display;

    if (this.state.showCategoryChoice) {
      display = (
        <CategoryChoice category={category} choices={categoryChoices} />
      );
    }

    return (
      <div className="App">
        <Header />
        {display}
      </div>
    );
  }
}

export default App;
