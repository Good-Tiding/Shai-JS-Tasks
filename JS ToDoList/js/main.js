const ToDo_Input = document.getElementById('ToDo_Input');
const ToDo_List = document.getElementById('ToDo_List');

function AddTask()
{
  if(ToDo_Input.value === '') 
  {
    alert('Enter a Task');
  }

  else
  {
    let li=document.createElement('li');
    li.innerHTML=ToDo_Input.value;
    ToDo_List.appendChild(li);


    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);

    span.onclick = function () 
    {
      li.remove(); 
      saveTasks(); 
    };

    ToDo_Input.value='';
    saveTasks();
  }
   
}

function saveTasks()
{
  localStorage.setItem('data',ToDo_List.innerHTML)
}

function loadTasks()
{
  const savedTasks = localStorage.getItem('data')

  if (savedTasks) 
  {
    ToDo_List.innerHTML = savedTasks;
  } 
  

  const deleteButtons = ToDo_List.querySelectorAll('span');
  deleteButtons.forEach(span => 
  {
    span.onclick = function () 
    {
      span.parentElement.remove();
      saveTasks();
    };
  });

}

// Load tasks when the page loads
window.onload = loadTasks;