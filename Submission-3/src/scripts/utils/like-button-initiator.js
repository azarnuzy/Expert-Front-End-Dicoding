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

      if (await this._isRestaurantExist(id)) {
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

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurantList(id);
    return !!restaurant;
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      initSwalSuccess('Resto favorited!');
      this._renderButton();
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      initSwalSuccess('Resto unfavorited!');
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
