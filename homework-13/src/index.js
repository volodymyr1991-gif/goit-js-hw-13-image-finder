import './styles.css';
// import fechArticles from './js/fecch-articles'
import updateArticlesMarcup from './js/articles'
import newsServices from './js/news-services'
// import  './templates/articles.hbs'
import './js/articles'
import refs from './refs'

refs.searchForm.addEventListener('input', (event)=>{

const form = event.currentTarget;
newsServices.query = form.elements.query.value

refs.galleryContainer.innerHTML = '';
// form.reset();

newsServices.resetPage();
// refs.galleryContainer.innerHTML = '';
newsServices.fechArticles().then(data=>{
    updateArticlesMarcup(data);
    // console.log(document.documentElement.offsetHeight);
    
  
    refs.loadMoreBtn.classList.remove('is-hidden')
});
});

refs.loadMoreBtn.addEventListener('click', ()=>{
    newsServices.fechArticles().then(data=>{
        console.log(data.value);
        updateArticlesMarcup(data)
        
    });
    
 console.log( document.documentElement.offsetHeight);

    window.scrollTo({
       top: 500,
            behavior: 'smooth'
        })
})



// console.log(axios);

