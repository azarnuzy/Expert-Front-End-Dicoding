import RestaurantSource from '../../data/restaurant-resource';
import restoItem from '../templates/explore-item';
import Spinner from '../templates/spinner';

const Home = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="explore__content">
        <h2 tabindex="0" class="main-content__title">Explore Restaurant</h2>
        <div id="explore-items" class="explore-items"></div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const listItems = document.querySelector('#explore-items');
    const explore__content = document.querySelector('.explore__content');

    explore__content.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const exploreItems = await RestaurantSource.getRestaurantList();
      exploreItems.restaurants.forEach((resto) => {
        listItems.innerHTML += restoItem(resto);
      });

      loading.style.display = 'none';
      explore__content.style.display = 'block';
    } catch (error) {
      console.log(error);
      explore__content.style.display = 'block';
      loading.style.display = 'none';
      listItems.style.fontSize = '20px';
      listItems.style.color = 'red';
      listItems.innerHTML = `'${error.message}'`;
    }
  },
};

export default Home;
