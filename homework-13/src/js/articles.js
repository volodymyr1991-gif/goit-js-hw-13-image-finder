import articlesTpl from '../templates/articles.hbs';
import refs from '../refs';

function updateArticlesMarcup(articles) {
  const marcup = articlesTpl(articles);

  refs.galleryContainer.insertAdjacentHTML('beforeend', marcup);
}

export default updateArticlesMarcup;
