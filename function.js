
//api-key : 1fa8650e7541aa42bca8ac6eec5f1f3f


function findByType(arr,type){
    let filterMoviesByType=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].type.toLowerCase().includes(type.toLowerCase())){
           filterMoviesByType.push(arr[i]);
        }
    }
return filterMoviesByType;
}

function findByName(arr,name){
    let filterName=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].name.toLowerCase().includes(name.toLowerCase())){
          filterName.push(arr[i]);
        }
    }
    return filterName;
}

function findByPrice(arr,price){
    let filterPrice=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].price===price){
          filterPrice.push(arr[i]);
        }
    }
    return filterPirce;
}

function filterByDuration(arr,duration){
    let filterDuration=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].duration===duration){
          filterDuration.push(arr[i]);
        }
    }
    return filterDuration;
}

function createCard(card){
    return`
    <article class="card item-${card.id}">
                <h2>${card.name}</h2>
                <img src="${card.src}" alt="error">
                <p>${card.type}</p>
                <footer> <p>Duration<span>(min)</span> :${card.duration}</p><br>
                   <div class"btn-card">
                   <button class="edit-btn id-${card.id}">UPDATE</button>
                    <button class="rezervare-btn">BUY TICKET</button>
                    <button class="delete-btn id-${card.id}">DELETE</button>
            
                    </div>
                </footer>
    </article>
    `
}

function updateCard(card){
return `   
   <article class="card item-${card.id}">
   <h2>${card.name}</h2>
   <img src="${card.src}" alt="error">
   <p>${card.type}</p>
   <footer> <p>Duration<span>(min)</span> :${card.duration}</p><br>
   <div class"btn-card">
   <button class="edit-btn id-${card.id}">UPDATE</button>
    
    <button class="cancel-btn id-${card.id}">CANCEL</button>

    </div>

   </footer>

</article>`

}

function removeCardByName(arr,name){
    let filterCard=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].name.toLowerCase()===name.toLowerCase())){
          filterCard.push(arr[i]);
        }
    }
   return filterCard;
}

function removeCardById(arr,id){
    let filterCard=[];
    for(let i=0;i<arr.length;i++){
        if(!(arr[i].id===id)){
          filterCard.push(arr[i]);
        }
    }
   return filterCard;
}


function createCards(cards){
    let text="";
    for(let i=0;i<cards.length;i++){
       text+=createCard(cards[i]);
    }
return text;
}


function lastId(arr){
    let lastId=1;
    for(let i=0;i<arr.length;i++){
       lastId++;
     }
     return lastId;
}

function filterMoviesByType(arr){
  let allTypes=[];
  for(let i=0;i<arr.length;i++){
   
    let types=arr[i].type.split("|");


    types.forEach(element => {
        if(allTypes.includes(element)==false){
            allTypes.push(element);
        }

    });
  }

  return allTypes.sort();
}

function createOption(option){
    return `
      <option value="${option.toLowerCase()}">${option}</option>
    `
}

function createOptions(options){

    let text=" ";
    for(let i=0;i<options.length;i++){
        text+=createOption(options[i]);
    }
    return text;
}


function update(movies){
    cardscontainer.innerHTML=createCards(movies);
    typeselector.innerHTML=createOptions(filterMoviesByType(movies));
}

function createCardOfTheDay(card){
    let cardHead=document.createElement('div');
    cardHead.classList.add('topOfDay');
    let cardContent=document.createElement('div');
    cardContent.classList.add('contentOfDay');
    let title=document.createElement('h2');
    title.classList.add("title");
    title.textContent=card.title;
    let describe=document.createElement('p');
    describe.classList.add("describe");
    describe.textContent=card.overview;
    let buttonPlay=document.createElement('button');
    buttonPlay.classList.add("playoftheday");
    buttonPlay.textContent='Watch';
    let buttonFav=document.createElement('button');
    buttonFav.classList.add("favoftheday");
    buttonFav.textContent='More Info';
    cardContent.appendChild(title);
    cardContent.appendChild(describe);
    cardContent.appendChild(buttonPlay);
    cardContent.appendChild(buttonFav);
    cardHead.appendChild(cardContent);
    return cardHead;
    

}

function createCardForSections(cardv){
    let card=document.createElement('div');
    card.classList.add('cardMovie');
    let string=`id-${cardv.id}`;
    card.classList.add(string);
    card.style.backgroundImage=`url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${cardv.poster_path})`;
    let buttonsSection=document.createElement('div');
    buttonsSection.classList.add('buttonsCard');

    let playbtncontainer=document.createElement('div');
    playbtncontainer.classList.add("play-container");

    let buttonPlay=document.createElement('button');
    buttonPlay.classList.add("btn-popular-play");
     
    let iplay=document.createElement('i');
    iplay.classList.add("fa-solid");
    iplay.classList.add("fa-play");
    iplay.classList.add("iplay");

    buttonPlay.appendChild(iplay);
    playbtncontainer.appendChild(buttonPlay);
  


    let favbtncontainer=document.createElement('div');
    favbtncontainer.classList.add("fav-container");

    let buttonAdd=document.createElement('button');
    buttonAdd.classList.add("btn-popular-add");

    let ifav=document.createElement('i');
    ifav.classList.add("fa-solid");
    ifav.classList.add("fa-plus");
    ifav.classList.add("ifav");

    buttonAdd.appendChild(ifav);
    favbtncontainer.appendChild(buttonAdd);

    buttonsSection.appendChild(playbtncontainer);
    buttonsSection.appendChild(favbtncontainer);
    card.appendChild(buttonsSection);

    return card;
}

async function movieOfTheDay(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
     
        let movieOfTheDay=document.querySelector(".cardoftheday");
    
          
        let movie=data.results[0];
        movieOfTheDay.style.backgroundImage=`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`;
        movieOfTheDay.appendChild(createCardOfTheDay(data.results[0]));

        let popularmovies=document.querySelector(".popularcard");
        for(let i=0;i<5;i++){      
          popularmovies.appendChild(createCardForSections(data.results[i]));
        }

    }catch(err){
        console.error(err);
    }
}


async function nowPlayingMovies(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
        let nowplaymovies=document.querySelector(".nowplaycard");
        nowplaymovies.appendChild(createPrevBtn());
        for(let i=0;i<5;i++){      
          nowplaymovies.appendChild(createCardForSections(data.results[i]));
        }
        nowplaymovies.appendChild(createNextBtn());

    }catch(err){
        console.error(err);
    }
}

async function upComingMovies(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
        let upmovies=document.querySelector(".upcard");
        upmovies.appendChild(createPrevBtn());
        for(let i=0;i<5;i++){      
          upmovies.appendChild(createCardForSections(data.results[i]));
        }
        upmovies.appendChild(createNextBtn())

    }catch(err){
        console.error(err);
    }
}

async function topRateMovies(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
        let ratemovies=document.querySelector(".ratecard");
        ratemovies.appendChild(createPrevBtn());
        for(let i=0;i<5;i++){      
          ratemovies.appendChild(createCardForSections(data.results[i]));
        }
        ratemovies.appendChild(createNextBtn());

    }catch(err){
        console.error(err);
    }
}


async function cardOfTheDay(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f`);
        data = await data.json();
     
        let movieOfTheDay=document.querySelector(".cardoftheday");
    
          
        let movie=data.results[0];
        movieOfTheDay.style.backgroundImage=`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`;
        movieOfTheDay.appendChild(createCardOfTheDay(data.results[0]));

        let popularmovies=document.querySelector(".popularcard");
        popularmovies.appendChild(createPrevBtn());   
        for(let i=0;i<5;i++){  
          popularmovies.appendChild(createCardForSections(data.results[i]));
        }
        popularmovies.appendChild(createNextBtn());

    }catch(err){
        console.error(err);
    }
}

function createPrevBtn(){
    let section=document.createElement("div");
    section.classList.add("prev-section");
    let icon=document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-angle-left");
    section.appendChild(icon);

    return section;
}
function createNextBtn(){
    let section=document.createElement("div");
    section.classList.add("next-section");
    let icon=document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-angle-right");
    section.appendChild(icon);

    return section;
}

async function nowPlayingCard(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
        let nowplaymovies=document.querySelector(".nowplaycard");
        nowplaymovies.appendChild(createPrevBtn());
        for(let i=0;i<5;i++){      
          nowplaymovies.appendChild(createCardForSections(data.results[i]));
        }
        nowplaymovies.appendChild(createNextBtn());

    }catch(err){
        console.error(err);
    }
}

async function upComingCard(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
        let upmovies=document.querySelector(".upcard");
        upmovies.appendChild(createPrevBtn());
        for(let i=0;i<5;i++){      
          upmovies.appendChild(createCardForSections(data.results[i]));
        }
        upmovies.appendChild(createNextBtn());

    }catch(err){
        console.error(err);
    }
}

async function topRateCard(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
        let ratemovies=document.querySelector(".ratecard");
        for(let i=0;i<5;i++){      
          ratemovies.appendChild(createCardForSections(data.results[i]));
        }

    }catch(err){
        console.error(err);
    }
}



async function category(){
    try{

        let data =await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US`);

        data=await data.json();
        let categorie=document.querySelector(".optiuni-categorie");
        console.log(categorie);
        for(let i=0;i<data.genres.length;i++){
            categorie.appendChild(attachCategory(data.genres[i]));
        }

    }catch(err){
        console.error(err);
    }
}

function attachCategory(card){
    let option=document.createElement("p");
    option.textContent=card.name;

    return option
}