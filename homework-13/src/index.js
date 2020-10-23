import './styles.css';
// import fechArticles from './js/fecch-articles'
import updateArticlesMarcup from './js/articles'
import newsServices from './js/news-services'
import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
// import  './templates/articles.hbs'
import './js/articles'
import refs from './refs'

refs.searchForm.addEventListener('input', (event)=>{

const form = event.currentTarget;
newsServices.query = form.elements.query.value

refs.galleryContainer.innerHTML = '';
// form.reset();

newsServices.resetPage();
refs.galleryContainer.innerHTML = '';
newsServices.fechArticles().then(data=>{
    
    if(data){
        // refs.galleryContainer.innerHTML=''
        setTimeout(() => {
            // console.log(data),
            PNotify.error({
              text: 'ваш запит пройшов успішно',
              delay: 2000,
            });
          }, 600);
          updateArticlesMarcup(data)
          refs.loadMoreBtn.classList.remove('is-hidden')
          console.log( document.documentElement.offsetHeight);
    }
    // else if(newsServices.query.length >= 3){
    //     updateArticlesMarcup(data);
    //     // refs.loadMoreBtn.classList.remove('is-hidden')
    //     console.log(data);
    // }
       
    
    console.log(newsServices.query.length);
    
    // refs.galleryContainer.innerHTML=''
    // updateArticlesMarcup(data);
    // refs.galleryContainer.innerHTML=''
    // console.log(document.documentElement.offsetHeight);
    
  
    // refs.loadMoreBtn.classList.remove('is-hidden')
});
});

refs.loadMoreBtn.addEventListener('click', ()=>{
    newsServices.fechArticles().then(data=>{
        // console.log(data.value);
        updateArticlesMarcup(data)
        
    });
    
 console.log( document.documentElement.offsetHeight);

    window.scrollTo({
       top: 1350,
            behavior: 'smooth'
        })
})



// console.log(axios);

