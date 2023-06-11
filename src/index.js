import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
const selectEl = document.getElementsByClassName('breed-select');
const loaderPar = document.getElementsByClassName('loader');
const errorPar = document.getElementsByClassName('error');
const catInfoEl = document.getElementsByClassName('cat-info');
errorPar[0].style.display = "none";
function createOption(name, id) {
  let option = `<option value ='${id}'>${name}</option>`;
  selectEl[0].insertAdjacentHTML('afterbegin', option);
}
function createCatInfo(catInfo, catImg) {
  let info = `<img src = "${catImg}" width = 350 height = 300 class = "cat-img"><\img> <div class="cat-info-wrapper"> <h1 class  = "cat-title">${catInfo.name}</h1> <p class = "cat-descr">${catInfo.description}</p></div>`;
  catInfoEl[0].insertAdjacentHTML('afterbegin', info);
}

fetchBreeds()
  .then(response => response.json())
  .then(headlines => {
    headlines.sort((a,  b)=> b.name.localeCompare(a.name)).map(({ name, id }) => {
      createOption(name, id);
      loaderPar[0].style.display = "none";
    });
  }).catch(()=>{
    loaderPar[0].style.display = "none";
    errorPar[0].style.display = "block";
  });

selectEl[0].addEventListener('input', event => {
  event.preventDefault();
  loaderPar[0].style.display = "block";
  const breedId = selectEl[0].value;
  catInfoEl[0].innerHTML = " ";
  fetchCatByBreed(breedId)
    .then(response => response.json())
    .then(headline => {
      if (breedId === headline[0].breeds[0].id) {
        let info = headline[0].breeds[0];
        let img = headline[0].url;
        createCatInfo(info, img);
        loaderPar[0].style.display = "none";
      }
    }).catch(()=>{
      loaderPar[0].style.display = "none";
      errorPar[0].style.display = "block";
    });
})
