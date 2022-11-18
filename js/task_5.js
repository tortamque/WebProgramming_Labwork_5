function SaveList(list){
    var listItems = list.children;

    for (let i = 0; i < listItems.length; i++) {
        localStorage.setItem(`listItem_${i}`, listItems[i].innerText);
    }
    
    var parent = list.parentElement;

    list.parentElement.innerHTML = '';
    parent.appendChild(list);
}

window.addEventListener("load", function(event) {
    var first  = document.getElementById("first");
    var second = document.getElementsByClassName("second")[0];
    var third  = document.getElementsByClassName("third")[0];
    var fourth = document.getElementsByClassName("fourth")[0];
    var fifth  = document.getElementsByClassName("fifth")[0];
    var sixth  = document.getElementsByClassName("sixth")[0];

    var list = document.createElement("ul");

    var form = document.createElement("form");
    form.setAttribute("onsubmit", "return false");

    var label = document.createElement("label");
    label.setAttribute("for", "list");
    label.innerHTML = "Enter a value";

    var input = document.createElement("input");
    input.setAttribute("id", "list");
    input.setAttribute("type", "text");
    input.setAttribute("name", "inputList");

    var buttonSave = document.createElement("button");
    buttonSave.addEventListener('click', function(){
        SaveList(list);
    });
    buttonSave.innerHTML = "Save";

    var buttonAdd = document.createElement("button");
    buttonAdd.addEventListener('click', function(){
        var li = document.createElement("li");
        li.innerHTML = input.value;

        list.appendChild(li);
    });
    buttonAdd.innerHTML = "Add";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(buttonAdd);
    form.appendChild(buttonSave);

    // виклюкаємо форму за дабл-кліком
    first.onclick = event => {
        if (event.detail === 2) {
            first.appendChild(form);
            first.appendChild(list);
        }
    };
    second.onclick = event => {
        if (event.detail === 2) {
            second.appendChild(form);
            second.appendChild(list);
        }
    };
    third.onclick = event => {
        if (event.detail === 2) {
            third.appendChild(form);
            third.appendChild(list);
        }
    };
    fourth.onclick = event => {
        if (event.detail === 2) {
            fourth.appendChild(form);
            fourth.appendChild(list);
        }
    };
    fifth.onclick = event => {
        if (event.detail === 2) {
            fifth.appendChild(form);
            fifth.appendChild(list);
        }
    };
    sixth.onclick = event => {
        if (event.detail === 2) {
            sixth.appendChild(form);
            sixth.appendChild(list);
        }
    };

    // виклюкаємо форму за тапом
    first.addEventListener("touchstart", ()=>{
        first.appendChild(form);
        first.appendChild(list);
    });
    second.addEventListener("touchstart", ()=>{
        second.appendChild(form);
        second.appendChild(list);
    });
    third.addEventListener("touchstart", ()=>{
        third.appendChild(form);
        third.appendChild(list);
    });
    fourth.addEventListener("touchstart", ()=>{
        fourth.appendChild(form);
        fourth.appendChild(list);
    });
    fifth.addEventListener("touchstart", ()=>{
        fifth.appendChild(form);
        fifth.appendChild(list);
    });
    sixth.addEventListener("touchstart", ()=>{
        sixth.appendChild(form);
        sixth.appendChild(list);
    });
});



window.addEventListener("load", function(event) {
    var color = localStorage.getItem('color');
    localStorage.clear();
    localStorage.setItem('color', color);
})