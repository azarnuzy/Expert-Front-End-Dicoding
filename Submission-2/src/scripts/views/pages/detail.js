import RestaurantSource from '../../data/restaurant-resource';
import UrlParser from '../../routes/url-parser';
import exploreDetail from '../templates/detailExploreItem';
import Spinner from '../templates/spinner';
import {
  createMovieDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/liked-button';

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="like" id="likeButtonContainer"></div>
      <div class="explore__content">
        <h2 tabindex="0" class="main-content__title">Detail Restaurant</h2>
        <article id="detail-restaurant"></article>
      </div>
    </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('#loading');
    const detailResto = document.querySelector('#detail-restaurant');
    const explore__content = document.querySelector('.explore__content');

    explore__content.style.display = 'none';
    loading.innerHTML = Spinner();
    try {
      const detailData = await RestaurantSource.getRestaurantDetail(url.id);
      detailResto.innerHTML += exploreDetail(detailData.restaurant);

      const likeButtonContainer = document.querySelector(
        '#likeButtonContainer'
      );
      likeButtonContainer.innerHTML = createLikeButtonTemplate();

      explore__content.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      console.log(error);
      explore__content.style.display = 'block';
      loading.style.display = 'none';
      detailResto.style.fontSize = '20px';
      detailResto.style.color = 'red';
      detailResto.innerHTML = `'${error.message}'`;
    }
  },
};

export default Detail;