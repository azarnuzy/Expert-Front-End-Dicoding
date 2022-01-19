import CONFIG from '../../globals/config';

const restoItem = (resto) => ` 
    <article class="explore-item" tabindex="0">
      <a href="#/resto/${resto.id}">
        <div class="img-container">
          <img
            class="explore-item__thumbnail lazyload"
            src="./images/noPhoto-xl.jpg"
            data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
            alt="${resto.name}"
            tabindex="0"
          />
          <span tabindex="0" class="explore-item__rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>
        <div class="explore-item__content">
          <div tabindex="0" class="explore-item__content">
            <h3 class="explore-item__content-title">
              ${resto.name} - ${resto.city}
            </h3>
            <p class="explore-item__description">${resto.description}</p>
          </div>
        </div>
      </a>
    </article>
    `;

export default restoItem;
