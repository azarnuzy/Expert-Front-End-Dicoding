import RestaurantSource from '../../data/restaurant-resource';
import UrlParser from '../../routes/url-parser';
import exploreDetail from '../templates/detailExploreItem';
import Spinner from '../templates/spinner';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="like" id="likeButtonContainer"></div>
      <div class="exploreContent">
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
    const exploreContent = document.querySelector('.exploreContent');

    exploreContent.style.display = 'none';
    loading.innerHTML = Spinner();
    try {
      const detailData = await RestaurantSource.getRestaurantDetail(url.id);
      detailResto.innerHTML += exploreDetail(detailData.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        detailData,
      });

      exploreContent.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      console.log(error);
      exploreContent.style.display = 'block';
      loading.style.display = 'none';
      detailResto.style.fontSize = '20px';
      detailResto.style.color = 'red';
      detailResto.innerHTML = `'${error.message}'`;
    }
  },
};

export default Detail;
