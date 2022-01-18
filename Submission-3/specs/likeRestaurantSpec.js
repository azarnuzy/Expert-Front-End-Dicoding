import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

/* const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
}; */

describe('Liking a Restaurant', () => {
  /* beforeEach(() => {
    addLikeButtonContainer();
  }); */

  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      detailData: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });
});
