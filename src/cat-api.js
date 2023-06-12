export let fetchBreeds = () =>{
    const url = "https://api.thecatapi.com/v1/breeds";
    return fetch(url).then(response => response.json()).catch((error)=>{
    throw new Error(response.status)
      });
};
export let fetchCatByBreed = (breedId)=>{
const catUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=live_WJpJKiHwowP5MuhrNrTMBLEd4AF86LdVlOt6vRgrwjrRmfVkcLin13gdEk0Tkirv`
return fetch(catUrl).then(response => response.json()).catch(()=>{
  throw new Error(response.status)
  });

}