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





class config{
    constructor(url,contentId){
        this.url = url;
        this.contentId=contentId;
    }
}

class catalog extends config{
    showGifs(){
        fetch(this.url)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            console.log(response);
            response.forEach((item)=>{
                const node = document.createElement('div');
                node.innerHTML = `id: ${item.id} <br> userId: ${item.userId} <br> Title: ${item.title} <br> Body: ${item.body}`;
                document.getElementById(this.contentId).appendChild(node);
                //node.className = "postClass";
            });
        });
    }     
}
const urlPosts = 'https://jsonplaceholder.typicode.com/posts?userId=1';//aq linki katebis gifebis????
const postres = "catsResult";

const url2 = 'https://jsonplaceholder.typicode.com/posts?userId=2';//aq linki memebis gifebis????
const content2id = "memesResult";

const tab1Catalog = new catalog(urlPosts,postres);
tab1Catalog.showGifs();
const tab2Catalog = new catalog(url2,content2id);
tab2Catalog.showGifs();


