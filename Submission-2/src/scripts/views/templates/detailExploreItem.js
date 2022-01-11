import CONFIG from '../../globals/config';

const exploreDetail = (resto) => ` 
    <article class="explore-detail" tabindex="0">
        <div class="img-container">
          <img
            class="explore-item__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
            alt="${resto.name}"
            tabindex="0"
          />
        </div>
        <ul class="detail-explore__info">
           <li>${resto.categories
             .map(
               (category) => `
                    <span class="category">${category.name}</span>
                `
             )
             .join('')}
          </li>
          <li><strong>Name : </strong>${resto.name}</li>
          <li><strong>Address : </strong>${resto.address}, ${resto.city}</li>
          <li><strong>Rating : </strong>${resto.rating}</li>
          <li>${resto.description}</li>
        </ul>
        <h3 class="detail-explore__title">Menu</h3>
        <div class="detail-explore__menu">
          <div class="detail-explore__menu-food">
            <h4>Food</h4>
            <ul>
              ${resto.menus.foods
                .map(
                  (food, i) => `
                    <li><p>${i + 1}) ${food.name}</p></li>
                  `
                )
                .join('')}
            <ul>
          </div>
          <div class="detail-explore__menu-drink">
            <h4>Drink</h4>
            <ul>
              ${resto.menus.drinks
                .map(
                  (drink, i) => `
                    <li><p>${i + 1}) ${drink.name}</p></li>
                  `
                )
                .join('')}
            <ul>
          </div>
        </div>
        <h3 class="detail-explore__title">Reviews</h3>
        <div class="detail-explore__review">
          ${resto.customerReviews
            .map(
              (review) => `
                <div class="detail-explore__review-item">
                  <div class="detail-explore__review-header">
                    <p class="detail-explore__review-name">${review.name}</p>
                    <p class="detail-explore__review-date">${review.date}</p>
                  </div>
                  <div class="detail-explore__review-body">${review.review}</div>
                </div>
              `
            )
            .join('')}
        </div>
    </article>
    `;

export default exploreDetail;
