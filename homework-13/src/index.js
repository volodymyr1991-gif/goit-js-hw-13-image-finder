import './styles.css';
import fechArticles from './js/fecch-articles'
import updateArticlesMarcup from './js/articles'
// import  './templates/articles.hbs'
import './js/articles'
import refs from './refs'

refs.searchForm.addEventListener('input', (event)=>{
// event.preventDefault()
const form = event.currentTarget;
const inputValue = form.elements.query.value
// console.log(inputValue)
refs.galleryContainer.innerHTML = '';
fechArticles(inputValue).then(data=>updateArticlesMarcup(data))
})




// console.log(axios);

