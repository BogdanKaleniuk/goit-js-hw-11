import axios from 'axios';

const url = 'https://pixabay.com/api/';
const key = '29544184-f05b1a44cab73eff12533d9b3';
const filter =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

  export default class PixabayApiService {
  constructor() {
    this.query = '';
    this.page = 1;
  }

    fetchImg() {
    return fetch(
      `${BASE_URL}?${key}&q=${this.query}&${filter}&page=${this.page}`
    )
      .then(response => response.json())
      .then(({ arr }) => {
        this.incrementPage();

        return arr;
      });
  }

   incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  
  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }
}