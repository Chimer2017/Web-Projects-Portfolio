var taskText = document.querySelector("input");
var submitBtn = document.querySelector("button");
var activeDiv = document.querySelector("#active");
var activeList = document.querySelector("#actvList")





submitBtn.addEventListener("click", function(){

  if (taskText.value === "")
    return;
  else {

    var newListItem = document.createElement("li");
    var node = document.createTextNode(taskText.value);
    newListItem.appendChild(node);
    activeList.appendChild(newListItem);
    
  }

});
