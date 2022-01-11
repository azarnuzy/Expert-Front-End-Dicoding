import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/liked-button';
import { initSwalError, initSwalSuccess } from './sweet-alert-2-initiator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, detailData }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = detailData.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      // get resto in indexed db
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (err) {
      console.error(err);
      initSwalError(err.message);

      throw new Error(err);
    }
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick fav the selected resto
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      initSwalSuccess('Resto favorited!');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate(); // append html

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      // onClick unfav the selected resto
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      initSwalSuccess('Resto unfavorited!');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
