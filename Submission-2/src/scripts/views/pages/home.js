import RestaurantSource from '../../data/restaurant-resource';

const Home = {
  async render() {
    return `
              <h2>Home Page</h2>
            `;
  },

  async afterRender() {
    const restoList = await RestaurantSource.getRestaurantList();
    console.log(restoList);
  },
};

export default Home;
