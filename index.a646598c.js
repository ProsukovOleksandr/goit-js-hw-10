let e=e=>fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_WJpJKiHwowP5MuhrNrTMBLEd4AF86LdVlOt6vRgrwjrRmfVkcLin13gdEk0Tkirv`).then((e=>e.json())).catch((()=>{throw new Error(response.status)}));const t=document.querySelector(".breed-select"),n=document.querySelector(".loader"),s=document.querySelector(".error"),r=document.querySelector(".cat-info");s.style.display="none",fetch("https://api.thecatapi.com/v1/breeds").then((e=>e.json())).catch((e=>{throw new Error(response.status)})).then((e=>{let s=e.map((({name:e,id:t})=>{let s=function(e,t){return`<option value ='${t}'>${e}</option>`}(e,t);return n.style.display="none",s}));t.innerHTML=[...s]})).catch((()=>{n.style.display="none",s.style.display="block"})),t.addEventListener("input",(c=>{c.preventDefault(),n.style.display="block";const i=t.value;r.innerHTML=" ",e(i).then((e=>{if(i===e[0].breeds[0].id){!function(e,t){let n=`<img src = "${t}" width = 350 height = 300 class = "cat-img"><img> <div class="cat-info-wrapper"> <h1 class  = "cat-title">${e.name}</h1> <p class = "cat-descr">${e.description}</p></div>`;r.insertAdjacentHTML("afterbegin",n)}(e[0].breeds[0],e[0].url),n.style.display="none"}})).catch((()=>{n.style.display="none",s.style.display="block"}))}));
//# sourceMappingURL=index.a646598c.js.map