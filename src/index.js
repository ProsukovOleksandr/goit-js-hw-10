import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
const selectEl = document.querySelector('.breed-select');
const loaderPar = document.querySelector(".loader");
const errorPar = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');
errorPar.style.display = "none";
function createOption(name, id) {
  let option = `<option value ='${id}'>${name}</option>`;
  return option;
}
function createCatInfo(catInfo, catImg) {
  let info = `<img src = "${catImg}" width = 350 height = 300 class = "cat-img"><\img> <div class="cat-info-wrapper"> <h1 class  = "cat-title">${catInfo.name}</h1> <p class = "cat-descr">${catInfo.description}</p></div>`;
  catInfoEl.insertAdjacentHTML('afterbegin', info);
}

fetchBreeds()
  .then(headlines => { 
    let options = headlines.map(({ name, id }) => {
     let option = createOption(name, id);
      loaderPar.style.display = "none";
      return option;
    });
    selectEl.innerHTML  = [...options];
  }).catch(()=>{
      loaderPar.style.display = "none";
      errorPar.style.display = "block";
    });

selectEl.addEventListener('input', event => {
  event.preventDefault();
  loaderPar.style.display = "block";
  const breedId = selectEl.value;
  catInfoEl.innerHTML = " ";
  fetchCatByBreed(breedId)
    .then(headline => {
      if (breedId === headline[0].breeds[0].id) {
        let info = headline[0].breeds[0];
        let img = headline[0].url;
        createCatInfo(info, img);
        loaderPar.style.display = "none";
      }
    }).catch(()=>{
        loaderPar.style.display = "none";
        errorPar.style.display = "block";
      });
})
