const assert = require('assert');

Feature('Favorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = '';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#favorite-items');
  I.see(emptyFavoriteRestoText, '#favorite-items');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#favorite-items');

  I.amOnPage('/');
  I.seeElement('.explore-item a');
  const firstRestoCard = locate('.explore-item__content-title').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore-item');
  const likedCardTitle = await I.grabTextFrom('.explore-item__content-title');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.explore-item');
  const firstRestoCard = locate('.explore-item__content-title').first();
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.explore-item');
  const likedCardTitle = await I.grabTextFrom('.explore-item__content-title');
  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favorite-items');
  I.dontSeeElement('.explore-item');
  I.dontSeeElement('.explore-item__content-title');
});
