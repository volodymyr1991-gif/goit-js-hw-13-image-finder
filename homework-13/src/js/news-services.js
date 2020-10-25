const axios = require('axios');

const apiKey = '18753901-48fe4160ef12c9ad3fe1a3bef';
export default {
  serchQuery: '',
  page: 1,
  fechArticles() {
    return axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.serchQuery}&page=${this.page}&per_page=12&key=${apiKey}`,
      )
      .then(({ data }) => {
        this.page += 1;
        return data.hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.serchQuery;
  },
  set query(value) {
    return (this.serchQuery = value);
  },
};

// export default fechArticles
