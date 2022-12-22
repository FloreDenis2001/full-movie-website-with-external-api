let movieOption=document.querySelector(".movies");
let filterForOptionMovie=document.querySelector(".movie-f");
let serialsOption=document.querySelector(".serials");
let filterForOptionSerials=document.querySelector(".serails-f");

movieOption.addEventListener("mouseenter",(e)=>{
   filterForOptionMovie.style.display='flex';
})

movieOption.addEventListener("mouseover",(e)=>{
   setTimeout(()=>{filterForOptionMovie.style.display='none';},3000);
})


