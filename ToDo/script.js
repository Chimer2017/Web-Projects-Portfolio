
function newTask()
{
  var str = prompt("whats the new task?");
  return str;
}

function printList(array)
{
  for (var i = 0; i < array.length; i++)
  {
    console.log(array[i]);
  }

}




var stat = false;
var input;
var tasks = [];
while(stat == false)
{
  input = prompt("Type an option");
  if (input == "new")
  {
    tasks.push(newTask());
  }
  else if (input == "list")
  {
      printList(tasks);
  }
  else if (input == "quit")
  {
      stat = true;
  }

}
