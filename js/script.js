const btn = document.querySelector(".add-todo");
const input = document.querySelector("#input-todo");
const resList = document.querySelector(".todo-list");

btn.addEventListener("click", function(){
  let updateList = document.createElement("div");
    updateList.className = "todo-list-item";
    resList.appendChild(updateList);
    updateList.innerText = input.value;
    input.value = "";

    updateList.addEventListener("click", function(){
        updateList.remove(); 
    }
    );

    const form = document.querySelector(".form");
    form.addEventListener("submit", function(event){
    event.preventDefault();
});


}
);