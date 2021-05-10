//event listeners
let tab_array = document.getElementsByClassName("tab-item");
let content_array = document.querySelectorAll(".tab-content");

function clickOnTab(tab){
    for(let i = 0; i < tab_array.length; i++){
        if(tab_array[i] == tab){
            tab_array[i].classList.add("tab-active");
            content_array[i].classList.add("content-active");
        } else {
            tab_array[i].classList.remove("tab-active");
            content_array[i].classList.remove("content-active");
        }
    }
}
for(let i = 0; i < tab_array.length; i++){
    tab_array[i].addEventListener('click',(event)=>{
        clickOnTab(event.target);
    });
}

//classes
class config{
    constructor(url,contentId){
        this.url = url;
        this.contentId = contentId;
    }
}


class catalog extends config{
    
    showGifs(){
        async function showGifsList(url,contentId){
            try{
                const response = await fetch(url,{method:'GET'});
                const result = await response.json();
                console.log(result);
                let gifList = result.data;
                for(let i in gifList){
                    let newGif = document.createElement('img');
                    let newLink = gifList[i].images.original.url;
                    newGif.setAttribute("src", newLink);
                    document.getElementById(contentId).appendChild(newGif);
                    newGif.setAttribute("width","150px");
                }
            } catch(error){
                console.log(error);
            }
        }
        showGifsList(this.url,this.contentId);
        
        // fetch(this.url,{
        //     method: 'GET',
        // })
        // .then((response)=>{
        //     return response.json();
        // })
        // .then((response)=>{
        //     console.log(response);
        //     let gifList = response.data;
        //     console.log(gifList);
        //     for(let i in gifList){
        //         let newGif = document.createElement('img');
        //         let newLink = gifList[i].images.original.url;
        //         newGif.setAttribute("src", newLink);
        //         document.getElementById(this.contentId).appendChild(newGif);
        //         newGif.setAttribute("width","150px");
        //         console.log(newLink);
        //     }
        // });
    }     
}

let searchKeyWord = "funnycat";
let urlgif = `https://api.giphy.com/v1/gifs/search?q=${searchKeyWord}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB`;

let gifStoreId = "gifresult";

const gifCatalog = new catalog(urlgif,gifStoreId);
gifCatalog.showGifs();












//links and key
// const queryUrl = "https://api.giphy.com/v1/gifs/search?";
// const apiKey = "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
// const trendingUrl = "https://api.giphy.com/v1/gifs/trending?";

// const urlGifs = 'https://api.giphy.com/v1/gifs/search?q=Internet%20Cats&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json';//aq linki katebis gifebis????
// const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
// const postres = "catsResult";

// const url2 = 'https://jsonplaceholder.typicode.com/posts?userId=2';//aq linki memebis gifebis????
// const content2id = "memesResult";

// const tab1Catalog = new catalog(urlGifs,postres);
// tab1Catalog.showGifs();

// const tab2Catalog = new catalog(urlGifs,content2id);
// tab2Catalog.showGifs();

// let buttonList = document.getElementsByClassName('tab-item');

// let inputValue = document.getElementById("inputValue").value; //mgoni es ar mushaobs
// console.log("inputvalue: "+ inputValue);

// function addSearchButtons(){
//     for(let i = 0; i < buttonList.length; i++){
//         if(buttonList.length < 6){
//             let newButton = document.createElement('button');
//             newButton.value = inputValue;
//             newButton.classList.add('tab-item');
//             document.getElementById('tabList').innerHTML = newButton;
//             buttonList.push(newButton);
//         }
//     }
// }
