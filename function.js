
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

function createMovieOfTheDay(movie){
    let cardHead=document.createElement('div');
    cardHead.classList.add('topOfDay');
    let cardContent=document.createElement('div');
    cardContent.classList.add('contentOfDay');
    let title=document.createElement('h2');
    title.classList.add("titleOfMovie");
    title.textContent=movie.title;
    let describe=document.createElement('p');
    describe.classList.add("describeofmovie");
    describe.textContent=movie.overview;
    cardContent.appendChild(title);
    cardContent.appendChild(describe);
    cardHead.appendChild(cardContent);
    return cardHead;
    

}

async function movieOfTheDay(){
    try{
        let data=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1fa8650e7541aa42bca8ac6eec5f1f3f&language=en-US&page=1`);
        data = await data.json();
     
        let movieOfTheDay=document.querySelector(".movieoftheday");
        console.log(data.results[0]);
        console.log(createMovieOfTheDay(data.results[0]));
          
        let movie=data.results[0];
        movieOfTheDay.style.backgroundImage=`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`;
        movieOfTheDay.appendChild(createMovieOfTheDay(data.results[0]));

    }catch(err){
        console.error(err);
    }
}