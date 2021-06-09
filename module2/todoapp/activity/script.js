let todoinput = document.querySelector(".todo-input");
let addbtn = document.querySelector(".add-todo");
let alllist = document.querySelector(".todo-list-container");
let deletebtn = document.querySelector(".delete-todo");



addbtn.addEventListener("click" , addtodo);


function addtodo()
{
    let todoinputvalue = todoinput.value;
    addlist(todoinputvalue);
    todoinput.value="";
    
}

function addlist(todo)
{
   let tododiv = document.createElement("div");
   tododiv.classList.add("todo-item");
   let pelement = document.createElement("p");
   pelement.classList.add("todo");
   pelement.textContent = todo;
   let btn = document.createElement("button");
   btn.classList.add("delete-todo");
   btn.textContent = "Delete";
   
   tododiv.append(pelement);
   tododiv.append(btn);
   alllist.append(tododiv);
   btn.addEventListener("click" , deletetodo);

  

}


function deletetodo(e)
{
    e.target.parentNode.remove();

}