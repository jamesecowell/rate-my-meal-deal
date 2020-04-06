import React from 'react';
import './App.css';
import Header from './components/Header';
import CategoryChoice from './components/CategoryChoice';
import ImageList from './components/ImageList';

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
    categoryData: {
      mains: {
        sandwiches: [
          {
            name: 'Just Ham',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/c51234ca-93e9-4efb-b394-e8776904b8e8/9a63e37a-d94f-49fc-bc2f-ef164664826e.jpeg?h=540&w=540',
            rating: 1,
          },
          {
            name: 'Cheese & Onion',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/e54568da-3f60-4311-99ab-daba08ab8de3/beb53c1c-4a7d-446e-8cff-62ff767c995a.jpeg?h=540&w=540',
            rating: 5,
          },
          {
            name: 'Deli Meat Feast',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/9089e960-6e89-4d99-b904-105dfdf3eb05/ca1817f3-77e1-4658-b2eb-1d2a4fad093a.jpeg?h=540&w=540',
            rating: 8,
          },
        ],
        sushi: [
          {
            name: 'Vegetable',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/b0b9deeb-6577-4524-a464-7b24f43ddbd7/373ed2cc-24d3-47ae-a33b-238849c84b40.jpeg?h=540&w=540',
            rating: 5,
          },
          {
            name: 'Salmon',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/f0cb903d-3c64-41fc-b850-8df69aea9c06/e48181a7-c66c-4236-ac9d-c4c81b529fb8.jpeg?h=540&w=540',
            rating: 7,
          },
          {
            name: 'Prawn',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/0f3a8274-624f-4565-8896-95a5480c03a1/0754a93a-19b7-425e-8c48-b0f54a1207c8.jpeg?h=540&w=540',
            rating: 9,
          },
        ],
        salad: [
          {
            name: 'Mozzarella',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/58fbebb5-83be-47b9-9e3b-d1e1bcab24eb/ba7a06b2-befa-47f3-97ed-996d7f8cd942.jpeg?h=540&w=540',
            rating: 4,
          },
          {
            name: 'Tuna',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/eb65a132-85ce-4d6b-99e1-18fbbc5a0c86/f2b005bd-bebf-405a-a0f2-8686fce0282e.jpeg?h=540&w=540',
            rating: 4,
          },
          {
            name: 'Ceasar',
            img:
              'https://digitalcontent.api.tesco.com/v2/media/ghs/b4553b19-62d5-4567-b1a9-ba5d3ec35814/c629a356-6793-4560-b158-e8b4db35f5a3.jpeg?h=540&w=540',
            rating: 4,
          },
        ],
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
        <CategoryChoice
          category={category}
          choices={categoryChoices}
          chooseCategory={this.chooseCategory}
        />
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

  chooseCategory = (event) => {
    const newCategory = event.target.innerText.toLowerCase();
    this.setState((currentState) => {
      return (currentState.selectedCategory = newCategory);
    });
    this.setState((currentState) => {
      return (currentState.showCategoryChoice = false);
    });
    this.setState((currentState) => {
      return (currentState.showImages = true);
    });
  };
}

export default App;
