import React from 'react';
import './App.css';
import Header from './components/Header';
import CategoryChoice from './components/CategoryChoice';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = {
    selectedCategory: 'sandwiches',
    category: 'mains',
    showCategoryChoice: false,
    showImages: true,
    categoryChoices: {
      mains: ['Sandwiches', 'Sushi', 'Salad'],
      snacks: ['Crips', 'Chocolate'],
      drinks: ['Still', 'Fizzy'],
    },
    categoryData: {
      mains: {
        sandwiches: [
          {
            sndName: 'Just Ham',
            sndImg:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/c51234ca-93e9-4efb-b394-e8776904b8e8/9a63e37a-d94f-49fc-bc2f-ef164664826e.jpeg?h=540&w=540',
            sndRating: 1,
          },
          {
            smdName: 'Cheese & Onion',
            sndImg:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/e54568da-3f60-4311-99ab-daba08ab8de3/beb53c1c-4a7d-446e-8cff-62ff767c995a.jpeg?h=540&w=540',
            sndRating: 5,
          },
          {
            sndName: 'Deli Meat Feast',
            sndImg:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/9089e960-6e89-4d99-b904-105dfdf3eb05/ca1817f3-77e1-4658-b2eb-1d2a4fad093a.jpeg?h=540&w=540',
            sndRating: 8,
          },
        ],
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
    },
    userScores: [],
  };

  render() {
    let display;

    const category = this.state.category;
    const categoryChoices = this.state.categoryChoices[this.state.category];
    const selectedCategory = this.state.selectedCategory;

    if (this.state.showCategoryChoice) {
      display = (
        <CategoryChoice category={category} choices={categoryChoices} />
      );
    } else if (this.state.showImages) {
      const images = this.state.categoryData[category][selectedCategory];
      display = <ImageList images={images} />;
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
