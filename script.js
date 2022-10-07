let addButton = document.getElementById('submitBtn');
let shopList = document.getElementById('shopList');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', function(){
    var listAdd = document.createElement('li');
    // listAdd.classList.add('some variable');
    listAdd.innerText = inputField.value;
    shopList.appendChild(listAdd);
    inputField.value = "";
    listAdd.addEventListener('click', function(){
        listAdd.style.textDecoration = "line-through";
    })
    listAdd.addEventListener('dblclick', function(){
        shopList.removeChild(listAdd);
    })
})