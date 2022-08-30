
// // Описаний в документації

// // Додатковий імпорт стилів

import scroll from './js/scroll';



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from 'notiflix';
import LoadMoreBtnApi from './js/loadMore';
import PixabayApiService from './js/axiosAPI';



const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('input');
// const loadMoreBtn = document.querySelector('.load-more');
const imgGallery = document.querySelector('.gallery');



const pixabayApiService = new PixabayApiService();
const loadMoreBtn = new LoadMoreBtnApi({
  selector: '.load-more',
  hidden: true,
});


formEl.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArrPixab);

function onSearch(e) {
  e.preventDefault();

  pixabayApiService.searchQuery =
    e.currentTarget.elements.searchQuery.value.trim();
  if (pixabayApiService.searchQuery === '') {
    return onEmptyError();
  }
  loadMoreBtn.show();
  pixabayApiService.resetPage();
  clearImgGallery();
  fetchArrPixab();
}

export function renderImg({hits}) {
  const markupImg = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<div class="photo-card">
  <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>`
    )
    .join();
  imgGallery.insertAdjacentHTML('beforeend', markupImg);
//   console.log(arr);
}

// function fetchArrPixab() {
//   loadMoreBtn.disable();
//   pixabayApiService.fetchImg().then(hits => {
//     renderImg(hits);
//     loadMoreBtn.enable();
//   });
// }

function fetchHitsPixab() {
  loadMoreBtn.disable();
  pixabayApiService
    .fetchImg()
    .then(({ data }) => {
      if (data.total === 0) {
        Notiflix.Notify.info(
          'text.'
        );
        loadMoreBtn.hide();
        return;
      }

      renderImg(data);
      // lightbox.refresh();

      loadMoreBtn.enable();
    })
    .catch(onFetchError);
}


// if (markupImg > 40) {
//     loadMoreBtn.classList.remove('is-hidden');
//   } else {
//     loadMoreBtn.classList.add('is-hidden');
//   }












function onEmptyError(error) {
  Notiflix.Notify.warning('Поле пусте, введіть щось');
};
function clearImgGallery() {
  imgGallery.innerHTML = '';
};

