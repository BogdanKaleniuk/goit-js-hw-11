import axios from 'axios';

const url = 'https://pixabay.com/api/';
const key = 'key=29544184-f05b1a44cab73eff12533d9b3';
const filter =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

  export default class PixabayApiService {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchImg() {
    // console.log(this);
    const response = await axios.get(
      `${url}?${key}&q=${this.query}&${filter}&page=${this.page}`
    );

    this.incrementPage();
    return response;
  }

  //   fetchImg() {
  //   return fetch(
  //     `${url}?${key}&q=${this.query}&${filter}&page=${this.page}`
  //   )
  //     .then(response => response.json())
  //     .then(({ hits }) => {
  //       this.incrementPage();

  //       return hits;
  //     });
  // }
  
  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }

   incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  

}

