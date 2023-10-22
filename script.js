const inputbox=document.getElementById('input-box')
const listcontainer=document.getElementById('list-container')

function addtask(){
    if(inputbox.value ===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    // utka
    
    inputbox.value="";
     savedata();
}

listcontainer.addEventListener("click",function(ev){
    if (ev.target.tagName==="LI"){
        ev.target.classList.toggle("checked")
        savedata();
    }
    else if(ev.target.tagName==="SPAN"){
       
        ev.target.parentElement.remove();
        savedata();
    }
    else{
      savedata();
    }
});
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
} 
function showlist(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showlist();