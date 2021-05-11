//initial tab list
let buttonsNames = ["Internet Cats","Meme's","Typing","Space","Rick and Morty"];

//button list
let buttonArray = document.getElementsByClassName("tab-item");

function onClickButton(tab){
    for(let i = 0; i < buttonArray.length; i++){
        if(buttonArray[i] == tab){            
            var find = buttonsNames[i];
            changeTabGifs(find);
        } else {
            deleteOtherGifs();
        }
    }
}
//deletes gifs of other buttons
function deleteOtherGifs(){
    let parentId = document.getElementById("gifCont");
    if(parentId.childElementCount != 0){
        while(parentId.childElementCount != 0){
            parentId.removeChild(parentId.childNodes[0]);
        }
    }
}

function buttonListener(){
    for(let i = 0; i < buttonArray.length; i++){
        buttonArray[i].addEventListener('click',(event)=>{
            onClickButton(event.target);
        });
    }  
}   
buttonListener();

//classes
class config{
    constructor(url){
        this.url = url;
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
    deleteOtherGifs();
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
            buttonArray[0].remove();
        }
        newB.classList.add("tab-item");
        document.getElementById("tabList").appendChild(newB);

        buttonsNames.push(inputText); 
        document.getElementById("tabList").appendChild(newB);
    }
    buttonListener();
    document.getElementById("tabList").lastChild.click();
}