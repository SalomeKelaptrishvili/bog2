class config{
    constructor(list){
        this.list = list;
    }
}

class catalog extends config{
    render(){
        this.list.forEach((item)=>{
           //...
        });
    }
}




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