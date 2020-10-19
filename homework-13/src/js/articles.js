import articlesTpl from '../templates/articles.hbs';
import refs from '../refs'
// const refs = {
//   articles: document.querySelector('.js-articles'),
// };
function updateArticlesMarcup(articles) {
  const marcup = articlesTpl(articles);
  console.log(marcup);
  refs.galleryContainer.insertAdjacentHTML('beforeend', marcup);
}

export default updateArticlesMarcup;
