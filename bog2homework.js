//initial tab list
let buttonsNames = ["Internet Cats","Meme's","Typing","Space","Rick and Morty"];

//event listeners
let tab_array = document.getElementsByClassName("tab-item");
for(let i = 0; i < tab_array.length; i++){

}


function clickOnTab(tab){
    for(let i = 0; i < tab_array.length; i++){
        

        if(tab_array[i] == tab){
            // tab_array[i].classList.add("tab-active");
            
            var find = buttonsNames[i];
            changeTabGifs(find);
            
        } else {
            // tab_array[i].classList.remove("tab-active");

            let parentId = document.getElementById("gifCont");

            if(parentId.childElementCount != 0){
                while(parentId.childElementCount != 0){
                    parentId.removeChild(parentId.childNodes[0]);
                }
            }
        }
    }
}
function rame(){
    for(let i = 0; i < tab_array.length; i++){
        tab_array[i].addEventListener('click',(event)=>{
            clickOnTab(event.target);
            // console.log("kfhsfds");
        });
    }  
}   
rame();




    //classes
    class config{
        constructor(url,contentId){
            this.url = url;
            this.contentId = contentId;
        }
    }

    class catalog extends config{
        
        showGifs(){
            async function showGifsList(url){
                try{
                    const response = await fetch(url,{method:'GET'});
                    const result = await response.json();
                    console.log(result);
                    let gifList = result.data;
                    for(let i in gifList){
                        //create box
                        let newBox = document.createElement('div');
                        newBox.classList.add('gifcontent');
                        // newBox.id = "gifresult";
                        document.getElementById('gifCont').appendChild(newBox);

                        //create img tag
                        let newGif = document.createElement('img');
                        let newLink = gifList[i].images.original.url;
                        newGif.setAttribute("src", newLink);
                        newBox.appendChild(newGif);
                        newGif.classList.add("newGifClass");
                        
                        //create div tag for rating
                        let newRate = document.createElement('div');
                        newRate.classList.add("rateLine");
                        let newRateLink = gifList[i].rating; //es sworia : g
                        console.log(newRateLink);
                        let textHere = document.createTextNode("rating: " + newRateLink);
                        newRate.appendChild(textHere);

                        newBox.appendChild(newRate);
                    }
                } catch(error){
                    console.log(error);
                }
            }
            showGifsList(this.url);
        }     
    }
    
function changeTabGifs(find){
    let urlgif = `https://api.giphy.com/v1/gifs/search?q=${find}&limit=16&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB`;

    const gifCatalog = new catalog(urlgif);
    gifCatalog.showGifs();
}

function trending(){
    let parentId = document.getElementById("gifCont");

    if(parentId.childElementCount != 0){
        while(parentId.childElementCount != 0){
            parentId.removeChild(parentId.childNodes[0]);
        }
    }

    let trendingUrl = `https://api.giphy.com/v1/gifs/trending?&limit=16&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB`;

    const gifCatalog = new catalog(trendingUrl);
    gifCatalog.showGifs();
}

function submitClick(){
    let newB = document.createElement('button');
    let inputText = document.getElementById("inputValue").value;
    let newButt = document.createTextNode(inputText);
    newB.appendChild(newButt);
    
    if(inputText != ""){
            
        if(buttonsNames.length > 5){
            buttonsNames.shift();
            tab_array[0].remove();
        }
        newB.classList.add("tab-item");
        document.getElementById("tabList").appendChild(newB);

        buttonsNames.push(inputText); 
        
        // console.log("butt: " + buttonsNames);
        // console.log(tab_array);

        document.getElementById("tabList").appendChild(newB);
        // rame();
        // console.log(document.getElementsByClassName("tab-list")[0].lastChild);
        // document.getElementById("tabList").lastChild.click();

    }
    rame();
    document.getElementById("tabList").lastChild.click();
    // changeTabGifs(inputText);
}









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
