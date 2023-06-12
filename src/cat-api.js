const loaderPar = document.querySelector(".loader");
const errorPar = document.querySelector('.error');

export let fetchBreeds = () =>{
    const url = "https://api.thecatapi.com/v1/breeds";
    return fetch(url).then(response => response.json()).catch(()=>{
        loaderPar[0].style.display = "none";
        errorPar[0].style.display = "block";
      });
};
export let fetchCatByBreed = (breedId)=>{
const catUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_WJpJKiHwowP5MuhrNrTMBLEd4AF86LdVlOt6vRgrwjrRmfVkcLin13gdEk0Tkirv`
return fetch(catUrl).then(response => response.json()).catch(()=>{
    loaderPar[0].style.display = "none";
    errorPar[0].style.display = "block";
  });

}