const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function addTask(){
    let value = $('#new-task').value;
    if(value){
        value = value.charAt(0).toUpperCase() + value.slice(1); 
        $('.content>ul').innerHTML += 
        `<li>${value} <span>\u00d7</span> </li> `;
        $('#new-task').value = "";

    }
}

$("#list-container").addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})



