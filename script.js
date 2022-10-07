let addButton = document.getElementById('submitBtn');
let shopList = document.getElementById('shopList');
let inputField = document.getElementById('inputField');
let clicked = false;

let fr = new FileReader();
fr.readAsText('list.txt'.file[0]);
fr.onload = function(){
    shopList.innerHTML = fr.result;
};


addButton.addEventListener('click', function(){
    var listAdd = document.createElement('li');
    // listAdd.classList.add('some variable');
    listAdd.innerText = inputField.value;
    shopList.appendChild(listAdd);
    inputField.value = "";
    listAdd.addEventListener('click', function(){
        if(clicked == false){
            listAdd.style.textDecoration = "line-through";
            clicked = true;
        }   else {
            listAdd.style.textDecoration = "none";
            clicked = false;
        }
    })
    listAdd.addEventListener('dblclick', function(){
        shopList.removeChild(listAdd);
    })
})