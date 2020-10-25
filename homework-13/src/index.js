import './styles.css';

import updateArticlesMarcup from './js/articles';
import newsServices from './js/news-services';
import showModal from './js/show-modal.js';
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

import './js/articles';
import refs from './refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  newsServices.query = form.elements.query.value;
  refs.galleryContainer.innerHTML = '';

  newsServices.resetPage();

  refs.loadMoreBtn.classList.add('is-hidden');
  newsServices.fechArticles().then(data => {
    if (data.length < 1) {
      PNotify.info();
      ({
        text: 'Потрібно ввести більше інформації для пошуку',
      });
    }
    updateArticlesMarcup(data);
    // refs.loadMoreBtn.classList.remove('is-hidden');

    // refs.loadMoreBtn.classList.remove('is-hidden');
  });
  form.reset();
});

refs.gallery.addEventListener('click', showModal);

// refs.loadMoreBtn.addEventListener('click', () => {
//   newsServices.fechArticles().then(data => {
//     updateArticlesMarcup(data);
//   });
// });

window.addEventListener('scroll', function () {
  const y = window.pageYOffset + window.innerHeight;

  if (y >= document.documentElement.offsetHeight - 100) {
    newsServices.fechArticles().then(data => {
      updateArticlesMarcup(data);
    });
  }
});
