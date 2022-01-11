import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import restoItem from '../templates/explore-item';

const Favorite = {
  async render() {
    return `
          <h2 tabindex="0" class="favorite__title">Favorite Restaurant</h2>
          <div id="favorite-items" class="explore-items"></div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const favData = await FavoriteRestaurantIdb.getAllRestaurants();
    const favListItem = document.querySelector('#favorite-items');

    favData.forEach((resto) => {
      favListItem.innerHTML += restoItem(resto);
    });
  },
};

export default Favorite;
