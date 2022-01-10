import CONFIG from '../../globals/config';

const restoItem = (resto) => ` 
    <article class="explore-item">
      <div class="img-container">
        <img
          class="explore-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
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
    </article>
    `;

export default restoItem;
