//Get Elemnt from ids;

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#input');
const listBox = document.getElementById('listItems');
const deleteIt = document.querySelector('#delete')

//button to add list..
addBtn.addEventListener('click',
() => {
  if(input.value.length == 0){
    alert('Please Add a task.')
  }else{
    addList(); 
}
})
//main logic of adding todo list..

const addList = () =>{
    const list = document.createElement('div');
    list.classList.add('list');
    list.innerHTML = `<span>${input.value}</span>
    <i class="fa-regular fa-trash-can delete" id="delete"></i>
    `;
    listBox.appendChild(list);

    //Logic to togggle class When task is done..
    list.onclick = () => {
        list.classList.toggle('done')
    }
   //logic to delete the list from list item..
    list.querySelector('#delete').addEventListener(
        'click',
        () => {
            list.remove();
        }
    )
    clearFeild()
}

//to clear input when task is added..
const clearFeild = () => {
    input.value = '';
    input.focus()
}
