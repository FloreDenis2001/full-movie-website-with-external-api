let movieOption=document.querySelector(".movies");
let filterForOptionMovie=document.querySelector(".movie-f");
let serialsOption=document.querySelector(".serials");
let filterForOptionSerials=document.querySelector(".serials-f");
let headmovie=document.querySelector(".movieoftheday");

movieOfTheDay();
nowPlayingMovies();
upComingMovies();
topRateMovies();


movieOption.addEventListener("mouseenter",(e)=>{
   filterForOptionSerials.style.display='none'
   filterForOptionMovie.style.display='flex';
})

movieOption.addEventListener("mouseover",(e)=>{
   setTimeout(()=>{filterForOptionMovie.style.display='none';},50000);
})


serialsOption.addEventListener("mouseenter",(e)=>{
   filterForOptionMovie.style.display='none';
   filterForOptionSerials.style.display='flex';
})

serialsOption.addEventListener("mouseover",(e)=>{
   setTimeout(()=>{filterForOptionSerials.style.display='none';},50000);
})


