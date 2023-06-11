/* RENAME THIS FILE TO cat-api.js*/

export let fetchBreeds = () =>{
    const url = "https://api.thecatapi.com/v1/breeds";
     const catsPromise = fetch(url);
     return catsPromise;
};
export let fetchCatByBreed = (breedId)=> {
const catUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key= !!!!PLACE YOUR API_KEY HERE!!!!`
const catPromise = fetch(catUrl);
return catPromise;
}