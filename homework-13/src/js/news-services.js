const axios = require('axios');


const apiKey = '18753901-48fe4160ef12c9ad3fe1a3bef'
export default {
    serchQuery: '',
    page: 1,
    fechArticles(serchQuery, page=1){
        return axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchQuery}&page=${page}&per_page=12&key=${apiKey}`)
         .then((articles)=>articles.data.hits)
     }
}

// export default fechArticles