import Notiflix from 'notiflix';
// // Описаний в документації
import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import scroll from './js/scroll';
import renderGalary from './js/renderGalary';
// import axiosAPI from './js/axiosAPI';
import PixabayApiService from './js/axiosAPI';



const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('input');
// const loadMoreBtn = document.querySelector('.load-more');
const imgGallery = document.querySelector('.gallery');



const pixabayApiService = new PixabayApiService();

formEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  pixabayApiService.searchQuery =
    e.currentTarget.elements.searchQuery.value.trim();
  if (pixabayApiService.searchQuery === '') {
    return onEmptyError();
  }
}

function onEmptyError(error) {
  Notiflix.Notify.warning('Поле пусте, введіть щось');
}

function onFetchError(error) {
  Notiflix.Notify.warning('Oops, smth wrong');
}

function clearImgGallery() {
  imgContainer.innerHTML = '';
}