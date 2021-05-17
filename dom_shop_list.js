var button=document.getElementById("add");
var text=document.getElementById("text");
var ul=document.querySelector("ul");
var list  = document.getElementsByTagName("li");
var but=document.querySelector("button");

//function add_click(){
    
  //  for(var i = 0; i < list.length; i++) {
    //    list[i].addEventListener("click", function(e){
      //   e.currentTarget.classList.toggle("done");
        //})
      //}
//}

function createnote(){
    
    var li=document.createElement("li");
    var button=document.createElement("button");
    button.innerHTML="delete";
    li.appendChild(document.createTextNode(text.value));
    li.appendChild(button);
    ul.appendChild(li);
    
    

    
}
function click_add(){
    if(text.value.length>0){
        createnote();
        text.value=null;
    }
}

function click_enter(event){
    if(event.key==="Enter" && text.value.length>0){
        console.log(event.key)
        createnote();
        text.value=null;
    }
}

function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}
    
function delete_li(event){
    if (event.target.tagName === "BUTTON"){
    event.target.parentElement.remove()
    }
    
}



ul.addEventListener("click", delete_li);
ul.addEventListener("click", toggleClassDoneOnAndOff);  
button.addEventListener("click",click_add);
text.addEventListener("keypress",click_enter);