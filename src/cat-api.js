export let fetchBreeds = () =>{
    const url = "https://api.thecatapi.com/v1/breeds";
     const catsPromise = fetch(url);
     return catsPromise;
};
export let fetchCatByBreed = (breedId)=>{
const catUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_WJpJKiHwowP5MuhrNrTMBLEd4AF86LdVlOt6vRgrwjrRmfVkcLin13gdEk0Tkirv`
const catPromise = fetch(catUrl);
return catPromise;
}